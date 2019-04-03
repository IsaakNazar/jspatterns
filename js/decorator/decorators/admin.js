module.exports = (function () {
  return {
    getPermissions: function () {
      return 'public:write,confidential:write';
    }
  };
})();