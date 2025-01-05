
function removeDuplicates(arr){
    let novoArr = [];
    let k = 0;

    for(let i=0; i< arr.length; i++){
        let aparece = 0;
        for(let j=0; j<arr.length; j++){
            if(arr[i]==arr[j]){
                aparece++;
            }
            if(aparece > 1){
                arr[i] = null;
            }
        }
        if(aparece == 1){
            novoArr[k] = arr[i]
            k++;
        }
    }
    arr.length = 0;
    for(let i=0; i< novoArr.length; i++){
        arr[i] = novoArr[i]
    }
}

let xpto = [1, 2, 3, 4, 1, 2, 5, 4];
let xpto1 = [ 1, 2, 3, 4, 5 ];
let xpto2 = [ 'a', 'b', 'c', 'd', 'e' ];
removeDuplicates(xpto2);
console.log(xpto2);


// Analisar melhor este....

function removeDuplicates(arr) {
  return arr.filter(function(item, index) {
    return arr.indexOf(item) === index;
  });
}

