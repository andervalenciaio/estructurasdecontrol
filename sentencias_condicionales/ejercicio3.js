//ejercicio 3

// calcula la edad promedio de 5 personas

const edades = [20, 25, 30, 35, 40]; 

let sumaEdades = 0;

for (let i = 0; i < edades.length; i++) {
    sumaEdades += edades[i];
}

let edadPromedio = sumaEdades / edades.length;

console.log("Edades:", edades);
console.log("La edad promedio es:", edadPromedio);

if (edadPromedio >= 18) {
    console.log("La edad promedio es mayor o igual a la mayoría de edad.");
} else {
    console.log("La edad promedio es menor a la mayoría de edad.");
}
