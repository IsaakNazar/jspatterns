module.exports = (function () {

  const Observer = function (name) {
    this.name = name;
  };

  Observer.prototype.notified = function(event, data) {
    console.log('The event ', event, 'The data ', data, 'Im ', this.name );
  };

  return Observer;

})();