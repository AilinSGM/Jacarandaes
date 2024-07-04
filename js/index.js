/*let nombre = prompt('Indica tu nombre');
console.log(nombre);

alert(`¡${nombre}, te damos la bienvenida!`)*/

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

let nombreIngresado = prompt ('Ingrese su nombre')
let emailIngresado = prompt ('Ingrese su email')
let passwordIngresada = prompt ('Ingrese su contraseña')

if(nombreIngresado !== null && passwordIngresada !== null && emailIngresado !== null){
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
}



