module.exports = (function () {

  let subscribers = {};

  return {
    publish: function (topic, data) {
      if (!subscribers[topic]) {
        return;
      }

      subscribers[topic].forEach(subscriber => subscriber(data));
    },
    subscribe: function (topic, callback) {
      let index;
      
      if(!subscribers[topic]) {
        subscribers[topic] = [];
      }

      index = subscribers[topic].push(callback) - 1;

      return {
        unsubscribe: function () {
          subscribers[topic].splice(index, 1);
        }
      }
    }
  }

})();