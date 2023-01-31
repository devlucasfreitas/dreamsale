let btn = document.querySelector(".fa-eye");

btn.addEventListener("click", () => {
  let inputSenha = document.querySelector("#senha");

  if (inputSenha.getAttribute("type") == "password") {
    inputSenha.setAttribute("type", "text");
  } else {
    inputSenha.setAttribute("type", "password");
  }
});

//LOGICA PARA EFETUAR LOGIN
function entrar() {
  let email = document.querySelector("#email");
  let senha = document.querySelector("#senha");

  fetch(`./../usuarios.json`)
    .then((res) => res.json())
    .then((dados) => {
      usuarios(dados);
    });
  function usuarios(dados) {
    let entrou = false;

    dados.forEach((dados) => {
      const emailUsuario = dados.email;
      const senhaUsuario = dados.senha;
      if (email.value === emailUsuario && senha.value === senhaUsuario) {
        entrou = true;
        window.location.href =
          "https://devlucasfreitas.github.io/dream-sale-crm/";
      } else if (entrou === false) {
        window.alert("Email ou senha incorretos");
      }
    });
  }
}
