function validarFormulario() {
  
    var usuario = document.getElementById("usuario");
    var clave = document.getElementById("clave");
    
    //Campo Usuario
    if (!usuario.value) {
      alert("El campo usuario es requerido");
      nombres.focus();
      return false;        
    }

    //Campo Clave
    if (!clave.value) {
      alert("El campo clave es requerido");
      apellidos.focus();
      return false;   
    }

    return true;
}