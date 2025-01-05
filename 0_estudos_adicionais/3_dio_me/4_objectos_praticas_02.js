
class Pessoa {

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    dizerImc(){
        return this.peso / (this.altura * this.altura);
    }

    classificarIMC(){
        const imc = this.dizerImc();
        if( imc < 18.5){
            return "Abaixo do peso";
        }else if( imc >= 18.5 && imc < 25){
            return "Peso normal";
        }else if( imc >= 25 && imc < 30){
            return "Acima do peso";
        }else if( imc >= 30 && imc < 40){
            return "Obeso";
        }else {
            return "Obesidade Grave";
        }
    }
}

function ver(Pessoa){
    console.log(`${pessoa.nome}`);
}

const p1 = new Pessoa("José", 70, 1.75);
const p2 = new Pessoa("Judson Paiva", 70, 1.78);


console.log(`O IMC do ${p1.nome} é ${p1.dizerImc().toFixed(2)}`);
console.log(`${p2.nome} tens como imc ${p2.dizerImc()} e está ${p2.classificarIMC()}`);


ver(p2); 