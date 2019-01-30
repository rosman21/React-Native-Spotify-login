const passport = require('passport')
var express = require('express');
var router = express.Router();
var auth = require('./controllers/auth');

router.get('/auth/status', auth.authStatus);
router.get('/auth/spotify',
  passport.authenticate('spotify', {scope: ['user-read-email', 'user-read-private'], showDialog: true}),
  auth.authSpotify);

router.get('/callback',
  passport.authenticate('spotify', { failureRedirect: '/auth/spotify' }),
  auth.spotifyCallback);

router.get('/logout', auth.spotifyLogout);

module.exports = router;