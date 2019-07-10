const sanityClient = require('@sanity/client');

module.exports = sanityClient({
  projectId: 'lg39ot3x',
  dataset: process.env.SANITY_ENV,
  useCdn: true
})
