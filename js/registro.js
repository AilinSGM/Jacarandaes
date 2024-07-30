window.addEventListener('load', function(e){
    let db = JSON.parse(localStorage.getItem('usuarios'));
    // console.log(db);

    let formulario = document.getElementById('comunicacion');
    let inputEmail = document.querySelector('#email');
    let inputContraseña = document.querySelector('#password');
    let inputName = document.querySelector('#name')
    let listaDeErrores = document.querySelector('#erroresComunicacion')
    let respuesta = document.querySelector('#respuestaDeRegistro');
    
    // console.log(formulario, inputEmail, inputContraseña, inputName, listaDeErrores, respuesta)
    
    formulario.addEventListener('submit', function(event){
        
        event.preventDefault();
        let errores = [];
        let usuarioEncontrado = false;
        let usuario;

        if(inputEmail.value == ''){
            errores.push('El campo correo electrónico que estar completo')            
        }

        if(inputContraseña.value == ''){
            errores.push('El campo contraseña tiene que estar completo')
        }

        if(inputName.value == ''){
            errores.push('El campo nombre tiene que estar completo')
        }

        for(let i=0; i< db.length ; i++){
            if(db[i].email === inputEmail.value){
                usuarioEncontrado = true;
                errores.push('El email ingresado ya se encuentra registrado')
            }
        }

        if (errores.length > 0) {
            for(let i = 0; i < errores.length; i++){
                listaDeErrores.innerHTML += `<li>${errores[i]}</li>`
            }
        } else {
            if(usuarioEncontrado === false){
                usuario = {
                    nombre: inputName.value,
                    email: inputEmail.value,
                    password: inputContraseña.value
                }

                db.push(usuario);
                localStorage.setItem('usuarios', JSON.stringify(db));
                respuesta.innerHTML = `Gracias por registrarse en nuestra página!!!`;
            }    
        }

        inputEmail.value = ''
        inputContraseña.value = ''
        inputName.value = ''
    })
})