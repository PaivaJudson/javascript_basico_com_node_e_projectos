
let btn1 = document.querySelector("#button1");
let btn2 = document.querySelector("#button2");


btn1.addEventListener("mousedown", function(){
    console.log("Apertou o botao");
});

btn2.addEventListener("dblclick", function(){
    console.log("clicou duas vezes");
});