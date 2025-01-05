
function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade;
}

Pessoa.prototype.falar = function(){
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
}

const p1 = new Pessoa("Judson Paiva", 30);
const p2 = new Pessoa("Quissanga Coge", 29);

p1.falaridade = function(){
    console.log(`Tenho ${this.idade} anos de idade`);
}


p1.falar();
p2.falar();

p1.falaridade();

console.dir(p1);

