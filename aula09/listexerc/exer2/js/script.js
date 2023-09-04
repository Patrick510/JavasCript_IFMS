var soma = 0;
var num = [];

while (true) {
  var valor = parseInt(window.prompt("Entre com um valor (0 para sair)"));

  if (valor === 0) {
    break;
  }

  num.push(valor);
  console.log(num);
}
soma += num.reduce((acumulator, valor) => acumulator + valor, 0);

console.log(soma);
