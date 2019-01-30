const express = require("express"),
    bodyParser = require("body-parser"),
    passport = require("passport"),
    SpotifyStrategy = require("passport-spotify").Strategy,
    routes = require("./routes"),
    app = express();
require('dotenv').config()    

// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session. Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing. However, since this example does not
//   have a database of user records, the complete spotify profile is serialized
//   and deserialized.
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

// Use the SpotifyStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, expires_in
//   and spotify profile), and invoke a callback with a user object.
passport.use(
  new SpotifyStrategy(
    {
      clientID: process.env.appKey,
      clientSecret: process.env.appSecret,
      callbackURL: process.env.callbackURL //look at App.js line 18, add this here and to your spotify application or look in expo console
    },
    function(accessToken, refreshToken, expires_in, profile, done) {
      // asynchronous verification, for effect...
      process.nextTick(function() {
        // To keep the example simple, the user's spotify profile is returned to
        // represent the logged-in user. In a typical application, you would want
        // to associate the spotify account with a user record in your database,
        // and return that user instead.
        return done(null, profile);
      });
    }
  )
);

// configure Express
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded 

// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());

app.use(routes); // define routes last always

app.listen(8888, function() {
  console.log("Listening on port 8888!");
});