let numero_conta = Number(prompt("Informe o numero da sua conta :"))
let saldo = Number(prompt("Informe o valor do saldo da sua conta :"))
let debito = Number(prompt("Informe o valor do seu debito :"))
let credito = Number(prompt("Informe o valor do seu credito :"))
let saldo_atual = (saldo - debito + credito)
if (saldo_atual < 0 ){
    alert("O seu saldo é negativo")
}else {
    alert("O seu saldo e positivo")

}
    