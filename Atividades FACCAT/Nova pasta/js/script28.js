let valor1 = parseFloat(prompt("Digite o primeiro valor:"))
let valor2 = parseFloat(prompt("Digite o segundo valor:"))
let valor3 = parseFloat(prompt("Digite o terceiro valor:"))
 
let maior
 
if (valor1 == valor2 || valor1 == valor3 || valor2 == valor3){
    alert("Os valores são os mesmos")
}
else if (valor1 > valor2 && valor1 > valor3) {
    maior = valor1
    alert("O maior valor é: " + maior)
} else if (valor2 > valor1 && valor2 > valor3) {
    maior = valor2
    alert("O maior valor é: " + maior)
} else {
    maior = valor3
    alert("O maior valor é: " + maior)
}
 
