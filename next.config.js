require('dotenv').config();

const path = require('path');
const Dotenv = require('dotenv-webpack');
const withSass = require('@zeit/next-sass');

module.exports = withSass({
  webpack: config => {
    config.plugins = config.plugins || [];

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
      '/case-studies/building-products/hvac': { page: '/case-studies/building-products/hvac' },
      '/case-studies/building-products/hvac-res': { page: '/case-studies/building-products/hvac-res' },
      '/case-studies/building-products/roofing': { page: '/case-studies/building-products/roofing' },
      '/case-studies/building-products/distributor': { page: '/case-studies/building-products/distributor' },
      '/case-studies/building-products/big-box-retailer': { page: '/case-studies/building-products/big-box-retailer' },
      '/case-studies/healthcare/diagnostics': { page: '/case-studies/healthcare/diagnostics' },
      '/case-studies/healthcare/pharmaceutical': { page: '/case-studies/healthcare/pharmaceutical' },
      '/case-studies/healthcare/wound': { page: '/case-studies/healthcare/wound' },
      '/industries/healthcare/': { page: '/case-studies' },
      '/careers/': { page: '/team' },
      '/contact/': { page: '/contact-us' },
      '/company/': { page: '/growth-reinvented' },
      '/new-products/': { page: '/growth-reinvented' },
    }
  }
})
