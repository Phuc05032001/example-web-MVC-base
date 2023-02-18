const HomeRouter = require("./home");

function route(app) {
  app.use("/", HomeRouter);
}

module.exports = route;
