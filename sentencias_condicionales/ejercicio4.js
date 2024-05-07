//ejercicio 4

const anio = 2024; 


if (anio % 4 === 0) {
    if (anio % 100 !== 0) {
        console.log("El año es bisiesto.");
    } else {
        if (anio % 400 === 0) {
            console.log("El año es bisiesto.");
        } else {
            console.log("El año no es bisiesto.");
        }
    }
} else {
    console.log("El año no es bisiesto.");
}
