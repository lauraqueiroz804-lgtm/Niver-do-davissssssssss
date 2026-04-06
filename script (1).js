function logar() {
    var Usuario = document.getElementById('inputUsuario').value
    var senha = document.getElementById('inputSenha').value

    if((Usuario == "Laura" || Usuario == 'laura@laura.com') && senha == "123"){
      window.location.href = "index.html" 
       
    }else{
       document.getElementById('erro').innerHTML = "Usuario/Senha incorretos!!! "
        Swal.fire({
       title: "Acesso negado",
       text: "Usuário ou senha incorretos!",
       icon: "error"
      });
     }
}
     