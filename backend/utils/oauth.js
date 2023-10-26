const OAuth2Strategy = require('passport-oauth2');
const passport = require('passport');
const User = require('../models/User');

passport.use(new OAuth2Strategy({
    authorizationURL: 'https://www.example.com/oauth2/authorize',
    tokenURL: 'https://www.example.com/oauth2/token',
    clientID: process.env.OAUTH2_CLIENT_ID,
    clientSecret: process.env.OAUTH2_CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/auth/example/callback'
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ oauthId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

module.exports = passport;