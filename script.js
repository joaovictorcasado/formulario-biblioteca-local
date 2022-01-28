// Botões de ação ficarão aqui e também a validação..

/* Função Validar */
function validar() {
  // pegando o valor do nome pelos names
  let nome = document.getElementById("username");
  let sobrenome = document.getElementById("surname");
  let email = document.getElementById("email");
  let senha = document.getElementById("password");
  let telefone = document.getElementById("tel");
  let cep = document.getElementById("cep");
  let sexo = document.getElementById("sex");
  let newsletter = document.getElementById("check_box").checked;

  // verificar se o nome está vazio
  if (nome.value == "") {
    alert("Nome não informado");

    // Deixa o input com o focus
    nome.focus();
    // retorna a função e não olha as outras linhas
    return;
  }
  if (sobrenome.value == "") {
    alert("Sobrenome não informado");
    sobrenome.focus();
    return;
  }
  if (email.value == "") {
    alert("E-mail não informado");
    email.focus();
    return;
  }
  if (senha.value == "") {
    alert("Senha não informada");
    senha.focus();
    return;
  }
  if (telefone.value == "") {
    alert("Telefone não informado");
    telefone.focus();
    return;
  }
  if (cep.value == "") {
    alert("CEP não informado");
    cep.focus();
    return;
  }
  if (sexo.value == "") {
    alert("Informe seu sexo");
    sexo.focus();
    return;
  }
  alert("Formulário enviado!");
  // envia o formulário
  //formulario.submit();
}