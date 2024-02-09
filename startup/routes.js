const error = require('../middleware/error_middleware');
const usersRouter = require("../routes/user_route");
const notFoundRouter = require("../routes/not_found_route");

const initRoutes = (app) => {
  app.use('/user', usersRouter);

  app.use(error);
  app.use('*', notFoundRouter)
}

module.exports = {
  init: initRoutes
}
