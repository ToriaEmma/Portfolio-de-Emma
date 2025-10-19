#!/bin/bash

# Vérifier si les outils nécessaires sont installés
check_requirements() {
    local missing=()
    
    if ! command -v convert &> /dev/null; then
        missing+=("ImageMagick (convert)")
    fi
    
    if ! command -v cwebp &> /dev/null; then
        missing+=("WebP (cwebp)")
    fi
    
    if ! command -v npx &> /dev/null; then
        missing+=("Node.js (npx)")
    fi
    
    if [ ${#missing[@]} -ne 0 ]; then
        echo "Les outils suivants sont requis mais manquants :"
        for item in "${missing[@]}"; do
            echo " - $item"
        done
        echo "\nVeuillez les installer avant de continuer."
        exit 1
    fi
}

# Optimiser les images
optimize_images() {
    local webp_quality=80
    local jpg_quality=85
    local max_width=1920
    
    echo "🔍 Recherche d'images à optimiser..."
    
    # Créer un dossier pour les images optimisées
    mkdir -p "optimized_images"
    
    # Trouver et optimiser les images
    find . -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | while read -r img; do
        # Ignorer les images déjà optimisées
        if [[ $img == *"optimized_"* ]] || [[ $img == *"optimized_images/"* ]]; then
            continue
        fi
        
        # Créer le dossier de destination si nécessaire
        mkdir -p "optimized_images/$(dirname "$img")"
        
        # Nom du fichier de sortie
        filename=$(basename -- "$img")
        extension="${filename##*.}"
        filename_noext="${filename%.*}"
        output_path="optimized_images/$(dirname "$img")/optimized_${filename_noext}.webp"
        
        echo "🔄 Optimisation de : $img"
        
        # Convertir en WebP avec une qualité raisonnable
        convert "$img" -resize "${max_width}x>" -quality "${webp_quality}" "${output_path}"
        
        # Vérifier la taille du fichier
        original_size=$(stat -f%z "$img" 2>/dev/null || stat -c%s "$img" 2>/dev/null)
        new_size=$(stat -f%z "${output_path}" 2>/dev/null || stat -c%s "${output_path}" 2>/dev/null)
        
        # Calculer l'économie
        if [ $new_size -lt $original_size ]; then
            savings=$(( (original_size - new_size) * 100 / original_size ))
            echo "✅ Optimisé : $img (économie de ${savings}%)"
            
            # Remplacer l'original par l'optimisé (décommenter si vous voulez remplacer automatiquement)
            # mv "$output_path" "$img"
        else
            echo "⚠️  Aucune économie pour $img, conservation de l'original"
            rm -f "$output_path"
        fi
    done
    
    echo "✅ Optimisation des images terminée"
}

# Minifier les fichiers CSS et JS
minify_assets() {
    echo "🔍 Recherche de fichiers CSS et JS à minifier..."
    
    # Installer les outils de minification si nécessaire
    if [ ! -d "node_modules" ]; then
        echo "📦 Installation des dépendances..."
        npm init -y
        npm install uglify-js clean-css-cli html-minifier-terser -D
    fi
    
    # Minifier les fichiers JS
    find . -type f -name "*.js" ! -name "*.min.js" ! -path "*/node_modules/*" ! -path "*/_nuxt/*" | while read -r jsfile; do
        if [[ $jsfile == *"optimized_"* ]] || [[ $jsfile == *"optimized_assets/"* ]]; then
            continue
        fi
        
        echo "📝 Minification de : $jsfile"
        mkdir -p "optimized_assets/$(dirname "$jsfile")"
        npx uglifyjs "$jsfile" -o "optimized_assets/${jsfile}" -c -m
    done
    
    # Minifier les fichiers CSS
    find . -type f -name "*.css" ! -name "*.min.css" ! -path "*/node_modules/*" ! -path "*/_nuxt/*" | while read -r cssfile; do
        if [[ $cssfile == *"optimized_"* ]] || [[ $cssfile == *"optimized_assets/"* ]]; then
            continue
        fi
        
        echo "🎨 Minification de : $cssfile"
        mkdir -p "optimized_assets/$(dirname "$cssfile")"
        npx cleancss -o "optimized_assets/${cssfile}" "$cssfile"
    done
    
    echo "✅ Minification terminée"
}

# Optimiser le HTML
optimize_html() {
    echo "🔍 Recherche de fichiers HTML à optimiser..."
    
    find . -type f -name "*.html" | while read -r htmlfile; do
        echo "📄 Optimisation de : $htmlfile"
        
        # Créer une sauvegarde
        cp "$htmlfile" "${htmlfile}.bak"
        
        # Créer un fichier temporaire
        tempfile="${htmlfile}.tmp"
        
        # Optimisations de base (suppression des espaces multiples et lignes vides)
        tr '\n' ' ' < "$htmlfile" | tr -s '[:space:]' ' ' > "$tempfile"
        
        # Ajouter les attributs de chargement différé pour les images et iframes
        perl -i -pe 's/<img((?:(?!loading=)[^>])*) src=("[^"]*")/<img$1 loading="lazy" src=$2/gi' "$tempfile"
        perl -i -pe 's/<iframe((?:(?!loading=)[^>])*) src=("[^"]*")/<iframe$1 loading="lazy" src=$2/gi' "$tempfile"
        
        # Remplacer le fichier original par le fichier optimisé
        mv "$tempfile" "$htmlfile"
        
        # Minifier le HTML (optionnel, plus lent mais plus efficace)
        if command -v html-minifier-terser &> /dev/null; then
            html-minifier-terser --collapse-whitespace \
                               --remove-comments \
                               --remove-optional-tags \
                               --remove-redundant-attributes \
                               --remove-script-type-attributes \
                               -o "$htmlfile" "$htmlfile"
        fi
        
        echo "✅ Fichier optimisé : $htmlfile"
    done
}

# Fonction principale
main() {
    echo "🚀 Début de l'optimisation du site..."
    
    check_requirements
    optimize_images
    minify_assets
    optimize_html
    
    echo "✨ Optimisation terminée avec succès !"
    echo "\n📋 Étapes suivantes :"
    echo "1. Vérifiez les images optimisées dans le dossier 'optimized_images/'"
    echo "2. Vérifiez les ressources minifiées dans le dossier 'optimized_assets/'"
    echo "3. Testez votre site avec Google PageSpeed Insights : https://pagespeed.web.dev/"
    echo "4. Pour déployer les optimisations, copiez les fichiers optimisés vers votre site"
}

# Exécuter le script
main "$@"
