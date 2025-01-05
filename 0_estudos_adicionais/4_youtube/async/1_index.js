
async function escreverInformacoesPais (paisDesejado) {
    try{
        let info = await fetch(`https:/restcountries.com/v3.1/name/${paisDesejado}`);
        console.log(await info.json());
    }catch(e){
        console.error(e);
    }
}

escreverInformacoesPais("brazil");
