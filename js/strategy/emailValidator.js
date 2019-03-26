module.exports = (function () {
  return {
    validating: function (value) {
      console.log(value);
      return value.indexOf('@') !== -1;
    }
  }
})();