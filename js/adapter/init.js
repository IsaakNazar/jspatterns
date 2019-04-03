module.exports = (function () {
  return {
    init: function () {

      let oldInterfaceAdapter = require('./oldInterfaceAdapter');

      oldInterfaceAdapter.doSmthOld();
    }
  }
})();