const _ = require("lodash");

module.exports = app => {
  app.post("/api/settings/city", async (req, res) => {
    const { city } = req.body;

    req.user.settings.city = city;

    const user = await req.user.save();
    res.send(user);
  });

  app.post("/api/settings/forecastHours", async (req, res) => {
    const { forecastHours } = req.body;
    req.user.settings.forecastHours = forecastHours;

    const user = await req.user.save();
    res.send(user);
  });

  app.post("/api/settings/twitters", async (req, res) => {
    if (req.user.settings.twitters.length > 3) {
      res.send(req.user);
    }
    const { twitter } = req.body;
    req.user.settings.twitters.push(twitter);
    const user = await req.user.save();

    res.send(user);
  });

  app.delete("/api/settings/twitters/:twitter", async (req, res) => {
    const { twitter } = req.params;

    const currentTwitters = req.user.settings.twitters;
    currentTwitters.splice(currentTwitters.indexOf(twitter), 1);
    const user = await req.user.save();

    res.send(user);
  });
};
