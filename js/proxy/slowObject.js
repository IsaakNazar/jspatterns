module.exports = (function () {

  let SlowObject = function () {
    this.doSomethingSlowly = function () {
      console.log('Do smth slowly method on the slow object was invoked');
    }
  };

  return {
    init: function () {
      for (let x = 0, max = 8; x < max; x++) {
        console.log('slowness...');
      }
      return new SlowObject();
    }
  }
})();