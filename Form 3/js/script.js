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
  contacts = getLocalStorage();
  contacts.push(contact);
  setLocalStorage(contacts);

  //  clearVal();
  updateTable();
}

function getLocalStorage() {
  return JSON.parse(localStorage.getItem("b_contacts")) || [];
}

function setLocalStorage() {
  localStorage.setItem("b_contacts", JSON.stringify(contacts));
}

function updateTable() {
  const tabela = document.createElement("tr");

  for (i = 0; i < this.contacts.length; i++) {
    tabela.innerHTML = `
    <td> ${this.contacts[i].id} </td>
    <td> ${this.contacts[i].name} </td>
    <td> ${this.contacts[i].number} </td>
    <td> <input class="delete" type="button" value="Delete" onclick="deleteline(${index})"> </td>
    `;
  }
  document.querySelector(".thead").appendChild(tabela);
  // document.querySelector("#tbContacts>tbody").appendChild(line);
}

function deleteline(index) {
  contacts = getLocalStorage();
  contacts.splice(index, 1);
  setLocalStorage(contacts);
}
