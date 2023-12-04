function calcularNivel(vitorias, derrotas, nomeJogador) {
    let saldoVitorias = vitorias - derrotas;

    let nivel;
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    console.log(`${nomeJogador} tem um saldo de vitórias de ${saldoVitorias} e está no nível de ${nivel}`);
}

calcularNivel(10, 2, 'Ahri');
calcularNivel(30, 5, 'Gwen');
calcularNivel(100, 20, 'Jinx');
