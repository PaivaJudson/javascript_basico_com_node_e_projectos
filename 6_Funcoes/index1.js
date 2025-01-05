function imprimirNoConsole(){
    console.log("Olá mundo!!")
}


// funcao que recebe parâmetro
function imprimirUmNumero(num){
    console.log('O número é: '+num)
}


// funcao anónima
const imprimirUmNumeroAleatorio = function (){
    console.log('O número é: '+Math.random())
}


// imprimirUmNumeroAleatorio();

function multiplicarTresNumeros(x, y, z){
    return x * y * z
}

// console.log('O valor de mult é ' + multiplicarTresNumeros(2, 3, 4))

function podeDirigir(idade, cnh){
    if(idade >= 18 && cnh === true){
        console.log("Pode dirigir...")
    }else{
        console.log("Não pode dirigir...")
    }
}

podeDirigir(30, true);
podeDirigir(17, 1);
podeDirigir(29, 0);
podeDirigir(17, true);


let y = 10;
function imprimir(){
    let y = 150;

    console.log(y);
}

imprimir();

console.log(y);