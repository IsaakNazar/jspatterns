module.exports = (function () {
  return {
    init: function () {
      let Strategy = require('./strategy'),
        phoneValidator = require('./phoneValidator'),
        emailValidator = require('./emailValidator'),
        validator;

      validator = new Strategy();
      const phone = validator.selectValidator(phoneValidator)
        .validate("012345678910"),
        email = validator.selectValidator(emailValidator)
          .validate("nazarmail.@ru");
      return {
        phone,
        email
      }
    }
  };
})();