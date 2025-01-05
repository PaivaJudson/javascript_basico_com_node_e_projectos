
function Cachorro(raca, patas, cor){
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
}

Cachorro.prototype.uivar = function(){
    console.log('Auuuuuuu...');
}

Cachorro.prototype.latir = function(){
    console.log('Au, Au, Au');
}

let pug = new Cachorro("Pug");
console.log(pug.raca);
pug.uivar();
pug.latir();