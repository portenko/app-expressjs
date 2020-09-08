var express = require('express');
var router = express.Router();
const bcrypt =  require('bcrypt');
const models = require('../../models');
const uniqueString = require('unique-string');
const CookieStrategy = require('passport-cookie').Strategy;

router.get('/', function(req, res) {

    const key = new CookieStrategy({
        cookieName: 'uauth',
        signed: true,
        // usernameField: 'username',
        // passwordField: 'password',
    }, function(token, done) {
        console.log(token);
    });




    res.render('admin/login', {
        layout: 'admin/layouts/blank',
        title: 'Login',
        message: req.flash('message')
    });
});

router.post('/', function(req, res) {
    if(!req.body.username && !req.body.password){
        res.render('admin/login', {
            layout: 'admin/layouts/blank',
            title: 'Login',
            message: 'Enter username and password'
        });
    }
    models.users.findOne({ where: {username: req.body.username} })
        .then(function(user)
        {
            if (!user) { return req.flash('message', 'Username or password is invalid'); }
            bcrypt.compare(req.body.password, user.password_hash, function (err, result)
            {
                if (result === true && user.status === 1) {
                    user.auth_token = uniqueString();
                    if(user.save()){
                        res.cookie('uauth', user.auth_token);
                        return res.redirect('/admin/');
                    }
                }
                else {
                    res.render('admin/login', {
                        layout: 'admin/layouts/blank',
                        title: 'Login',
                        message: 'Username or password is invalid'
                    });
                }
            });
        });
});

module.exports = router;

// router.post('/',
//     passport.authenticate('cookie', {
//         successRedirect: '/admin/',
//         failureRedirect: '/admin/login',
//         failureFlash: true
//     }));
