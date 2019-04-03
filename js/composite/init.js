module.exports = (function () {
  return {
    init: function () {

      let Node = require('./node'),
          root = new Node('Freddy'),
          child1 = new Node('Child1'),
          child2 = new Node('Child2'),
          child3 = new Node('Child3'),
          child4 = new Node('Child4'),
          child5 = new Node('Child5'),
          child6 = new Node('Child6');

      root.addChild(child1);
      root.addChild(child2);

      child2.addChild(child3);
      child2.addChild(child4);

      child4.addChild(child5);

      child5.addChild(child6);

      child5.traverseDown();

    }
  }
})();