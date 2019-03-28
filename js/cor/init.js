module.exports = (function () {
  return {
    init: function () {

      let call, sms, email, handler,
          Handler = require('./handler'),
          callHandler = require('./handlers/call');

      call = {
        type: 'call',
        number: '0123872992',
        ownNumber: '0312999999'
      };
      sms = {
        type: 'sms',
        number: '0123833333',
        message: 'hey man'
      };
      email = {
        type: 'email',
        recipient: 'lolo@kik.kk',
        message: 'Hey to me'
      };

      handler = new Handler(null, null, callHandler);
      handler.handleCommunication(email);
      handler.handleCommunication(sms);
      handler.handleCommunication(call);
    }
  };
})();