const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys.js");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const passport = require("passport");

require("./models/User");
require("./services/passport.js");

mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true }
);

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/openWeatherMapRoutes")(app);
require("./routes/authRoutes")(app);
require("./routes/settingsRoutes")(app);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendfile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(process.env.PORT || 5000);
