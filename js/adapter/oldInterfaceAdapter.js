module.exports = (function () {

  let newInterface = require('./newInterface');

  return {
    doSmthOld: function () {
      return newInterface.doSmthNew('New THING');
    }
  }
})();