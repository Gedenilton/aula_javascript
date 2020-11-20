var nome = "Gedenilton Henrique";
var n1 = 5;
var n2 = 3;
var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
//alert(n1 + n2);

console.log(nome);
console.log(n1 ** n2);
console.log(frase.replace("Japão", "Brasil").toUpperCase());
//alert(frase.replace("Japão", "Brasil"));

var lista = ["maçã", "Pêra", "Laranja"];
console.log(lista);
lista.push("Uva", "Jaca");
console.log(lista);
lista.pop();
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.reverse().toString());
console.log(lista.join(" - "));

var frutas = [{ name: "Maçã", cor: "Vermelha" }, { name: "Uva", cor: "Roxa" }]
console.log(frutas);
//alert(frutas[1].name);

/*var idade = prompt("Qual sua idade? ");
if (idade >= 18) {
    alert("Maior de idade");
} else {
    alert("Menor de idade");
}*/

/*var count = 0;
while (count <= 5) {
    console.log(count);
    alert(count);
    count++;
}*/

/*for (i = 0; i <= 5; i++) {
    alert(i);

}*/

var d = new Date();
alert(d.getDay());