/* Números Primos: Crie um programa que determine se um número fornecido pelo
usuário é primo ou não. */
var num;

function send() {
  num = document.getElementById("number").value;

  if (verifica() === true) {
    var paragrafo = document.createElement("p");

    paragrafo.innerHTML = `O valor ${this.valor} é primo`;

    document.body.appendChild(paragrafo);
  } else {
    var paragrafo = document.createElement("p");

    paragrafo.innerHTML = `O valor ${this.valor} não é primo`;

    document.body.appendChild(paragrafo);
  }
}

function verifica() {
  valor = num;

  if (valor < 2) {
    return false;
  }

  for (let i = 2; i < valor; i++) {
    if (valor % i === 0) {
      return false;
    } else {
    }
  }

  return true;
}
