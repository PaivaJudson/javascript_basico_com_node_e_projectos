
const individuo = {
    nome: 'Judson Paiva',
    idade: 30,

    descrever: function(){
        console.log(`Nome: ${this.nome} | Idade: ${this.idade}`);
    }
};

// individuo.altura = 1.78;

// delete individuo.idade;

// console.log(individuo.nome);
// console.log(individuo.idade);
// console.log(individuo);
individuo.descrever();
