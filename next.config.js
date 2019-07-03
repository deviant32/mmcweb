require('dotenv').config();

const path = require('path');
const Dotenv = require('dotenv-webpack');
const withSass = require('@zeit/next-sass');
const sanity = require('./client');

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
  exportPathMap: async () => {

    // we fetch our list of posts, this allow us to dynamically generate the exported pages
    const response = await sanity.fetch('*[_type == "case_study" && defined(slug)].slug.current');

    // tranform the list of posts into a map of pages with the pathname `/post/:id`
    const pages = response.reduce(
      (pages, post) => {
        Object.assign({}, pages, {
          [`/case-studies/${post}`]: {
            page: '/case-study',
            query: { title: post }
          }
        })
      }
    )

    return Object.assign({}, pages, {
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
      '/industries/healthcare': { page: '/case-studies' },
      '/careers': { page: '/team' },
      '/contact': { page: '/contact-us' },
      '/company': { page: '/growth-reinvented' },
      '/new-products': { page: '/growth-reinvented' },
    });
  }
})
