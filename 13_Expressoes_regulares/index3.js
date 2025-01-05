
// const dia = /\d\d/;

// console.log(dia.test("2019") && "2019".length == 2);
// console.log(dia.test("asd"));
// console.log(dia.test("05"));


// const negarab = /[^ab]/;

// console.log(negarab.test("aba pai"));
// console.log(negarab.test("Aqui tem a"));

const negarAZ = /[^a-z]/;

const tel = /\(244\) ?[0-9]{9}/;

console.log(tel.test("(244)926303035"));
console.log(tel.test("(244)9263030351"));