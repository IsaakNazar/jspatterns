module.exports = (function () {
  return {
    init: function () {

      let mediator, colleague1, colleague2, colleague3,
          Mediator = require('./mediator'),
          colleague = require('./colleague');

      mediator = new Mediator();
      colleague1 = colleague.create('colleague1', mediator);
      colleague2 = colleague.create('colleague2', mediator);
      colleague3 = colleague.create('colleague3', mediator);

      colleague1.sendMessage('Hey there', 'colleague2');
      colleague2.sendMessage('Hey colleague1', 'colleague1');
      colleague3.sendMessage('Hello everyone!!!');
    }
  };
})();