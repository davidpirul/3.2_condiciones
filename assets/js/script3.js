boton.onclick = (event) => {
    let numero1 = document.querySelector('#opc1').value;
    let numero2 = document.querySelector('#opc2').value;
    let numero3 = document.querySelector('#opc3').value;
    claveUsuario = numero1 + numero2 + numero3
    console.log(claveUsuario);

    if (claveUsuario == 911) {
        document.getElementById("respuesta").innerHTML = "¡Clave aceptada!";
        console.log("Contraseña 1 correcta");
    } else if (claveUsuario == 714) {
        document.getElementById("respuesta").innerHTML = "Segunda clave correcta";
        console.log("Contraseña 2 correcta");
    } else {
        document.getElementById("respuesta").innerHTML = "Clave incorrecta, vuelve a intentarlo";
        console.log("Contraseña incorrecta")
    }
}