//  Variaveis
let prato = 2

let padrao = 18

// Prepero
let totalPreparo = prato => {
  switch (prato) {
    case 1:
      return (Pipoca = '10 segundos')
      break
    case 2:
      return (macarrao = '8 segundos')
      break
    case 3:
      return (carne = '15 segundos')
      break
    case 4:
      return (feijao = '12 segundos')
      break
    case 5:
      return (brigadeiro = ' 8 segundos')
      break
    default:
      return 'erro'
      break
  }
}

// informes
if (padrao > 2 * totalPreparo(prato) && padrao <= 3 * totalPreparo(prato)) {
  console.log('A comida queimou')
} else if (padrao < totalPreparo(prato)) {
  console.log('Tempo insuficiente')
} else if (totalPreparo(prato) == 'erro') {
  console.log('Prato inexistente')
} else if (padrao > 3 * totalPreparo(prato)) {
  console.log('Kabumm')
} else console.log('Prato pronto, bom apetite!!!')
