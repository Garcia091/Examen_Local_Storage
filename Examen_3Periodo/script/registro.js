let nombre, apellidos, correo, contrasena;

let formulario = document.getElementById('form')

formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
    LeerDatos()
})

function LeerDatos(){
    nombre = document.getElementById('nombre').value
    apellidos = document.getElementById('apellidos').value
    correo = document.getElementById('correo').value
    contrasena = document.getElementById('contrasena').value

    ValidarDatos(nombre, apellidos, correo,contrasena)
    guardarLocalStorage(nombre, apellidos, correo,contrasena)
   
}

function ValidarDatos (nombre, apellidos, correo,contrasena){
    if(nombre.length==0 || apellidos.length==0 || correo.length==0 ||contrasena.length==0){
        swal("Error", "Espacios en blanco", "error");
    }
}

function guardarLocalStorage(nombre, apellidos, correo,contrasena){
    localStorage.setItem('Nombre',nombre)
    localStorage.setItem('Apellidos',apellidos)
    localStorage.setItem('Correo',correo)
    localStorage.setItem('Contraseña',contrasena)
    
}