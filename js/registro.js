window.addEventListener('load', function(){
    //let db = JSON.parse(localStorage.getItem('usuarios'));
    // console.log(db);

    let formulario = document.getElementById('comunicacion');
    let inputName = document.querySelector('#name')
    let inputContraseña = document.querySelector('#password');
   
    let listaDeErrores = document.querySelector('#nameError')
    let respuesta = document.querySelector('#respuestaDeRegistro');
    
    // console.log(formulario, inputEmail, inputContraseña, inputName, listaDeErrores, respuesta)
    
    formulario.addEventListener('submit', function(event){
        
        //event.preventDefault();
        let errores = [];
        //let usuarioEncontrado = false;
        //let usuario;

        if(inputName.value == ''){
            errores.push('El campo nombre que estar completo') 
            nameError.innerHTML = 'el campo nombre tiene que estar completo'          
        }else if(inputName.value.lenght < 4){
            errores.push('el nombre de usuario debe tener al menos 4 caracteres')
        }

        if(inputContraseña.value == ''){
            errores.push('El campo contraseña tiene que estar completo')
        }

        if (errores.length > 0) {
            event.preventDefault();
            let listaDeErrores = document.querySelector ('#nameError')
            for(let i = 0; i < errores.length; i++){
                listaDeErrores.innerHTML += `<li>${errores[i]}</li>`
            }
                db.push(usuario);
                localStorage.setItem('usuarios', JSON.stringify(db));
                respuesta.innerHTML = `Gracias por registrarse en nuestra página!!!`;
            }    
        })
})