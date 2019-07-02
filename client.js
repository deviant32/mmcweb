import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'lg39ot3x',
  dataset: 'production',
  useCdn: true // change to false for live changes
})
