function jugar(opcionUsuario) {
  const opciones = ['piedra', 'papel', 'tijeras'];
  const opcionMaquina = opciones[Math.floor(Math.random() *3)];
  const resultado = comparar(opcionUsuario, opcionMaquina)
  
  document.getElementById('resultado pndejo').innerHTML = `Elegiste ${opcionUsuario}. La maquina eligió ${opcionMaquina}. ${resultado}`
};

function comparar(opcionUsuario, opcionMaquina) {
  if (opcionUsuario === opcionMaquina) {
    return 'Empate'
  }else if(opcionUsuario === 'piedra' &&  opcionMaquina === 'tijeras' || opcionUsuario === 'tijeras' && opcionMaquina === 'papel' || opcionUsuario === 'papel' && opcionMaquina === 'piedra'){
    return 'Ganaste'
  } else {
    return 'Perdiste'
  }
    
  }



