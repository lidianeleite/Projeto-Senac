// Exercicio 1 Condicionais 
/*let numUm = prompt("Digite um numero")
let numDois = prompt("Digite um numero")

if (numUm == numDois){
    alert(`Sucesso!!!`)
} else {
    alert(`Não teve sucesso!!!`)
}*/



// Exercio 2 Condicionais 

/*let numUm = prompt("Digite um numero:")
let numDois = prompt("Digite um numero:")

if (numUm == numDois){
    alert(`Numeros iguais!!!`)
} else {
    alert(`Numeros diferentes!!!`)
}*/

// Exercicio 3 Encadeamento de Condições

/*let numUm = prompt("Digite um numero:")
let numDois = prompt("Digite um numero:")

if (numUm > numDois){
    alert(`Numeros maior!!!`)
} else if (numUm < numDois){
    alert(`Numero menor!!!`)
} else if (numUm == numDois){
    alert(`Numeros iguais!!!`)
}*/

// Exercicio 4 Switch case

/*let pokemon
pokemon = prompt("Digite seu primeiro pokemon: ")
switch (pokemon){
    case `Bulbassauro`:
        alert(`Planta e veneno!!!`)
        break
        case `Charmander`:
            alert(`Fogo!!!`)
            break
            case `Squirtle`:
                alert(`Agua!!!`)
                default:
                    alert(`Não é um pokemon inicial!!!`)
                    break
}*/

// Exercicio 5
/*let cond1 = prompt ("Você concluiu o ensino medio?")
let cond2 = prompt ("Você tem mais de 18 anos?")
let cond3 = prompt ("Você esta cursando outra faculdade?")
if ((cond1 == "sim") && (cond2 == "sim") && (cond3 == "não")){
    alert(`Você pode cursar a faculdade!!!`)
} else { 
    alert(`Você NÃO pode cursar a faculdade!!!`)
}*/

//Exercicio 1 - Interpretação de código

/*const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}*/

// Exercio 4 - Interpretação de código 

/*let generoFilme
let precoFilme

generoFilme = prompt("Digite o genero do Filme")
precoFilme = Number(prompt("Digite o preço do filme"))
generoFilme = generoFilme.toUpperCase()
if ((generoFilme == "FANTASIA") && (precoFilme < 15)){
    alert(`Bom filme`)
} else {
    alert(`Escolha outro filme`)
}*/
   
//AULA 9 Exercicio 1 - Laços while

/*let i = 0
let soma = 0
i = Number(prompt("Digite um numero para ser somado: (para sair digite 0!!!"))
while (i != 0) {
    soma = soma + i
    i = Number(prompt("Digite um numero para ser somado: (Para sair digite 0!!!)"))
}
alert(soma)*/

//Exercicio 2 Laços For

/*let array = [11, 15, 18, 14, 12, 13]
let maiorValor = 0 

for (let i = 0; i < 6; i++){
    if (array[i] > maiorValor){
        maiorValor = array[i]
    }
}
alert(maiorValor)*/


//Exercicio 3 For...Of 

/*const palavras = ["Oi", "sumido(a)", "tudo", "bem?", "Saudades"]
let frase = ""

for (let indices of palavras){
    frase = frase + indices + " "
}
alert(frase)*/

// LAÇOS AULA 9 25-04 
// Exercício 1 Interpretação de Código

/*let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)
alert(valor) = //10*/

// Exercicio 2 Leia o código 

// Resultado:A) 19-21-23-25-27-30

/*const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
} */

// Resultado B) 

/*const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}
alert(valor)*/

// Exercicio 3 

/*const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}*/


