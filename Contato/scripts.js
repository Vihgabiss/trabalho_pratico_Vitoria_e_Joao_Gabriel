function validar() {
    let nome = document.getElementById("nome");
    let email = document.getElementById("email");
    let telefone = document.getElementById("telefone");
    let celular = document.getElementById("celular");
    let idade = document.getElementById("idade");
    let sexo = document.getElementById("sexo")
    let estadoselect = document.getElementById("estadoselect");
    let cidadeselect = document.getElementById("cidadeselect");
    let motivo = document.getElementById("motivo");
    let mensagem = document.getElementById("mensagem");

    if (nome.value == "") {
        nome.focus();
    }

    const regerTelefone = /\([0-9]{2}\)[0-9]{4}-[0-9]{4}/
    console.log(!regerTelefone.test(telefone.value)&&telefone.value!="")
    if(!regerTelefone.test(telefone.value)&&telefone.value!=""){
        telefone.focus();
    }

    const regexEmail = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/
    
    if(!regexEmail.test(email.value)){
       email.focus();
       alert("bote o .com")
    }

    const regexCelular = /\([0-9]{2}\)9[0-9]{4}-[0-9]{4}/
    console.log(!regexCelular.test(celular.value)&&celular.value!="")
    if(!regexCelular.test(celular.value)&&celular.value!=""){
        celular.focus();
    }

    if(idade.value == "") {
        idade.focus();
    }

    if(sexo.value == "") {
        sexo.focus();
    }

    if(estadoselect.value == "") {
        estadoselect.focus();
    }

    if(cidadeselect.value == "") {
        cidadeselect.focus();
        return
    }

    if(motivo.value == "") {
        motivo.focus();
    }

    if(mensagem.value == "") {
        mensagem.focus();
    }
}