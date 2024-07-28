window.addEventListener('load', function(e){
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
    ];
    
    if(localStorage.getItem('usuarios') === null){
        localStorage.setItem('usuarios', JSON.stringify(dbUsuarios));
    }
    
    let db = JSON.parse(localStorage.getItem('usuarios'));
    // console.log(db);

    let formulario = document.getElementById('formLogin');
    let inputEmail = document.querySelector('#emailLogin');
    let inputContraseña = document.querySelector('#contrasenaLogin');
    let listaDeErrores = document.querySelector('#errores')
    let respuesta = document.querySelector('#saludoDeBienvenida');

    console.log(formulario, inputEmail, inputContraseña, listaDeErrores, respuesta)

    formulario.addEventListener('submit', function(event){
        event.preventDefault();

        let errores = [];
        let usuarioEncontrado = false;
        let nombreDelUsuario;

        if(inputEmail.value == ''){
            errores.push('El campo correo electrónico que estar completo')            
        }

        if(inputContraseña.value == ''){
            errores.push('El campo contraseña tiene que estar completo')
        }

        for(let i=0; i< db.length ; i++){
            if(db[i].email === inputEmail.value){
                if(db[i].password == inputContraseña.value){
                    nombreDelUsuario = db[i].nombre;
                    usuarioEncontrado = true;
                } else {
                    errores.push('La contraseña no coincide con la registrada!!!')
                }
            }
        }

        if (errores.length > 0) {
            for(let i = 0; i < errores.length; i++){
                listaDeErrores.innerHTML += `<li>${errores[i]}</li>`
            }
        } else {
            if(usuarioEncontrado === true){
                sessionStorage.setItem('usuario', nombreDelUsuario);
                respuesta.innerHTML = `Bienvenid@ ${sessionStorage.getItem('usuario')} a nuestra página`;
            }
        
            if(usuarioEncontrado === false){
                alert(`Bienvenid@ Invitado a nuestra página!! Le sugerimos registrarse.`);
                respuesta.innerHTML = `<a class='btn' href='./views/registro.html'>Registrarse</a>`;
            }
        }
    })
})
