exports.init = function(app) {
  app.get("/", function (req, res, next) {
    res.render("index");
  });

  app.get("/hello", function (req, res, next) {
    res.send("Hello world!");
  });

  app.get("/form", function (req, res, next) {
    res.redirect("/");
  });

  app.get("/javascript", function (req, res, next) {
    res.render("javascript");
  });
}
