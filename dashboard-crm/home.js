
// ajuda heheheh
function log(messagem) {
  console.log("> " + messagem);
}

//aplicações
const cards = document.querySelectorAll(".card");
const dropzones = document.querySelectorAll(".dropzone");

//Cartõe
cards.forEach((card) => {
  card.addEventListener("dragstart", dragstart);
  card.addEventListener("drag", drag);
  card.addEventListener("dragend", dragend);
});

function dragstart() {
  //log('CARD: Start dragging')
  //this é o Card
  dropzones.forEach((dropzone) => dropzone.classList.add("highlight"));

  this.classList.add("is-dragging");
}

function drag() {
  //log('CARD: Is dragging')
}

function dragend() {
  //log('CARD: Stop drag')
  //this é o Card
  dropzones.forEach((dropzone) => dropzone.classList.remove("highlight"));

  this.classList.remove("is-dragging");
}

// //Onde vai soltar os cartões
dropzones.forEach((dropzone) => {
  dropzone.addEventListener("dragenter", dragenter);
  dropzone.addEventListener("dragover", dragover);
  dropzone.addEventListener("dragleave", dragleave);
  dropzone.addEventListener("drop", drop);
});

function dragenter() {
  //log('DROPZONE: Enter in zone ')
}

function dragover() {
  //log('DROPZONE: over')
  //this é o dropzone
  this.classList.add("over");

  //this é o Card
  const cardBeingDragged = document.querySelector(".is-dragging"); //comando onde ele ira pegar o Card

  //this é o dropzone
  this.appendChild(cardBeingDragged);
}

function dragleave() {
  //log('DROPZONE: Leave ')
  //this é o dropzone
  this.classList.remove("over");
}

function drop() {
  //log('DROPZONE: dropped ')
}

fetch("./../usuarios.json")
  .then((res) => res.json())
  .then((content) => {
    usuarios(content);
  });

function usuarios(content) {
  //   content.forEach((content) => {
  //     document.querySelector(".nomeUsuario").innerHTML = content.nome;
  //   });
  document.querySelector(".nomeUsuario").innerHTML = usuarioAtual;

  console.log(content.email);
}
