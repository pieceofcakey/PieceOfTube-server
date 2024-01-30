const indexRouter = require("../routes/index");

async function routerLoader(app) {
  app.use("/", indexRouter);
  console.log("hi");
}

module.exports = routerLoader;
