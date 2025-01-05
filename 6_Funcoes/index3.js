
function soma(a, b){

    if(a === undefined || b === undefined){
        console.log("Esta função precisa ter os dois argumentos");
    }else{
        return a + b;
    }
}

console.log(soma(1));
console.log(soma(1, 2));


function potencia(base, expoente = 2){
    return Math.pow(base, expoente)
}


console.log(potencia(2));
console.log(potencia(2, 2));
console.log(potencia(2, 3));


function closure(y){
    return function(x){
        return x + y;
    }
}


let soma = closure(5)
console.log(soma(2))

function getRandomIntInclusive(max) {
  min = 0;
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


console.log(getRandomIntInclusive(10))

function strComprimento(str){
    return str.length;
}

console.log(strComprimento("Angola é um país grande e belo"));
console.log(strComprimento("Angola"));
console.log(strComprimento("Judson Paiva"));
