
function saudacao(nome){
    if(typeof nome != 'string'){
        throw new Error('Parametro precisa ser uma string');
    }else{
        console.log(`Olá ${nome}`);
    }
}

saudacao("Judson Paiva");

saudacao(5);

