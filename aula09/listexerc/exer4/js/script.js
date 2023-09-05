// Fatorial: Crie um programa que calcule o fatorial de um número fornecido pelo usuário
var num;
var fatorial;

function envia() {
  num = document.getElementById("number").value;

  if (num <= 1) {
    console.log("valor", i);
    return 1;
  } else {
    fatorial = 1;
    for (i = 2; i <= num; i++) {
      fatorial *= i;
      console.log(fatorial); // 120
    }
  }

  var paragrafo = document.createElement("p");
  paragrafo.innerHTML = `O fatorial de ${num}: ${fatorial}`;
  document.body.appendChild(paragrafo);
}
