//工具类 v0.01

(function(window) {
  window.u = {};

  var writeStr = function(str, pram) {
    var repEx = /(\{\{[\w]+\}\})/g,
        i = 1,
        strArray = arguments;
    return str.replace(repEx, function() {
      return strArray[i++];
    });
  }
})(window);

