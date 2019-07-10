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
    GOOGLE_TAGS: process.env.GOOGLE_TAGS,
    SANITY_ENV: process.env.SANITY_ENV
  },
  exportPathMap: async (defaultPathMap) => {

    // fetch all of the case studies and make pages
    const case_studies = await sanity.fetch('*[_type == "case_study" && defined(slug)].slug.current');

    var pages = {};

    case_studies.forEach((page) => {
      pages[`/case-studies/${page}`] = { page: '/case-studies/[title]', query: { title: page } };
    });

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


    /* not working yet....
    const paths = await sanity
        .fetch('*[_type == "case_study" && defined(slug)].slug.current')
        .then(data =>
            data.reduce(
                (acc, slug) => ({
                    '/': { page: '/' },
                    ...acc,
                    [`/case-studies/${slug}`]: { page: '/case-studies/[title]', query: { title: slug } }
                }),
                defaultPathMap
            )
        )
        .catch(console.error)
    return paths;*/
  }
})
