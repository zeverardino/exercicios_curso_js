var txt1 = "Ola\ntudo bem";
var txt2 = "Ola \`tudo bem";
var txt3 = "Ola \\tudo bem";
var txt4 = "Ola \u00A9tudo bem";
var txt5 = "Ola \xA9tudo bem";
var txt6 = "Ola \"tudo bem\"";

console.log(txt1);
console.log(txt2);
console.log(txt3);
console.log(txt4);
console.log(txt5);
console.log(txt6);

var corp = "©";
console.log(corp.charCodeAt());
