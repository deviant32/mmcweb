const withSass = require('@zeit/next-sass');

module.exports = withSass({
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/growth-reinvented': { page: '/growth-reinvented' },
      '/typography': { page: '/typography' },
    }
  }
})
