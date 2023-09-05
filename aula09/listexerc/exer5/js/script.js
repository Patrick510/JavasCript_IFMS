// Soma de Números Pares: Escreva um programa que calcule a soma de todos os números pares de 1 a N, onde N é um número fornecido pelo usuário.

var num;
var i = 1;
var soma = 0;

function send() {
  num = document.getElementById("number").value;

  for (i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      soma += i;
      console.log(soma);
    }
  }
  console.log("a soma é:", soma);

  var paragrafo = document.createElement("p");

  paragrafo.innerHTML = `A soma dos números pares de 1 até ${num} é: ${soma}`;

  document.body.appendChild(paragrafo);
}
