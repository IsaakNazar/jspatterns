module.exports = (function () {

  let SlowObjectProxy, slowObjectInstance,
      slowObject = require('./slowObject');
  
  SlowObjectProxy = function () {
    this.doSomethingSlowly = function () {
      let interval;

      if (!slowObjectInstance) {
        slowObjectInstance = slowObject.init();
      } else {
        slowObjectInstance.doSomethingSlowly();
      }

      interval = window.setInterval(invokeExistingMethod, 100);
      
      function invokeExistingMethod() {
        if (slowObjectInstance) {
          console.log('proxying some method');
          window.clearInterval(interval);

          slowObjectInstance.doSomethingSlowly();
        }
      }
    }
  };

  return {
    init: function () {
      return new SlowObjectProxy();
    }
  }
})();