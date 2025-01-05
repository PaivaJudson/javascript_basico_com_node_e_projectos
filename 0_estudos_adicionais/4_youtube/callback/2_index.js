
function pegarDados(funcao){
    setTimeout(function timeout(){
        var dados = {
            nome: "Judson Paiva"
        }
        
        funcao(dados)
        
    }, 6000);
}

pegarDados(function(dados){
    console.log('Dados: '+ dados)
});



setTimeout(function(){
    console.log("Paguei: Lavei o carro");
}, 4000);

setTimeout(function(){
    console.log("Família: Passiei com o cachorro");
}, 3000);

console.log("EU: Tarefa 1");
console.log("EU: Tarefa 2");

setTimeout(()=>console.log("Eu: Tarefa 3"), 2500);
