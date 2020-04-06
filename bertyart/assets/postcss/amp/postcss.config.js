module.exports = {   
  plugins: [        
    require('postcss-import')({
      path: ["assets/css"],
    }), 
    require('@fullhuman/postcss-purgecss')({
      content: [
        'layouts/_default/*.html', 
        'layouts/docs/*.html', 
        'layouts/blog/*.html', 
        'layouts/jobs/*.html',
        'layouts/partials/**/*.html',
        'layouts/shortcodes/**/*.html', 

        'content/blog/*.md',
        'content/docs/*.md',
        'content/jobs/*.md',
        'content/contribute/*.md',
        'content/press/*.md',
        'content/privacy-policy/*.md',
        'content/terms/*.md',
      ],
      fontface: true,
      whitelist: ['blockquote', 'pre', 'ol', 'h6'],
    }),    
    require('autoprefixer')({
      grid: true,
    }), 
  ]
}