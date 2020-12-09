var assert = require('assert');
var jockeyPow = require('../app.js');

suite('Regras de negócio,', function () {
  suite('vencedor()', function () {
    test('deve retornar o vencedor', function () {

      assert.equal("pedra", jockeyPow.vencedor("pedra", "tesoura"));
      assert.equal("pedra", jockeyPow.vencedor("tesoura", "pedra"));

      assert.equal("papel", jockeyPow.vencedor("pedra", "papel"));
      assert.equal("papel", jockeyPow.vencedor("papel", "pedra"));

      assert.equal("tesoura", jockeyPow.vencedor("tesoura", "papel"));
      assert.equal("tesoura", jockeyPow.vencedor("papel", "tesoura"));

    });
    test('deve retornar empate', function () {
      assert.equal("empate", jockeyPow.vencedor("pedra", "pedra"));
      assert.equal("empate", jockeyPow.vencedor("papel", "papel"));
      assert.equal("empate", jockeyPow.vencedor("tesoura", "tesoura"));
    });
  });
  suite('getJankenRandom()', function () {
    test('deve retonar um randômico', function () {

      var jankens = ["pedra", "papel", "tesoura"];
      var jankenRandom = jockeyPow.getJankenRandom();
      assert.notEqual(-1, jankens.indexOf(jankenRandom));

    });
  });
});

suite('Auxiliares,', function () {
  suite('getJanken()', function () {
    test('deve retornar o janken', function () {

      assert.equal("pedra", jockeyPow.getJanken("pedra"));
      assert.equal("papel", jockeyPow.getJanken("papel"));
      assert.equal("tesoura", jockeyPow.getJanken("tesoura"));

    });
    test('deve retornar undefined caso não exista', function () {
      assert.equal(undefined, jockeyPow.getJanken());
    });
    test('deve retornar undefined caso não seja "pedra", "papel" ou "tesoura"', function () {

      var arg = [];
      arg[0] = "";
      arg[1] = "";
      arg[2] = "banana";

      assert.equal(undefined, jockeyPow.getJanken(arg));
    });
  });
});

