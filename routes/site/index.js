var express = require('express'),
    router  = express.Router(),
    fs = require('fs');

// base route
router.get('/', function(req, res, next) {
  res.render('site/index', {
    layout: 'site/layouts/main',
    title: 'Main page'
  });
});

// Read each file in the routes directory
fs.readdirSync( __dirname ).forEach( function( route )
{
  // Strip the .js suffix
  route = route.split('.')[0];
  // Ignore index (i.e. this file)
  if ( route === 'index' ) return ;
  // Mount router
  router.use('/admin/' + route, require('./' + route + '.js'));
});

module.exports = router;
