module.exports = (function () {

  const Observers = function () {
    this.observers = [];
  };

  Observers.prototype.add = function (observer) {
    this.observers.push(observer);
  };

  Observers.prototype.remove = function (observerToRemove) {
    this.observers = this.observers
                         .filter(observer => observer !== observerToRemove);
  };

  Observers.prototype.get = function () {
    return this.observers;
  };

  return Observers;

})();