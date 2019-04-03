module.exports = (function () {
  let OldInterface = function () { };
  
  OldInterface.prototype.doSmthOld = function () {
    console.log('doing something old');
  };

  return new OldInterface();
})();