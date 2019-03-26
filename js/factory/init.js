module.exports = (function () {
  return {
    init: function () {
      let myVideo,
        myImage,
        mediaFactory = require('./mediaFactory');

      myVideo = mediaFactory.createMedia('Video', {
        length: 3.5,
        name: 'My Video'
      });

      myImage = mediaFactory.createMedia('Image', {
        width: 100,
        height: 100,
        name: 'My Image'
      });

      return {
        myVideo,
        myImage
      }
    }
  }
})();