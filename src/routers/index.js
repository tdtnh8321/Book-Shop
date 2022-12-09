const uploadRouter = require("./uploadRouter");
const bookRouter = require("./bookRouter");
function route(app) {
  app.use("/api", uploadRouter);
  app.use("/book", bookRouter);
}
module.exports = route;
