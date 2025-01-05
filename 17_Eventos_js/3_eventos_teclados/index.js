
window.addEventListener("keydown", function(e){
    console.log(e)
    if(e.key == 'q') {
        console.log("Apertou a letra q");
    }
});

window.addEventListener("keyup", function(e){
    console.log(e)
    if(e.key == 'Enter') {
        console.log("Apertou o Enter");
    }
});
