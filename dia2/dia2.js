const nome = window.prompt('Qual seu nome?')
const idade = window.prompt('Quantos anos você tem?')
const linguagem = window.prompt('Qual linguagem você está estudando?')

const resultado = window.alert(` Olá ${nome}, você tem ${idade} anos de idade e está estudando ${linguagem}`)

const gosto = window.prompt(`Você gosta de estudar ${linguagem}? Se sim responda 1, se não responda 2`)

if(gosto == 1){
  let resposta = window.alert(`Muito bom! Continue estudando e você terá muito sucesso.`)
} else if(gosto == 2){
  let resposta = window.alert(`Ahh que pena... Já tentou aprender outras linguagens?`)
} else{
  const gosto = window.alert('Esta resposta não é valida! Mas boa sorte com seus estudos ^-^')
}