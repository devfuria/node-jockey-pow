var jockeyPow = require('./app.js');

var player    = {};
var cpu       = {};

//
// Versão no terminal (interação com usuáro)
//

var escolha = process.argv[2];

if (escolha === undefined) {
    console.log("Escolha entre pedra, papel ou tesoura !");
    process.exit(1);
}

if ( !["pedra", "papel", "tesoura"].includes(escolha) ) {
    console.log("Precisa escolher entre pedra, papel ou tesoura !");
    process.exit(1);
}

// anotar a escolha do jogador
player.janken = jockeyPow.getJanken(escolha);

// anotar a escolha do cpu (randômica)
cpu.janken = jockeyPow.getJankenRandom();

// determinar vencedor
jockeyPow.jankenVencedor = jockeyPow.vencedor(player.janken, cpu.janken)

//
// Saída
//
console.log("player: " + player.janken);
console.log("cpu: " + cpu.janken);
console.log("vencedor: " + jockeyPow.jankenVencedor);
