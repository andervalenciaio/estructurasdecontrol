// número aleatorio entre 1 y 100
let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
let adivinanza;

// Función para verificar la adivinanza 
function verificarAdivinanza(adivinanza) {
    intentos++;
    if (adivinanza === numeroSecreto) {
        alert("¡Correcto! El número era " + numeroSecreto + ". Lo adivinaste en " + intentos + " intentos.");
        return true; 
    } else if (adivinanza < numeroSecreto) {
        alert("Demasiado bajo, intenta de nuevo.");
    } else {
        alert("Demasiado alto, intenta de nuevo.");
    }
    return false; 
}

// Bucle para seguir pidiendo al usuario que adivine el número
do {
    adivinanza = parseInt(prompt("Adivina el número entre 1 y 100"), 10);
   
    if (isNaN(adivinanza)) {
        alert("Por favor, ingresa un número válido.");
    }
} while (!verificarAdivinanza(adivinanza)); 