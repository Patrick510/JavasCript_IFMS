var soma = 0;
var num = [];
var i = 0;
var mediaval;

function envia() {
  mais_linha();
  clear();
}

function mais_linha() {
  var valor = parseInt(document.getElementById("number").value);
  num.push(valor);
  console.log(num);
  i += 1;
  console.log("qnt", i);

  soma += num.reduce((acumulator, valor) => acumulator + valor, 0);

  var paragrafo = document.createElement("p");
  paragrafo.innerHTML = `Valor ${i} recebe ${valor}`;

  document.table.appendChild(paragrafo);
}

function clear() {
  document.getElementById("number").value = "";
}

function media() {
  console.log("soma:", this.soma);
  console.log("valor", this.i);
  mediaval = parseInt(this.soma / this.i);
  console.log("media", mediaval);
  var paragradom = document.createElement("p");

  paragradom.innerHTML = `A média dos ${this.i} é ${mediaval}`;

  document.body.appendChild(paragradom);

  clear();
  //  clear_tab();
}
