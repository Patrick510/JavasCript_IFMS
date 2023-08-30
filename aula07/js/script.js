//----------------------------VARIAVEIS-------------------------------------
var id = 1;
var arrayContatos = [];
//------------------------ENVIO DOS DADOS-------------io-----------------------
function enviar() {
  let produto = this.lerDados();

  if (this.validar(produto) == true) {
    this.adicionar(produto);
  }

  this.listar();
  this.clearval();

  console.log(produto);
}
//---------------------LISTAGEM--------------------------------
function listar() {
  //let
  const tbody = document.getElementById("tbody");
  tbody.innerText = "";

  for (let i = 0; i < this.arrayContatos.length; i++) {
    let tr = tbody.insertRow();

    let td_id = tr.insertCell();
    let td_nome1 = tr.insertCell();
    let td_fone2 = tr.insertCell();
    let td_botao = tr.insertCell();

    td_id.innerText = this.arrayContatos[i].id;
    td_nome1.innerText = this.arrayContatos[i].nomeCont;
    td_fone2.innerText = this.arrayContatos[i].fone;
    td_botao.innerHTML = `<button> Delete </button>`;
    td_botao.setAttribute(
      "onclick",
      "deletar(" + this.arrayContatos[i].id + ")"
    );

    td_id.classList.add("center");
    td_nome1.classList.add("center");
    td_fone2.classList.add("center");
    td_botao.classList.add("center");
  }
}
//----------------------ADICIONANDO OS DADOS----------------------------
function adicionar(produto) {
  this.arrayContatos.push(produto);
  this.id++;
}
//---------------------LENDO OS DADOS--------------------------
function lerDados() {
  let produto = {};

  produto.id = this.id;
  produto.nomeCont = document.getElementById("nome").value;
  produto.fone = document.getElementById("fone").value;

  return produto;
}
//----------------------VALIDAÇÃO DOS INPUTS-----------------------
function validar() {
  const produto = lerDados();
  let msg = "";
  if (produto.nomeCont == "") {
    msg += "- Informe nome do produto \n";
  }

  if (produto.fone == "") {
    msg += "- Informe o celular \n";
  }

  if (msg != "") {
    alert(msg);
    return false;
  }

  return true;
}
//-------------------------LIMPAR OS INPUTS-------------------------
function clearval() {
  document.getElementById("nome").value = "";
  document.getElementById("fone").value = "";
}
//------------------DELETA A LINHA DA TABELA-------------------------
function deletar(id) {
  let tbody = document.getElementById("tbody");

  for (let i = 0; i < this.arrayContatos.length; i++) {
    if (this.arrayContatos[i].id == id) {
      this.arrayContatos.splice(i, 1);
      tbody.deleteRow(i);
    }
  }
  console.log(this.arrayContatos);
  //--------------------GUARDANDO OS CONTATOS----------------------------

  //-------------------------------------------------------------------
}
