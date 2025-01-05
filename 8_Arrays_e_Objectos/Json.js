let pessoa = {
    "nome": "Judson Paiva",
    "idade": 30,
    "Profissao": "Engenheiro de Software",
    "hobbies": ["Programador", "Pensar", "Estudar", "Caminhar"]
}


let txt_pessoa = JSON.stringify(pessoa);

console.log(txt_pessoa);

let pessoa_txt = JSON.parse(txt_pessoa);
console.log(pessoa_txt);
