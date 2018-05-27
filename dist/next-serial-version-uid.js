(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');
  var SYMBOL_ARRAY = ['', '-'];

  function random() {
    var str = String(Math.random() * 1e18);
    if (str.length !== 18 ) {
      return random();
    }
    return str;
  };

  nx.serialVersionUid = function () {
    var symbol = SYMBOL_ARRAY[(Math.random() > 0.5) | 0];
    var str = random();
    return symbol + str;
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.serialVersionUid;
  }

}());
