./node_modules/html-minifier/cli.js \
    --input-dir ./public \
    --output-dir ./public \
    --collapse-whitespace \
    --remove-comments \
    --minify-css {\"level\":{\"1\":{\"specialComments\":0}}} \
    --process-scripts "[\"application/json\", \"application/ld+json\"]" \
    --file-ext html 