function validar() {
    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var telefone = document.getElementById("telefone");
    var celular = document.getElementById("celular");
    var idade = document.getElementById("idade");
    var sexo = document.getElementById("sexo")
    var estadoselect = document.getElementById("estadoselect");
    var cidadeselect = document.getElementById("cidadeselect");
    var motivo = document.getElementById("motivo");
    var mensagem = document.getElementById("mensagem");

    if (nome.value == "") {
        alert("Nome não informado");
        nome.focus();
        return
    }

    if (telefone.value == "") {
        alert("Número não informado");
        telefone.focus();
        return
    }
}