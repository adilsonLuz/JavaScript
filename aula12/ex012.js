var agora = new Date // pega objeto hora do sistema
var hora = agora.getHours() 
var minutos = agora.getMinutes()
var segundos = agora.getSeconds()

console.log(`Agora são exatamente ${hora}:${minutos}:${segundos}`)
if (hora < 12) {
    console.log(`Bom dia`)
} else if (hora < 18) {
    console.log(`Boa Tarde`)
} else if (hora > 18) {
    console.log(`Boa Noite`)
} else {
    console.log(`Não foi encontrado o Horario`)
}