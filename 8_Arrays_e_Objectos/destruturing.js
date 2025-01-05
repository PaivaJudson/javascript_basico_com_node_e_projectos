let obj = {
    rodas: 4,
    portas: 4,
    tetoSolar: true,
    motor: '2.0'
}

let {rodas: varRodas, portas: varPortas, tetoSolar: varTetoSolar, motor: varMotor} = obj;

console.log(varMotor, varRodas, varPortas);