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
};
