function calcularSalarioTotal (horasTrabalhadas, salarioPorHora){
    const horasPorSemana = 40;
    const semanasNoMes = 4;
    const horasNoMes = horasPorSemana * semanasNoMes;
    let salarioTotal;

    if (horasTrabalhadas <= horasNoMes){
        salarioTotal = horasTrabalhadas * salarioPorHora;
    }else {
        const horasExtras = horasTrabalhadas - horasNoMes;
        const salarioBase = horasNoMes * salarioPorHora;
        const valorHoraExtra = salarioPorHora * 1.5;
        const salarioExtras = horasExtras * valorHoraExtra;

        salarioTotal = salarioBase + salarioExtras;

    }

    return salarioTotal;

}

    const horasTrabalhadas = parseFloat(prompt("Digite o numero de horas trabalhadas no mes"));
    const salarioPorHora = parseFloat(prompt("Digite o salario por hora"));
    const salarioTotal = calcularSalarioTotal(horasTrabalhadas, salarioPorHora);

    alert(`O salário total do funcionário é: R$ ${salarioTotal.toFixed(2)}`);

    