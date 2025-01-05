
let pessoa = {
    nome: "Judson Paiva",
    idade: 30,
    profissao: "Programador",

    ensinar: function(){
        console.log("Ensina no médio, no Superior, na Teocracia...")
    }
};

let person = {

};

console.log(pessoa);

// delete pessoa.nome;
pessoa.casado = true;
console.log(pessoa);

Object.assign(person, pessoa);

console.log(person);


console.log(Object.keys(person));