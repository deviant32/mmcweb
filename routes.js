const nextRoutes = require('next-routes')

const routes = module.exports = nextRoutes()

routes.add('blog', '/blog/:slug?')
routes.add('growth-reinvented', '/growth-reinvented')
routes.add('typography', '/typography')
routes.add('generic', '/:pagename')
