function validar(){
    //pegando o ID do login e password, armazenando em variavel
    var login = document.getElementById("login").value;
    var senha = document.getElementById("pass").value;

    //Verificar o login se não está VAZIO
    if(login || pass == null){
        document.getElementById("small").innerHTML = "Preencha o login!";
        document.getElementById("login").focus();
    }else{
        document.getElementById("small").innerHTML = " ";
    }

    if(login || pass == null){
        document.getElementById("small-pass").innerHTML = "Preencha o login!";
        document.getElementById("pass").focus();
    }else{
        document.getElementById("small-pass").innerHTML = " ";
    }


}