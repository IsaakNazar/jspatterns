module.exports = (function () {

  let NewInterface = function () { };

  NewInterface.prototype.doSmthNew = function (newArg){
    console.log('doing the', newArg);
  };

  return new NewInterface();
})();