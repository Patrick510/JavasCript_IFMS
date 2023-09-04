var num = [10];
var soma = 0;
var i = 1;

while (i > 0) {
  num = window.prompt("entre com um valor");
  soma = num[i] + i;
  console.log(num);
  if (i == 0) {
    break;
  }
}
console.log(soma);
