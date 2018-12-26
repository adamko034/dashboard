const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const keys = require("../config/keys");
const mongoose = require("mongoose");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);

  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientId,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      let user = await User.findOne({ googleId: profile.id });
      if (user) {
        return done(null, user);
      }

      user = await new User({
        googleId: profile.id,
        displayName: profile.displayName || "",
        forename: profile.name.givenName || "",
        surname: profile.name.familyName || "",
        imageUrl: profile.photos[0] ? profile.photos[0].value : ""
      }).save();
      done(null, user);
    }
  )
);
