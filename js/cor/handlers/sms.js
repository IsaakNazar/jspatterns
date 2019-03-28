module.exports = (function () {

  let Handler = require('../handler'),
      emailHandler = require('./email'),
      smsHandler;

  smsHandler = new Handler('sms', handleSms, emailHandler);

  function handleSms(sms) {
    console.log('Sms sent to', sms.number, ', message:', sms.message);
  }
  return smsHandler;

})();