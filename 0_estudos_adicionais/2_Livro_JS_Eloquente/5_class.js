
class Animal{
    constructor(nome){
        this.nome =  nome;
    }

    respirar(){
        console.log(`${this.nome} está respirando...`);
    }
}

class Cachorro extends Animal {
    latir(){
        console.log(`${this.nome} está latindo!`);
    }
}

const rex = new Cachorro("Rex");
rex.latir();
rex.respirar();

console.dir(rex);