// Soma dos Elementos de um Vetor: Escreva um programa que calcule a soma de todos os elementos em um vetor de números.

var soma = 0;
var num = [];
var i = 0;

function send() {
  mais_linha();
  clear();
}

function mais_linha() {
  var valor = parseInt(document.getElementById("number").value);
  num.push(valor);
  console.log(num);
  i += 1;
  console.log("qnt", i);

  var paragrafo = document.createElement("p");
  paragrafo.innerHTML = `Valor ${i} recebe ${valor}`;

  document.body.appendChild(paragrafo);
}

function clear() {
  document.getElementById("number").value = "";
}

function somar() {
  for (i = 0; i < num.length; i++) {
    soma += num[i];
  }
  console.log(soma);
  var paragradom = document.createElement("p");

  paragradom.innerHTML = `A soma dos ${i} valores é ${soma}`;

  document.body.appendChild(paragradom);

  clear();
  //  clear_tab();
}
