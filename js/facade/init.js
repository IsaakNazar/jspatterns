module.exports = (function () {
  return {
    init: function () {

      let facade = require('./facade');

      return [
        facade.processThing('test string'),
        facade.processThing(312),
        facade.processThing('33'),
        facade.processThing([1, 2, 3]),
        facade.processThing({prop: 'something'})
      ]
    }
  };
})();