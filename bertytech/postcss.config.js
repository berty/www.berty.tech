const purgeCssWhitelist = {
  whitelist: ['value-true','value-false','value-partially', 'highlight', 'anchor-heading', 'anchor-link', 'img', 'show', 'blockquote', 'pre', 'ol', 'h6', 'table', 'tbody', 'thead', 'tr', 'th', 'td', 'table-bordered', 'show', 'collapsing', 'section-id', 'block-id', 'block-id-avatar', 'block-id-name', 'block-id-qrcode', 'block-error', 'display-none', 'tag', 'blue', 'pink', 'yellow', 'black', 'bg-about', 'bg-download', 'bg-contact', 'toc', 'toc-list', 'toc-link', 'is-collapsible', 'is-collapsed', 'is-position-fixed', 'is-active-link', 'page-fake', 'bg-particles', 'faq-collapsing'],
  whitelistPatterns: [/^slick/],
}

module.exports = { 
  purgeCssWhitelist,  
  plugins: [        
    require('postcss-import')({
      path: ["assets/css"],
    }), 
    require('@fullhuman/postcss-purgecss')({
      content: ['layouts/**/*.html', 'content/**/*.md'],
      fontface: true,
      ...purgeCssWhitelist
    }),    
    require('autoprefixer')({
      grid: true,
    }), 
  ]
}