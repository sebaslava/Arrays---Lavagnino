class verdu{
    constructor(nombre, tipo, precio, stock){
        this.nombre = nombre;
        this.tipo = tipo;
        this.precio = precio;
        this.stock = stock;

    }
}

let verdu1 = new verdu(prompt("ingrese nombre Producto"))
let verdu2 = new verdu(prompt("Ingrese tipo"))
let verdu3 = new verdu(prompt("Ingrese precio"))
let verdu4 = new verdu(prompt("Ingrese dato"))

const verduleria = []

verduleria.push (verdu1);
verduleria.push (verdu2);
verduleria.push (verdu3);
verduleria.push (verdu4);

console.log(verduleria);