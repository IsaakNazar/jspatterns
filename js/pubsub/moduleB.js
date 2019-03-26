module.exports = (function () {
  const pubsub = require('./pubsub');

  return {
    publishEvent: function () {
      let data = {
        somedata: 'some data'
      };

      pubsub.publish('atopic', data.somedata);
    }
  }
})();