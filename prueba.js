//// Hola Mundo
// function holaMundo(nombre) {
//     return "Hola Mundo!!!" + nombre;
// }
// let nombre = "David Sabalete";
// var resultado = holaMundo(nombre);
var etiqueta = document.getElementById("container");
// etiqueta.innerHTML = resultado;
// alert("hola mundo alert!!!");
//// Variables y tipos
// var nombre: any = "David Sabalete";
// var edad: number = 44;
// var programador: boolean = true;
// var langs: Array<String> = ['Java', 'PHP', 'ASP', 'HTML', 'CSS', 'Javascript', 'Typescript'];
// nombre = "letras";
// edad = 43;
// programador = false;
// etiqueta.innerHTML = nombre + " - " + edad; 
// Funciones y tipado
function devuelveNumero(num) {
    return "El número devuelto es el " + num;
}
function devuelveString(texto) {
    if (texto == 'hola') {
        var num = 66;
    }
    else {
        var num = 90;
    }
    return num;
}
alert(devuelveNumero(34));
