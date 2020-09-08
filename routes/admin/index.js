var express = require('express'),
    router  = express.Router(),
    fs = require('fs'),
    passport = require('passport');

// base route
router.get('/admin/', passport.authenticate("cookie", { successRedirect: '/admin/', failureRedirect: '/admin/login/' }),
    function(req, res, next) {
  res.redirect('/admin/posts/');
});

// Read each file in the routes directory
fs.readdirSync( __dirname ).forEach( function( route )
{
  // Strip the .js suffix
  route = route.split('.')[0];
  // Ignore index (i.e. this file)
  if ( route === 'index' || route === 'baseRouter') return ;
  // Mount router
  router.use('/admin/' + route, require('./' + route + '.js'));
});
module.exports = router;


