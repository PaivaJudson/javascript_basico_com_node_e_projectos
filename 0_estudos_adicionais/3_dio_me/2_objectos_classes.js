
class Pessoa {
    nome;
    idade;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    descrever(){
        console.log(`Nome: ${this.nome} | Idade: ${this.idade}`);
    }
}

function compararPessoa(p1, p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    }else if(p1.idade < p2.idade){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    }else{
        console.log(`${p1.nome} e ${p2.nome} têm a mesma idade`);
    }
}


const leonor = new Pessoa("Leonor Paiva", 28);
const judson = new Pessoa("Judson Paiva", 30);

leonor.descrever();
judson.descrever();

compararPessoa(leonor, judson);


