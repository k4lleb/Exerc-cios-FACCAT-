/*
 Ler a hora de início e a hora de fim de um jogo de Xadrez (considere apenas horas inteiras, sem os 
minutos) e calcule a duração do jogo em horas, sabendo-se que o tempo máximo de duração do jogo é 
de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte.
*/
alert("Boas vindas ao programa que calcula horas de uma partida de xadrez. A duração máxima de jogo é de 24h")
let horarioInicio = parseInt(prompt("Digite a hora de início do jogo da partida de xadrez"))
let horarioFinal = parseInt(prompt("Digite a hora de fim de jogo da partida de xadrez"))
let tempo


if (horarioFinal < horarioInicio) {
    tempo = ((24 - horarioInicio) + horarioFinal)
    alert("O jogo iniciou às: " + horarioInicio + " E terminou às: " + horarioFinal + " O tempo de jogo foi: " + tempo)
} else {
    if (horarioFinal > horarioInicio) {
        tempo = horarioFinal - horarioInicio
        alert("O jogo iniciou às: " + horarioInicio + " E terminou às: " + horarioFinal + " O tempo de jogo foi: " + tempo)
    }
    else {
        alert("O jogo durou 24 horas, tempo máximo")
    }
}