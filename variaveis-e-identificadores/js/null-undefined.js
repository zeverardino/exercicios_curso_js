var nome;
console.log("nome: " + nome);
nome = "Jose";
console.log("nome: " + nome);

nome = undefined;
nome = null;

console.log("undefined == null", undefined == null);
console.log("undefined", typeof undefined);
console.log("null", typeof null);
console.log("undefined == null",  undefined);


var pessoa = {nome: 'pedro', idade: 32};
console.log(pessoa.idade);

function soma(a,b) {
    var result;
    result = a+b;
    return result;
}
console.log(soma(1,2));