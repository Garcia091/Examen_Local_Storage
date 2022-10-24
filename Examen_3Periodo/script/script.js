let correo, contrasena;

let formulario = document.getElementById('form')

formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
    LeerDatos()
})

function LeerDatos(){
    correo = document.getElementById('correo').value
    contrasena = document.getElementById('contrasena').value
  
    ValidarDatos(correo,contrasena)
}

function ValidarDatos (correo,contrasena){
    if(correo.length==0 ||contrasena.length==0){
        swal("Error", "Espacios en blanco", "error");
    }

    ListarDatos(correo,contrasena)
}

function ListarDatos(correo,contrasena){
    let CorreoUsu = localStorage.getItem('Correo')
    let ContrasenaUsu = localStorage.getItem('Contraseña')

    if(CorreoUsu== correo && ContrasenaUsu==contrasena){
        swal({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
          });
          window.location.href = "landing.html";
    }else{
        swal("Error", "Espacios en blanco", "error");
    }
    
}