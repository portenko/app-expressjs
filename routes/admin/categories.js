var express = require('express'),
    router = express.Router(),
    layout = 'admin/layouts/main',
    viewPath = 'admin/categories',
    models = require('../../models');

router.get('/', function(req, res, next) {
  res.render(viewPath + '/index', {
      layout: layout,
      title: 'Categories',
      categories: categories.getAll()
  });
});

router.get('/create/', function(req, res, next) {
    res.render(viewPath + '/create', {
        layout: layout,
        title: 'Create category',
    });
});

router.post('/create/', function(req, res, next) {
    var model = models.categories;
    return model.create({
        name: req.body.name,
        status: 1,
        type: 'posts',
        lang: 'en',
        sort: req.body.sort || 10,
        created_by: 1,
    }).then(function (result) {
        if (result) {
            console.log(result);
            res.redirect('/admin/categories/update/'+result.id+'/');
        } else {
            res.render(viewPath + '/create', {
                layout: layout,
                title: 'Create category',
                model: model,
                error: 'Error in insert new record'
            });
        }
    });
});

router.get('/update/:id(\\d+)', function(req, res, next) {
  const model = findModel(req.params.id);
  res.render(viewPath + '/update', {
    layout: layout,
    title: 'Update category: '+model.name,
    model: model
  });
});

router.get('/delete/:id', function(req, res, next) {
  res.render(viewPath + '/update', {
    layout: layout,
    title: 'Add category'
  });
});

router.get('/status/:id', function(req, res, next) {
  res.render(viewPath + '/update', {
    layout: layout,
    title: 'Add category'
  });
});

/**
 * @param id
 * @param res
 */
function findModel(id, res){
    const model = categories.getOne(id);
    if(!model){
        throw new Error('The requested page does not exist.')
    }
    else {
        return model;
    }
}

module.exports = router;
