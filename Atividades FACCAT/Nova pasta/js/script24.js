let salario_fixo = Number(prompt("Digite o seu salário fixo: "));
let vendas = Number(prompt("Digite o valor das suas vendas totais: "));
let comissão1 = 3 / 100; // 3%
let comissão2 = 5 / 100; // 5%
let salario_final = salario_fixo; // Inicializa o salário final com o salário fixo
 
if (vendas <= 1500) {
    salario_final += vendas * comissão1; // Comissão de 3% para vendas até R$ 1500
} else {
    salario_final += (1500 * comissão1); 
    salario_final += ((vendas - 1500) * comissão2); // Comissão de 5% sobre o que ultrapassa R$ 1500
}
 
alert("O seu salário final será de: " + salario_final);