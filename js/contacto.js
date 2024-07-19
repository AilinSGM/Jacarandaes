window.addEventListener('load', function(){
    let nombre = document.queryselector('name');
    nombre.addEventListener('focus', function(){
        console.log('Entraste al input')
    })
})
let formulario = document.getElementById('form.comunicacion');

formulario.addEventListener('submit', function(event){
    event.preventDefault();
    let inputNombre = document.querySelector('input.name');
if (inputNombre.value == ''){
    alert('El campo nombre tiene que estar completo')
} else if (inputNombre.value.length <3) {
    alert ('El campo nombre debe tener al menos 3 caracteres')
};

    let inputSurname = document.querySelector('input.surname');
if (inputSurname.value == ''){
    alert('El campo apellido tiene que estar completo')
} else if (inputSurname.value.length <3) {
    alert ('El campo apellido debe tener al menos 3 caracteres')
};

    let inputEmail = document.querySelector('input.email');
if (inputEmail.value == ''){
    alert('El campo correo electrónico tiene que estar completo')
} else if (inputEmail.value.includes('@')) {
    alert ('El email no es correcto')
}

    let inputPhone = document.querySelector('input.phone');
if (inputPhone.value == ''){
    alert('El campo teléfono tiene que estar completo')
} else if (inputPhone.value.length <8) {
    alert ('El campo teléfono debe tener al menos 8 caracteres')
}

let inputMesagge = document.querySelector('input.mesagge');
if (inputMesagge.value == ''){
    alert('El campo mensaje tiene que estar completo')
} else if (inputMesagge.value.length <50) {
    alert ('El campo teléfono debe tener al menos 50 caracteres')
}
});

formulario.addEventListener('submit', function(event){ 
    let errores = []
    let inputNombre = document.querySelector('input.name');
    if (inputNombre.value == ''){
        errores.push('El campo nombre tiene que estar completo')
    } else if (inputNombre.value.length <3){
        errores.push('El campo nombre debe tener al menos 3 caracteres')
    }
  
    if (errores.length >0){
        event.preventDefault();
    {errores.push('Los campos deben estar completos')}}

let ulErrores = document.querySelector('div.errores ul');
for (let i = 0; i < errores.length; i++){
    ulErrores.innerHTML += '<li>' + errores[i] + '</li>'}
});
