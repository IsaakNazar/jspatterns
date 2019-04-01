module.exports = (function () {

  let Colleague = function (id, mediator) {
    this.id = id;
    this.mediator = mediator;
  };

  Colleague.prototype.receiveMessage = function (message) {
    console.log('Module', this.id, 'received message', message);
    return true;
  };

  Colleague.prototype.sendMessage = function (message, recipientId) {
    recipientId ? this.mediator.send(message, recipientId) : this.mediator.broadcast(message, this);
    // console.log('THIS ===>>', this);
  };

  return {
    create: function (id, mediator) {
      let that = new Colleague(id, mediator);

      mediator.register(that);

      return that;
    }
  }
})();