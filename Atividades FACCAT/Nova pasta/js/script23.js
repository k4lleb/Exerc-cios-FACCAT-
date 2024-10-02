let nome = prompt("Insira seu nome")
let sexo = prompt("Insira seu sexo")
let altura = parseFloat(prompt("Insira sua altura"))
 
let peso_ideal
let dados = ["masculino", "Masculino", "Feminino", "feminino"]
 
if (sexo === dados[0] || sexo === dados[1]) {
    // um = é para receber
    // dois == é para comparar
    // três === é para igual
 
    peso_ideal = (72.7 * altura) - 58
 
} else if (sexo === dados[2] || sexo === dados[3]) {
 
    peso_ideal = (62.1 * altura) - 44.7
   
} else {
    alert("Sexo inválido")
    peso_ideal = null
}
 

alert("O peso recomendado para " + nome + " do " + sexo + " é " + peso_ideal.toFixed(3))