var express = require('express'),
    router = express.Router(),
    layout = 'admin/layouts/main',
    viewPath = 'admin/posts',
    posts = require('../../models/categories');

router.get('/', function(req, res, next) {
  res.render('admin/posts/index', {
    layout: 'admin/layouts/main',
    title: 'Posts'
  });
});

router.get('/create/', function(req, res, next) {
  res.render('admin/posts/create', {
    layout: 'admin/layouts/main',
    title: 'Add post'
  });
});

router.get('/update/:id', function(req, res, next) {
  res.render('admin/posts/update', {
    layout: 'admin/layouts/main',
    title: 'Add post'
  });
});

router.get('/delete/:id', function(req, res, next) {
  res.render('admin/posts/update', {
    layout: 'admin/layouts/main',
    title: 'Add post'
  });
});

router.get('/status/:id', function(req, res, next) {
  res.render('admin/posts/update', {
    layout: 'admin/layouts/main',
    title: 'Add post'
  });
});

module.exports = router;
