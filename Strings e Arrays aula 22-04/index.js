let numeros = ["0", "1", "2", "3", "4", "5", "6"]
numeros.push(7)
console.log(numeros)
numeros.splice(3,2)
console.log(numeros.length)
console.log(numeros)

//Exercícios 1 interpretação de código

let array
console.log('a. ', array)

array = null
console.log('b. ', array)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

let i = 0
console.log('d. ', array[i])

array[i+1] = 19
console.log('e. ', array)

const valor = array[i+6]
console.log('f. ', valor)


// Exercio 2 Leia o codigo

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

// Exercícios 1 de escrita de código

let nome = prompt("Digite seu nome")
let email = prompt("Digite seu email")
alert (`O email ${email} foi cadastrado com sucesso. Seja bem-vindo(a), ${nome}`)

// Exercio 2 de escrita de código

let comidasPreferidas = ["Alaminuta", "Pizza", "Lazanha", "Batata frita", "Massa"]
console.log(comidasPreferidas[0] + "\n" + comidasPreferidas[1] + "\n" + comidasPreferidas[2] + "\n" + comidasPreferidas[3] + "\n" + comidasPreferidas[4])



