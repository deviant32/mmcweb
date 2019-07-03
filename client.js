
const sanityClient = require('@sanity/client');

module.exports = sanityClient({
  projectId: 'lg39ot3x',
  dataset: 'production',
  watchMode: true,
  useCdn: false
})
