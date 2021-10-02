let num = [5,8,10,200,2,9,3]

num.sort()
console.log(num)

num[5]=12
console.log(`O nosso vetor é ${num} colocando 10 na posição 5`)

num[2]=null
console.log(`Deixando posição 2 vazia ${num}`)

num.push(200)
console.log(`Colocando 200 na ultima posição ${num}`)

num.push(null)
console.log(`Deixando a ultima posição vazia ${num}`)

num[2]=num[6]
console.log(`posição 2 recebendo valor da posição 6 ${num}`)

num.push(num[3]*num[6])
console.log(`colocando a multiplicação das posições 3 e 6 na ultima ${num}`)

num.pop()
console.log(`Removendo a ultima posição ${num}`)

console.log(`O nosso vetor ao contrario é ${num.reverse()}`)

num.sort()
console.log(`O vetor ordenado é ${num}`)

console.log(`O nosso vetor tem ${num.length} elementos`)

for(let i=0; i<num.length;i++){
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}

for(let i in num){
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}

