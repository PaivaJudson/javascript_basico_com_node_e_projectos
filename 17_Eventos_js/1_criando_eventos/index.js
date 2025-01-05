
let btn = document.querySelector("button");

// btn.addEventListener('click', function(){
//     console.log('clicou em mim');
// });

function msg(e){
    console.log('clicou em mim');
    console.log(e);
}

btn.addEventListener('click', msg);


setTimeout(function(){
    btn.removeEventListener('click', msg);
}, 4000);