module.exports = (function () {

  let Handler = require('../handler'),
      smsHandler = require('./sms'),
      callHandler;

  callHandler = new Handler('call', handleCall, smsHandler);

  function handleCall(sms) {
    console.log('Call placed to number', call.number, ' from number:', call.ownNumber);
  }
  return callHandler;

})();