let quant_atual = Number(prompt("Digite a quantidade atual de produtos no estoque:"))
let quant_max = Number(prompt("Digite a quantidade maxima de produtos em estoque:"))
let quant_min = Number(prompt("Digite a quantidade minima de produtos em estoque:"))
let media = ((quant_max + quant_min) / 2)
if (quant_atual >= media){
    alert("Não efetuar compra ")
}else {
    alert("Efetuar compra") 
}
 
