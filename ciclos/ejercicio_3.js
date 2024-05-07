function generarSecuenciaAleatoria() {
    let numeros = [];
    let continuar = true;
  
    while (continuar) {
      let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
      if (!numeros.includes(numeroAleatorio)) {
        numeros.push(numeroAleatorio);
        console.log(numeroAleatorio);
      }
  
      
      continuar = confirm('¿Quieres generar otro número? (Aceptar para sí, Cancelar para no)');
    }
  
    console.log('Secuencia generada: ' + numeros.join(', '));
  }
  
  generarSecuenciaAleatoria();
  