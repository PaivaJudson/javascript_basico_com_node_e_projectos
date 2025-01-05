
class Cachorro {
    constructor(raca, cor){
        this.raca = raca;
        this.cor = cor;
    }

    latir(){
        console.log('Au, Au, Au');
    }
}

Cachorro.prototype.raca = 'SRD';
let patas = Symbol();

Cachorro.prototype[patas] = 4;



const labrador = new Cachorro('labrador', 'preto');

console.log(Cachorro.prototype.raca);
console.log(labrador.raca);
console.log(labrador[patas]);
