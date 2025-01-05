
class Carro {

    constructor(marca, cor, gastoPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoPorKm = parseFloat(gastoPorKm.toFixed(2));
    }

    valorGasto(quantidadeKm, precoCombustivel){
        return (quantidadeKm * this.gastoPorKm * precoCombustivel).toFixed(2);
    }
}

const bmw = new Carro("Mercedez", "Preta", 1/12);
const starlet = new Carro("Toyota Starlet", "Branca", 1/8);

console.log(bmw.valorGasto(70, 5));
console.log(bmw);

