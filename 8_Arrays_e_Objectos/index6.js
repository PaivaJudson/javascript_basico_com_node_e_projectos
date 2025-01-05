/*
Soma de Números Únicos
Escreva uma função chamada sumUniqueNumbers que recebe um array de números como argumento.

A função deve calcular e retornar a soma de todos os números que aparecem apenas uma vez no array.

Utilize uma estrutura de dados auxiliar para armazenar a contagem de cada número no array.

Percorra o array e verifique se cada número ocorre apenas uma vez. Se sim, some-o à variável de soma.

Considere que o array pode conter tanto números inteiros positivos quanto negativos.
*/

function sumUniqueNumbers(arr){
    let novoArr = [];
    let k = 0;
    for(let i=0; i< arr.length; i++){
        let aparece = 0;
        for(let j=0; j<arr.length; j++){
            if(arr[i]==arr[j]){
                aparece++;
            }
        }
        if(aparece == 1){
            novoArr[k] = arr[i]
            k++;
        }
    }
    
    let soma = 0;
    for(let i=0; i<novoArr.length; i++){
        soma = soma + novoArr[i];
    }
    
    return soma;
}

console.log(sumUniqueNumbers([1, 2, 3, 4, 1, 2, 5, 4]));










