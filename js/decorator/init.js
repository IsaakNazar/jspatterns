module.exports = (function () {
  return {
    init: function () {

      let user1, user2,
          User = require('./user'),
          execDecorator = require('./decorators/exec'),
          adminDecorator = require('./decorators/admin');

      user1 = new User('user1');
      user1.decoratePermissions(execDecorator);

      user2 = new User('user2');
      user2.decoratePermissions(adminDecorator);

      console.log(user2.getPermissions());
    }
  }
})();