const nextRoutes = require('next-routes');

const routes = module.exports = nextRoutes();

routes.add('blog', '/blog/:slug?');
routes.add('growth-reinvented', '/growth-reinvented');
routes.add('resources', '/resources');
routes.add('contact-us', '/contact-us');
routes.add('thank-you', '/thank-you');
routes.add('team', '/team');
routes.add('case-studies', '/case-studies');
routes.add('industries', '/industries');
routes.add('capabilities', '/capabilities');
routes.add('community', '/community');

