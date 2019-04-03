module.exports = (function () {
  return {
    init: function () {

      let myProxy,
          slowObjectProxy = require('./slowObjectProxy');

      myProxy = slowObjectProxy.init();
      myProxy.doSomethingSlowly();
    }
  }
})();