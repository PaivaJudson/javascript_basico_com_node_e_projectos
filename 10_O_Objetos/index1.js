
const cachorro = {
    raca: '',
    uivar: function(){
        return "Au, Au, Au...";
    },
    rosnar: function(){
        return "rummmmmm";
    },
    setRaca: function(raca){
        this.raca = raca;
    },
    getRaca: function(){
        return this.raca;
    }
}

console.log(cachorro.uivar());
console.log(cachorro.rosnar());
cachorro.setRaca("Pastor Alemao");

console.log(cachorro.getRaca());