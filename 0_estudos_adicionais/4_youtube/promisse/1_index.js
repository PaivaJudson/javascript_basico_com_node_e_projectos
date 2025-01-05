
let promessa = new Promise((resolve, reject)=>{
    let resultado  = false;

    setTimeout(function(){
        //resultado = true;
        if(resultado){
            resolve('Deu tudo certo');
        }else{
            reject('Deu tudo errado');
        }
    }, 3000);
});


promessa.then((retorno) => console.log(retorno))
.catch((retorno) => console.log(retorno));


console.log("Tarefa 2 em Execucacao");
console.log("Tarefa 3 em Execucacao");


