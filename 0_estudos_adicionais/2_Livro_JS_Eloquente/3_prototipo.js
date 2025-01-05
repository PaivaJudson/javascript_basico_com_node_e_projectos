
const animal = {
    respirar: function(){
        console.log("O animal está respirando...");
    },
    comer: function(){
        console.log("O animal esta comendo...");
    }
};


const cachorro = Object.create(animal);
cachorro.latir = function(){
    console.log("O cachorro está latindo...");
}

cachorro.respirar();
cachorro.latir();
animal.latir();