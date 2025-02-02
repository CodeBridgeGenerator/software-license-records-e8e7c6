const { Software } = require('./software.class');
const createModel = require('../../models/software.model');
const hooks = require('./software.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/software', new Software(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('software');

  service.hooks(hooks);
};