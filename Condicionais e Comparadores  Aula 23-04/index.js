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

let generoFilme
let precoFilme

generoFilme = prompt("Digite o genero do Filme")
precoFilme = Number(prompt("Digite o preço do filme"))
generoFilme = generoFilme.toUpperCase()
if ((generoFilme == "FANTASIA") && (precoFilme < 15)){
    alert(`Bom filme`)
} else {
    alert(`Escolha outro filme`)
}
   

