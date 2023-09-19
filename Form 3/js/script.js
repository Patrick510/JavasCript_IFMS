var contacts = [];
var idcount = 1;

function sendContact() {
  console.log("Add contato....");

  const contact = {
    id: idcount++,
    name: document.getElementById("name").value,
    number: document.getElementById("number").value,
  };

  console.log(contact);
  contacts.push(contact);

  //  clearVal();
  updateTable();
}

function updateTable() {
  const tabela = document.createElement("tr");

  for (i = 0; i < this.contacts.length; i++) {
    tabela.innerHTML = `
    <td> ${this.contacts[i].id} </td>
    <td> ${this.contacts[i].name} </td>
    <td> ${this.contacts[i].number} </td>
    <td> <input class="delete" type="button" value="Delete" onclick="deleteline(${this.contacts[i].id})"> </td>
    `;
  }
  document.querySelector(".thead").appendChild(tabela);
  // document.querySelector("#tbContacts>tbody").appendChild(line);
}

function deleteline(id) {
  let tbody = document.getElementById("tr");

  for (let i = 0; i < this.contacts.length; i++) {
    if (this.contacts[i].id == id) {
      this.contacts.splice(i, 1);
      tbody.deleteRow(i);
    }
  }
}
