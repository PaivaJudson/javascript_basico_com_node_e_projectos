
let {readFile, writeFile} = require('fs');

readFile("texto.txt", "utf-8", (error, text) =>{
    if (error) {
        throw error;
    }else{
        console.log(text);
    }
});

writeFile("texto.txt", "Inserir texto no arquivo...", (error)=>{
    if (error) {
        console.log(error);
    } else {
        console.log("Escreveu no arquivo");
    }
});


