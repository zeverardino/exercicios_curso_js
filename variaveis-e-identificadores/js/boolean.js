var contaStatus = true;
console.log("Status da conta: ", contaStatus);

var contaStatus = false;
console.log("Status da conta: ", contaStatus);

console.log("tipo de variavel: ", typeof contaStatus);

if(contaStatus == true){
    // true
    console.log("Enviar Email!");
}else{
    // false
    console.log("Ative sua Conta!");
}

console.log(!!contaStatus);

var nome = "jose";
var preco = 22.8;
var vazio = "";
console.log(!!nome);
console.log(!!preco);
console.log(!!vazio);

console.log("------------------------");
console.log(!!"");
console.log(!!0);
console.log(!!-0);
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);
console.log("------------------------");
console.log(!!Array);
console.log(!!Object);
console.log(!!Function);
console.log("------------------------");
