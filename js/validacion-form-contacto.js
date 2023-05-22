function validarFormulario() {
  
      var expRegNombre = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
      var expRegApellidos = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
      var expRegNumeros = /^([0-9])*$/;
      var expRegCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

      var nombres = document.getElementById("nombres");
      var apellidos = document.getElementById("apellidos");
      var telefono = document.getElementById("telefono");
      var correo = document.getElementById("correo");
      var mensaje = document.getElementById("mensaje");

      //Campo nombres
      if (!nombres.value) {
        alert("El campo nombres es requerido");
        nombres.focus();
        return false;        
      }

      if (!expRegNombre.exec(nombres.value)) {
        alert("El campo nombres admite letras y espacios.")
        nombres.focus();
        return false;   
      }
      //Campo apellido
      if (!apellidos.value) {
        alert("El campo apellidos es requerido");
        apellidos.focus();
        return false;   
      }
      if (!expRegApellidos.exec(apellidos.value)) {
        alert("El campo apellidos admite letras y espacios.")
        apellidos.focus();
        return false;   
      }

      //Campo Telefono
      if (!telefono.value) {
        alert("El campo Telefono es requerido");
        telefono.focus();
        return false;   
    }
    if (!expRegNumeros.exec(telefono.value)) {
        alert("El campo telefono solo admite numeros.");
        telefono.focus();
        return false;   
    }
      //campo email
      if (!correo.value) {
        alert("El campo correo es requerido");
        correo.focus();
        return false;   
      }
      if (!expRegCorreo.exec(correo.value)) {
        alert("El campo correo no tiene el formato correcto.")
        correo.focus();
        return false;   
      }
      //campo mensaje
      if (mensaje.value.trim().length === 0) {
        alert("El campo mensaje es requerido");
        mensaje.focus();
        return false;   
      }
      alert("Mensaje Enviado, Nos contactaremos contigo lo antes posible.");
      return true;

}