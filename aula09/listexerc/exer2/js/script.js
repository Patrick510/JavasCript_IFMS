var soma = 0;
var num = [];

while (true) {
  var valor = parseInt(window.prompt("Entre com um valor (0 para sair)"));

  if (valor % 2 == 0) {
    num.push(valor);
    console.log(num);
  }
  if (valor === 0) {
    break;
  }
}
soma += num.reduce((acumulator, valor) => acumulator + valor, 0);

console.log(soma);
document.write("A soma dos numeros pares é: ", soma);
