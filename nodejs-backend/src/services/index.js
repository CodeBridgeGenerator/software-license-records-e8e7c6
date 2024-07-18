const users = require("./users/users.service.js");
const staff = require("./staff/staff.service.js");
const software = require("./software/software.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
    app.configure(users);
  app.configure(staff);
  app.configure(software);
    // ~cb-add-configure-service-name~
};
