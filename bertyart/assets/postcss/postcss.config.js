module.exports = {   
  plugins: [        
    require('postcss-import')({
      path: ["assets/css"],
    }), 
    require('@fullhuman/postcss-purgecss')({
      content: ['layouts/**/*.html', 'content/**/*.md'],
      fontface: true,
      whitelist: ['blockquote', 'pre', 'ol', 'h6'],
      whitelistPatterns: [/^slick/],
    }),    
    require('autoprefixer')({
      grid: true,
    }), 
  ]
}