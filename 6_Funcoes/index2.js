
let y = 10;

if(true){
    let y = 150;
    console.log('if: '+ y);
}

console.log('global: '+ y);


let x = 15;
const multiplicar = function(a, b){
    let x = a * b;

    if(x > 10){
        let x = 0;
        console.log('dentro do if = '+x)
    }
    console.log('dentro da funcao = '+x);
}

multiplicar(4, 3);
console.log('fora = '+x);


let consoleTeste = () => {
    console.log("Olá mundo!");
}

consoleTeste();


let somar = (a, b) =>{
    return a + b;
}

let subtrair = (a, b) => a - b

console.log('somar = '+somar(4,2))
console.log('subtrair = '+subtrair(4,2))
