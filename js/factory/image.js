let image = (function () {
  let Image = function (attrs) {
    this.width = attrs.width || 0;
    this.height = attrs.height || 0;
    this.name = attrs.name || 'noname';
  };

  return Image;
})();

module.exports = image;
