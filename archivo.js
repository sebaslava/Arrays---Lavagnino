
class verdu {
    verduras = []
    constructor(nombre, tipo, precio, stock) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.precio = precio;
        this.stock = stock;

    }

    cargaDatos() {
        const verduras = [];
        let cant = parseInt(prompt("¿Cuantos productos desea cargar?"));

        for (cant <= 0; cant--;) {
            let nombre = this.nombre = prompt("Ingrese nombre producto")
            let tipo = this.tipo = prompt("Ingrese fruta almacen verdura")
            let precio = this.precio = prompt("Ingrese precio")
            let stock = this.stock = prompt("Ingrese stock")


            verduras.push(nombre, tipo, precio, stock);

        }
        this.mostrarDatos(verduras)
    }
    mostrarDatos(verduras) {


        console.log(verduras);

    }
}
const verduras = new verdu;
verduras.cargaDatos();
verduras.mostrarDatos();


// let verdu1 = new verdu(prompt("Ingrese nombre producto"), prompt("Fruta - Verdura - Almacen"), prompt("Ingrese precio"), prompt("Ingrese stock"));
// let verdu2 = new verdu(prompt("Ingrese nombre producto"), prompt("Fruta - Verdura - Almacen"), prompt("Ingrese precio"), prompt("Ingrese stock"));
// let verdu3 = new verdu(prompt("Ingrese nombre producto"), prompt("Fruta - Verdura - Almacen"), prompt("Ingrese precio"), prompt("Ingrese stock"));
// let verdu4 = new verdu(prompt("Ingrese nombre producto"), prompt("Fruta - Verdura - Almacen"), prompt("Ingrese precio"), prompt("Ingrese stock"));


// verduleria.push(verdu1);
// verduleria.push(verdu2);
// verduleria.push(verdu3);
// verduleria.push(verdu4);

// console.log(verduleria);

