module.exports = (function () {
  return {
    processString: function (str) {
      return str.slice(0, str.length / 2);
    },

    processNumber: function (num) {
      return num * num;
    },
    
    processBoolean: function (bool) {
      return !bool;
    },

    processArray: function (array) {
      return array.length;
    },

    processObject: function (obj) {
      return Object.keys(obj).length;
    }
  };
})();