module.exports = (function () {
  let pubsub = require('./pubsub'),
  subscription;

  subscription = pubsub.subscribe('atopic', function (data) {
    console.log('atopic was published with data: ' + data);
    subscription.unsubscribe();
  });

})();