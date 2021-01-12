//Sección 1

/**
 * Funcion que muestra en consola un mensaje apartir de un parametro
 * @param nombre 
 */
function saludar(nombre:string) {
    console.log("Hola " + nombre.toUpperCase() + "!");
}

var walverine = {
    nombre: "logan"
};

//saludar(walverine.nombre);

//Sección 2

let mensaje = "Hola";
if (true){
    let mensaje = "Adios";
}
console.log(mensaje);