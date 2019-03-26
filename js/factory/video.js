let video = (function () {
  let Video = function (attrs) {
    this.length = attrs.length || 0;
    this.name = attrs.name || 'noname';
  };

  return Video;
})();

module.exports = video;