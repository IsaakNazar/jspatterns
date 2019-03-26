let mediaFactory = (function () {
  const media = {
    Video: require('./video'),
    Image: require('./image')
  };
  
  return {
    createMedia: function (type, attrs) {
      let MediaType = media[type];

      return new MediaType(attrs);
    }
  }
})();

module.exports = mediaFactory;


