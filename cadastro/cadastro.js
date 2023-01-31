//VARIAIS
let btn = document.querySelector("#verSenha");
let btnConfirmar = document.querySelector("#verConfirmarSenha");

let nome = document.querySelector("#nome");
let labelNome = document.querySelector("#labelNome");
let validNome = false;

let email = document.querySelector("#email");
let labelEmail = document.querySelector("#labelEmail");
let validEmail = false;

let telefone = document.querySelector("#telefone");
let labelTelefone = document.querySelector("#labelTelefone");
let validTelefone = false;

let senha = document.querySelector("#senha");
let labelSenha = document.querySelector("#labelSenha");
let validSenha = false;

let confimarSenha = document.querySelector("#confimarSenha");
let labelConfimarSenha = document.querySelector("#labelConfimarSenha");
let validConfirmarSenha = false;

let msgError = document.querySelector("#msgError");
let msgSuccess = document.querySelector("#msgSuccess");

//LOGICA DE PRRENCHIMENTO DOS CAMPOS PARA CADASTRO
nome.addEventListener("keyup", () => {
  // codigo para parametros de preenchimento do campo "nome"
  if (nome.value.length <= 2) {
    labelNome.setAttribute("style", "color: red");
    labelNome.innerHTML = "Nome *Insisra no minimo 3 caracteres";
    nome.setAttribute("style", "border-color: red");
    validNome = false;
  } else {
    labelNome.setAttribute("style", "color: green");
    labelNome.innerHTML = "Nome";
    nome.setAttribute("style", "border-color: green");
    validNome = true;
  }
});

email.addEventListener("keyup", () => {
  // codigo para parametros de preenchimento do campo "email"
  if (email.value.length <= 5) {
    labelEmail.setAttribute("style", "color: red");
    labelEmail.innerHTML = "Email";
    email.setAttribute("style", "border-color: red");
    validEmail = false;
  } else {
    labelEmail.setAttribute("style", "color: green");
    labelEmail.innerHTML = "Email";
    email.setAttribute("style", "border-color: green");
    validEmail = true;
  }
});

telefone.addEventListener("keyup", () => {
  // codigo para parametros de preenchimento do campo "telefone"
  if (telefone.value.length <= 10) {
    labelTelefone.setAttribute("style", "color: red");
    labelTelefone.innerHTML = "Telefone *Insira seu numero com DDD";
    telefone.setAttribute("style", "border-color: red");
    validTelefone = false;
  } else {
    labelTelefone.setAttribute("style", "color: green");
    labelTelefone.innerHTML = "Telefone";
    telefone.setAttribute("style", "border-color: green");
    validTelefone = true;
  }
});

senha.addEventListener("keyup", () => {
  // codigo para parametros de preenchimento do campo "senha"
  if (senha.value.length <= 5) {
    labelSenha.setAttribute("style", "color: red");
    labelSenha.innerHTML = "Senha *Insira no minímo 6 caracteres";
    senha.setAttribute("style", "border-color: red");
    validSenha = false;
  } else {
    labelSenha.setAttribute("style", "color: green");
    labelSenha.innerHTML = "Senha";
    senha.setAttribute("style", "border-color: green");
    validSenha = true;
  }
});

//LOGICA PRA VER VER SE AS SENHAS CORRESPONDEM
confimarSenha.addEventListener("keyup", () => {
  // codigo para verificar se as senhas estão iguais
  if (senha.value != confimarSenha.value) {
    labelConfimarSenha.setAttribute("style", "color: red");
    labelConfimarSenha.innerHTML =
      "Confirmar Senha *As senhas não correspondem";
    confimarSenha.setAttribute("style", "border-color: red");
    validConfirmarSenha = false;
  } else {
    labelConfimarSenha.setAttribute("style", "color: green");
    labelConfimarSenha.innerHTML = "Confirmar Senha";
    confimarSenha.setAttribute("style", "border-color: green");
    validConfirmarSenha = true;
  }
});

//LOGICA PARA ARMAZENAMENTO DOS DADOS NO LOCALSTORAGE
function cadastrar() {
  if (
    validNome &&
    validEmail &&
    validTelefone &&
    validSenha &&
    validConfirmarSenha
  ) {
    let listaUser = JSON.parse(localStorage.getItem("listaUser") || "[]");

    listaUser.push({
      nomeCad: nome.value,
      emailCad: email.value,
      telefoneCad: telefone.value,
      senhaCad: senha.value,
    });

    localStorage.setItem("listaUser", JSON.stringify(listaUser));

    //LOGICA DA MENSAGEM DE ERRO E SUCESSO
    msgSuccess.setAttribute("style", "display: block");
    msgSuccess.innerHTML = "Usuário cadastrado com sucesso!";
    msgError.setAttribute("style", "display: none");
    msgError.innerHTML = "";

    setTimeout(() => {
      window.location.href = "../login/login.html"; //APOS CADASTRO OK ESSA LINHA MOVE O USUARIA PARA PAGINA DE LOGIN
    }, 2000);
  } else {
    msgError.setAttribute("style", "display: block");
    msgError.innerHTML = "Erro! Verifique os campos!";
    msgSuccess.setAttribute("style", "display: none");
    msgSuccess.innerHTML = "";
  }
}

//LOGICA BOTÃO DE VISUALIZAR A SENHA
btn.addEventListener("click", () => {
  // codigo para mostra senha no campo "senha"
  let inputSenha = document.querySelector("#senha");

  if (inputSenha.getAttribute("type") == "password") {
    inputSenha.setAttribute("type", "text");
  } else {
    inputSenha.setAttribute("type", "password");
  }
});

btnConfirmar.addEventListener("click", () => {
  // codigo para mostra senha no campo "confirmar senha"
  let inputConfimarSenha = document.querySelector("#confimarSenha");

  if (inputConfimarSenha.getAttribute("type") == "password") {
    inputConfimarSenha.setAttribute("type", "text");
  } else {
    inputConfimarSenha.setAttribute("type", "password");
  }
});
