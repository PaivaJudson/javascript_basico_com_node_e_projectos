
function f(g, h){
    if(1 > 0){
        g("uau");
    }else{
        h("ui");
    }
}


// function executarSeResolver(valor){
//     console.log("Resolveu com o valor " + valor);
// }

// function executarSeRejeitar(valor){
//     console.log("Rejeitou com o valor " + valor);
// }

const minhaPromessa = new Promise(f);

//minhaPromessa.then(executarSeResolver);

minhaPromessa
    .then(valor => {
        console.log("Resolveu com o valor " + valor);
    })
    .catch(valor => {
        console.log("Rejeitou com o valor " + valor);
    });

