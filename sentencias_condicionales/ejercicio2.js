// ejercicio 2

const numero1 = 10;
const numero2 = 5;
const operacion = '+';

function calcular(numero1, numero2, operacion) {
    switch (operacion) {
        case '+':
            return numero1 + numero2;
        case '-':
            return numero1 - numero2;
        case '*':
            return numero1 * numero2;
        case '/':
            if (numero2 !== 0) {
                return numero1 / numero2;
            } else {
                return "Error: No se puede dividir por cero.";
            }
        default:
            return "Error: Operación no válida.";
    }
}

let resultado = calcular(numero1, numero2, operacion);

console.log("Número 1:", numero1);
console.log("Número 2:", numero2);
console.log("Operación:", operacion);

console.log("El resultado es:", resultado);
