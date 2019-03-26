module.exports = (function () {
  return {
    init: function () {
      const moduleA = require('./moduleA'),
            moduleB = require('./moduleB');

      moduleB.publishEvent();
      moduleB.publishEvent();
    }
  };
})();