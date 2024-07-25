

let dbUsuarios = [
    {
        "nombre": "AilinAd",
        "email": "ailingomezmonacci@live.com",
        "password": "ailin2024"
    },
    {
        "nombre": "AranzaAd",
        "email": "aranzabgr7@gmail.com",
        "password": "aranza2024"
    },
    {
        "nombre": "PaulaAd",
        "email": "pauuferzun@gmail.com",
        "password": "paula2024"
    },
    {
        "nombre": "MarianaAd",
        "email": "mar.tebar92@gmail.com",
        "password": "mariana2024"
    },
    {
        "nombre": "NataliaAd",
        "email": "nataliadumondin@gmail.com",
        "password": "natalia2024"
    }
]

dbUsuarios = JSON.stringify (dbUsuarios)

let db = JSON.parse (dbUsuarios)

/*let nombreIngresado = prompt ('Ingrese su nombre')
let emailIngresado = prompt ('Ingrese su email')
let passwordIngresada = prompt ('Ingrese su contraseña') */


/*if(nombreIngresado !== null && passwordIngresada !== null && emailIngresado !== null){
    for(let i = 0; i < db.length ; i++){
        if(db[i].email === emailIngresado){
            if(db[i].password === passwordIngresada){
               nombreDelUsuario = db [i].nombre;
               usuarioEncontrado = true;

               usuario = {
                nombre: db [i].nombre,
                email: db [i].email,
                password: db [i].password,
               }
            } else {
                alert (`La contraseña ingresada no coincide`)
            }
        }
    }
}
if(usuarioEncontrado !== true) {
    const usuarioPorGuardar = {
        nombre: nombreIngresado,
        email: emailIngresado,
        password: passwordIngresada
    }
    db.push(usuarioPorGuardar);
    usuario = usuarioPorGuardar;
}*/

window.addEventListener('load', function(){
    let listaDeErrores = document.querySelector('#errores');
    let formulario = document.getElementById('#formLogin');
    let inputEmail = document.querySelector('#emailLogin');
    let inputPassword = document.querySelector('#contrasenaLogin');
    let saludo = document.querySelector('#saludoDeBienvenida');

   // console.log(listaDeErrores, formulario, inputEmail, inputPassword)
       
    formulario.addEventListener('submit', function(event){

        event.preventDefault();
        let errores = [];

        if (inputEmail.value == ''){
            errores.push('El campo correo electrónico que estar completo')            
        }

        if(inputPassword.value == ''){
            errores.push('El campo contraseña tiene que estar completo')
        }
        let emailEncontrado = false;
        for(let i = 0; i < db.length ; i++){
            if(db[i].email === inputEmail.value){
                emailEncontrado = true;
                if(db[i].password === inputPassword.value){
                    nombreDelUsuario = db [i].nombre;
                     
                    const usuario = {
                        nombre: db [i].nombre,
                        email: db [i].email,
                        password: db [i].password,
                    }
                    db.push(usuario)
                    localStorage.setItem('usuario', JSON.stringify(usuario));

                    saludo.innerHTML = `¡${db [i].nombre}, le damos la bienvenida!`
                    sessionStorage.setItem('usuario', JSON.stringify(usuario));
              } else{
                    errores.push('La contraseña no coincide')
                }
            }   
        }     

        if(emailEncontrado === false){
            errores.push('El correo electrónico no se encuentra registrado')
        }
        if (errores.length > 0) {
            for(let i = 0; i < errores.length; i++){
                listaDeErrores.innerHTML += `<li> ${errores[i]} </li>`
            }

            if(emailEncontrado === false){
                alert('Debe registrarse en la sección de registro')
            }
        }
    })
})

