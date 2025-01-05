
// let nome = 'Judson Paiva';
// console.log(`Olá ${nome}`);

// nome = "Leonor Paiva";
// console.log(`Olá ${nome}`);

// nome = "Ageu Paiva";
// console.log(`Olá ${nome}`);



// function greeting(nome){
//     console.log(`Olá ${nome}`);
// }


// greeting('Judson Paiva');
// greeting('Leonor Paiva');
// greeting('Ageu Paiva');



const fruits = ['banana', 'apple', 'orange', 'lemon'];


// fruits.forEach(element => {
//     console.log(element);
// });

// for (const fruit of fruits) {
//     console.log(fruit);
// }

// for (const fruit of fruits) {
//     console.log(`A fruta é ${fruit}`);
// }

function eachFruit(regra){
    for(const fruit of fruits){
        regra(fruit);
    }
}

eachFruit(function (a){
    console.log(`A fruta é ${a}`);
});


