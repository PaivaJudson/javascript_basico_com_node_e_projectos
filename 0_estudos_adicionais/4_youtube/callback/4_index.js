
const fruits = ['banana', 'apple', 'orange', 'lemon'];

const newFruits = fruits.map((a)=> `The fruits is ${a}`);

// console.log(newFruits);

const lista = [1, 4, 6, 7, 10];

function cloneMap(array, regra){
    newArray = [];

    for(const elemento of array){
        newArray.push(regra(elemento));
    }
    return newArray;
}

const novo = cloneMap(lista, (a)=>{
    if(a % 2 == 0)
        return a;
});

console.log(novo);

const novo2 = cloneMap(lista, (a)=> `The number is ${a}` );

console.log(novo2);