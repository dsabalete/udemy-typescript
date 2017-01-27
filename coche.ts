interface Vehiculo {
    getModelo():string;
    getVelocidad():number;

}

class Coche implements Vehiculo {
    public color: string;
    public modelo: string;
    public velocidad: number;

    constructor(modelo = null) {
        this.color = "BLANCO";
        this.velocidad = 0;

        if (modelo == null) {
            this.modelo = "BMW Generico";
        } else {
            this.modelo = modelo;
        }

    };

    public getColor() {
        return this.color;
    }

    public setColor(color: string) {
        this.color = color;
    }

    public getVelocidad(): number {
        return this.velocidad;
    }

    public getModelo() {
        return this.modelo;
    }

    public acelerar() {
        this.velocidad++;
    }

    public frenar() {
        this.velocidad--;
    }
}

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
