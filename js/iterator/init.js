module.exports = (function () {

  return {
    init: function () {
      let iterator = require('./iterator'),
        testArray = [{prop: 'wow', another: 123},
          {prop: 'oops', another: 432}],
        myArrayIterator = iterator.build(testArray);

      return myArrayIterator.reset().take(3);
    }
  }

})();