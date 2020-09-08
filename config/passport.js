const CookieStrategy = require('passport-cookie').Strategy;
const models = require('../models');

module.exports = function(passport)
{
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        models.users.findOne({ where: {id: id} }).then(function(result) {
            if (!result) { return done(null, false); }
            done(null, result);
        }).catch(function(err) {
            done(err, null);
        });
    });

    passport.use(new CookieStrategy({
            cookieName: 'uauth',
            signed: true,
            // usernameField: 'username',
            // passwordField: 'password',
        },
        function(token, done)
        {
            models.users.findOne({ where: {auth_token: token} }).then(function(result) {
                if (!result) { return done(null, false); }
                return done(null, result);
            }).catch(function(err) {
                done(err, null);
            });
        }
    ));
};