
let btn1 = document.querySelector("#button1");
let p = document.querySelector("p");

// btn.addEventListener('click', function(){
//     console.log('clicou em mim');
// });

function msg(e){
    console.log('clicou em mim button 1');
    console.log(e);
    e.stopPropagation();
}

btn1.addEventListener('click', msg);

p.addEventListener("click", function(){
    console.log("clicou no paragrafo...");
});


