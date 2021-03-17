(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.serialVersionUid should between 17 & 18 length', function () {
      var result;
      for (var i = 0; i < 1000; i++) {
        var result = nx.serialVersionUid();
        expect(result.length == 19 || result.length == 18).toBe(true);
      }
    });
  });

})();
