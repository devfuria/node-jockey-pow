//
// No Japão, "pedra, papel, tesoura" é chamado simplesmente de "Janken".
//
var jockeyPow = {};
var player    = {};
var cpu       = {};

//
// Função que analisa `process.argv` e retorna o janken
// escolhido pelo jogador
//
jockeyPow.getJanken = function (janken) {
    if (janken == "pedra" || janken == "papel" || janken == "tesoura") {
        return janken;
    } else {
        return undefined;
    }
}

//
// Retorna um janken randômico
//
jockeyPow.getJankenRandom = function () {
    var jankens = ["pedra", "papel", "tesoura"];
    var key = Math.floor(Math.random() * 3);
    return jankens[key];
}

//
// Determina vencedor
//
jockeyPow.vencedor = function (janken1, janken2) {
    if (janken1 == janken2) {
        return 'empate';
    }
    if (janken1 == 'pedra' && janken2 == 'tesoura') {
        return janken1;
    }
    if (janken1 == 'tesoura' && janken2 == 'pedra') {
        return janken2;
    }
    if (janken1 == 'papel' && janken2 == 'pedra') {
        return janken1;
    }
    if (janken1 == 'pedra' && janken2 == 'papel') {
        return janken2;
    }
    if (janken1 == 'tesoura' && janken2 == 'papel') {
        return janken1;
    }
    if (janken1 == 'papel' && janken2 == 'tesoura') {
        return janken2;
    }
}

//
// Ajustes para ser exportado
//
jockeyPow.player = player;
jockeyPow.cpu    = cpu;
module.exports   = jockeyPow;