module.exports = (function () {
  
  return {
    init: function () {
      let subject, observer, otherObserver, data, moreData,
          Subject = require('./subject'),
          Observer = require('./observer');
      subject = new Subject();
      observer = new Observer('obs1');
      otherObserver = new Observer('obs2');

      data = {
        prop: 'something'
      };
      moreData = {
        prop: 'smth else'
      };

      subject.observe(observer);
      subject.observe(otherObserver);

      subject.add(data);
      subject.add(moreData);

      // subject.unObserve(observer);
      // subject.remove(data);
    }
  }
})();