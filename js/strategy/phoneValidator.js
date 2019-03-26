module.exports = (function () {
  return {
    validating: function (value) {
      console.log(value);
      return (/^[0-9]{11}$/g).test(value);
    }
  }
})();