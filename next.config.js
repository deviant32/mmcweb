require('dotenv').config();

const path = require('path');
const Dotenv = require('dotenv-webpack');
const withSass = require('@zeit/next-sass');

module.exports = withSass({
  webpack: config => {
    config.plugins = config.plugins || []
    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true
      })
    ]

    return config
  },
  publicRuntimeConfig: {
    GOOGLE_TAGS: process.env.GOOGLE_TAGS
  },
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/growth-reinvented': { page: '/growth-reinvented' },
      '/resources': { page: '/resources' },
      '/contact-us': { page: '/contact-us' },
      '/thank-you': { page: '/thank-you' },
      '/team': { page: '/team' },
      '/case-studies': { page: '/case-studies' },
      '/industries': { page: '/industries' },
      '/capabilities': { page: '/capabilities' },
      '/community': { page: '/community' },
    }
  }
})
