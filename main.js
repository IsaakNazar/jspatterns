
(function () {
  let factory = require("./js/factory/init"),
      pubsub = require("./js/pubsub/init"),
      strategy = require("./js/strategy/init"),
      observer = require("./js/observer/init"),
      iterator = require("./js/iterator/init"),
      cor = require("./js/cor/init"),
      mediator = require("./js/mediator/init"),
      facade = require("./js/facade/init"),
      decorator = require("./js/decorator/init"),
      adapter = require("./js/adapter/init"),
      composite = require("./js/composite/init"),
      proxy = require("./js/proxy/init");

  const examples = {
    factory,
    pubsub,
    strategy,
    observer,
    cor,
    iterator,
    mediator,
    facade,
    decorator,
    adapter,
    composite,
    proxy
  };
  // console.log(examples.factory.init());
  // console.log(examples.pubsub.init());
  // console.log(examples.strategy.init());
  // console.log(examples.observer.init());
  // console.log(examples.iterator.init());
  // console.log(examples.cor.init());
  // console.log(examples.mediator.init());
  // console.log(examples.facade.init());
  // console.log(examples.decorator.init());
  // console.log(examples.adapter.init());
  // console.log(examples.composite.init());
  console.log(examples.proxy.init());

})();