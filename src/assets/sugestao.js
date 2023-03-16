function validacao(){
    if (document.form.nome.value == ""){
      alert("Por favor, preencha o campo 'Nome'");
      document.form.name.focus();
      return false;
    }
    
    if (document.form.email.value == "" || document.form.email.value.indexOf('@') == -1 || document.form.email.value.indexOf('.') == -1){
      alert("Insira um endereço de e-mail válido");
      document.form.email.focus();
      return false;
    }
  }  