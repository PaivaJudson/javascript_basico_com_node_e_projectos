
let b = 2;

try{
    
    let a = 2 + b;

    if(typeof b != 'number'){
        throw new Error(error);
    }

} catch(error){

    console.log(error);
} finally{

    console.log("executa mesmo que algo deu errado...");
}


console.log("Foi tratado")

