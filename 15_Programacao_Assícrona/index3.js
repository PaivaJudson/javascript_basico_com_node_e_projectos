
async function somar (a, b) {
    return a + b;
}

somar(2, 3).then(value => console.log(value));


function somarComDelay(x, y){
    return new Promise(resolve=>{
        setTimeout(function(){
            resolve(x+y);
        }, 2000);
    });
}

async function resultadoSoma(a, b, c){
    let x = somarComDelay(a, b);
    let y = c;

    return await x + y;
}


resultadoSoma(1, 2, 3).then(value => console.log(value));


