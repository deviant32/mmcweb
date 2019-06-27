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

// case studies

// building
routes.add('/case-studies/building-products/hvac', '/case-studies/building-products/hvac');
routes.add('/case-studies/building-products/hvac-res', '/case-studies/building-products/hvac-res');
routes.add('/case-studies/building-products/roofing', '/case-studies/building-products/roofing');
routes.add('/case-studies/building-products/distributor', '/case-studies/building-products/distributor');
routes.add('/case-studies/building-products/big-box-retailer', '/case-studies/building-products/big-box-retailer');

// healthcare
routes.add('/case-studies/healthcare/diagnostics', '/case-studies/healthcare-diagnostics');
routes.add('/case-studies/healthcare/pharmaceutical', '/case-studies/pharmaceutical');
routes.add('/case-studies/healthcare/wound', '/case-studies/wound');

