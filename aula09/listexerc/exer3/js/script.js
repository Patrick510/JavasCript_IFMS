// Tabuada: Escreva um programa que exiba a tabuada de um número fornecido pelo usuário.

var num;

function envia() {
  num = document.getElementById("number").value;
  var paragrafo2 = document.createElement("p");
  paragrafo2.innerHTML = "TABUADA";
  document.body.appendChild(paragrafo2);

  for (i = 0; i <= 10; i++) {
    var mult = num * i;
    console.log(i, " X ", num, " = ", mult);

    var paragrafo = document.createElement("p");
    paragrafo.innerHTML = `${i} X ${num} = ${mult}`;

    document.body.appendChild(paragrafo);
  }
  console.log(num);
}
