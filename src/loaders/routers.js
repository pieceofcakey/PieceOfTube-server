const indexRouter = require("../routes/index");

async function routerLoader(app) {
  app.use("/", indexRouter);
  console.log("hi");
  const a = 1;
}

module.exports = routerLoader;
