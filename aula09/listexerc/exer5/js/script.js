// Soma de Números Pares: Escreva um programa que calcule a soma de todos os números pares de 1 a N, onde N é um número fornecido pelo usuário.

var num;
var i = 1;
var soma = 0;
var somimp = 0;

function send() {
  num = document.getElementById("number").value;

  for (i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      soma += i;
      console.log(soma);
    } else {
      somimp += 1;
      console.log(somimp);
    }
  }
  console.log("a soma par é:", soma);
  console.log("a soma imp é:", somimp);

  var paragrafo = document.createElement("p");
  var paragrafo2 = document.createElement("p");

  paragrafo.innerHTML = `A soma dos números pares de 1 até ${num} é: ${soma}`;

  paragrafo2.innerHTML = `A soma dos números impares de 1 até ${num} é: ${somimp}`;

  document.body.appendChild(paragrafo);
  document.body.appendChild(paragrafo2);
}
