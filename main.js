
(function () {
  let factory = require("./js/factory/init"),
      pubsub = require("./js/pubsub/init"),
      strategy = require("./js/strategy/init"),
      observer = require("./js/observer/init"),
      cor = require("./js/cor/init");

  const examples = {
    factory,
    pubsub,
    strategy,
    observer,
    cor
  };
  // console.log(examples.factory.init());
  // console.log(examples.pubsub.init());
  // console.log(examples.strategy.init());
  // console.log(examples.observer.init());
  console.log(examples.cor.init());

})();