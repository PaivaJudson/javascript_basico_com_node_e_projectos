
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('End'), 5000);
});

console.log('Begin');
promise.then((value)=>console.log(value));

// promise.then(console.log);

// promise.then(
//     (res) => setTimeout(() => res('End'), 5000),
//     (rej) => console.log(rej)
// );

(async function(){
    console.log()


}

)()

