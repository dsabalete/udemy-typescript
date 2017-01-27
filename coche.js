var Coche = (function () {
    function Coche(modelo) {
        if (modelo === void 0) { modelo = null; }
        this.color = "BLANCO";
        this.velocidad = 0;
        if (modelo == null) {
            this.modelo = "BMW Generico";
        }
        else {
            this.modelo = modelo;
        }
    }
    ;
    Coche.prototype.getColor = function () {
        return this.color;
    };
    Coche.prototype.setColor = function (color) {
        this.color = color;
    };
    Coche.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    Coche.prototype.getModelo = function () {
        return this.modelo;
    };
    Coche.prototype.acelerar = function () {
        this.velocidad++;
    };
    Coche.prototype.frenar = function () {
        this.velocidad--;
    };
    return Coche;
}());
var coche = new Coche("Volkswagen Golf");
var coche2 = new Coche();
var coche3 = new Coche();
coche.setColor("ROJO");
// coche2.setColor("AZUL");
// coche3.setColor("VERDE");
console.log("El modelo del coche 1 es " + coche.getModelo());
console.log("El coche 1 es de color " + coche.getColor());
// console.log("El coche 2 es de color " + coche2.getColor());
// console.log("El coche 3 es de color " + coche3.getColor());
coche.acelerar();
coche.acelerar();
coche.acelerar();
console.log("La velocidad del coche es " + coche.getVelocidad());
coche.frenar();
console.log("La velocidad del coche es " + coche.getVelocidad());
