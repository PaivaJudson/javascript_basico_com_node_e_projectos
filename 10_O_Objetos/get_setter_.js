
class Cachorro {
    constructor(raca, cor){
        this.raca = raca;
        this.cor = cor;
    }

    latir(){
        console.log('Au, Au, Au');
    }

    get getCor() {
        return this.cor;
    }

    set setCor(cor) {
        this.cor = cor;
    }
}

let labrador = new Cachorro('Labrador', 'sem cor');
labrador.setCor = 'Preto';

console.log(labrador);
console.log(labrador.getCor);
