/* Soma de Números Pares: Escreva um programa que calcule a soma de todos os números pares de 1 a N, onde N é um número fornecido pelo usuário. */

var num;
var soma_pares = 0;

function soma_par() {
  num = document.getElementById("number").value;

  for (var i = 0; i <= num; i++) {
    if (i % 2 == 0) {
      soma_pares = i + soma_pares;
    }
  }
  console.log("A soma dos números pares de 1 a " + num + " é: " + soma_pares);
}
