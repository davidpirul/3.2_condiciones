function validarCantidad() {
    let opcionUno = document.querySelector('#op1').value;
    let opcionDos = document.querySelector('#op2').value;
    let opcionTres = document.querySelector('#op3').value;
    let totalStickers = Number(opcionUno) + Number(opcionDos) + Number(opcionTres);
    let texto = '';

    if (totalStickers > 10) {
        texto = '¡Puedes elegir un total de 10 stickers!';
    } else {
        texto = ("Llevas " + totalStickers + " stickers");
    } 

document.getElementById("verificar").innerHTML = texto;
}