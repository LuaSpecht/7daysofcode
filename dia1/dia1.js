console.log(false == '0')
console.log(null == undefined)
console.log("/t/r/n" == 0)
console.log("\t\r\n" == 0)
console.log('' == 0)

let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

if (numeroUm == stringUm) {
  if(typeof(numeroUm) !== typeof(stringUm)){
    console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
  }
} else {
  console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
}

if(typeof(numeroTrinta) == typeof(stringTrinta)){
  console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
} else{
  console.log('As variaveis tem tipos diferentes')
}


if (numeroDez == stringDez) {
  if(typeof(numeroDez) !== typeof(stringDez)){
    console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
  }
} else {
  console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
}