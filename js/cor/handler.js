module.exports = (function () {

  const CommunicationHandler = function (communicationType, handler, nextHandler) {
    this.communicationType = communicationType;
    this.handler = handler;
    this.nextHandler = nextHandler;
  };

  CommunicationHandler.prototype.handleRequest = function (communication) {
    if(communication.type !== this.communicationType) {
      (this.nextHandler)
        ? this.nextHandler.handleCommunication(communication)
        : console.log('Communication type', communication.type, 'couldnt handled');
      return;
    }
    this.handler(communication);
  };

  return CommunicationHandler;

})();