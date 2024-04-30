//Funções - Exercícios de interpretação de código
//Exercicio 1 (A)

/*function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))*/


//1 (B)

/*function minhaFuncao(variavel) {
	return variavel * 5
}

minhaFuncao(2)
minhaFuncao(10)*/

//Leia o código abaixo
//Exercicio 2 (A)

/*let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)*/

//Escrita de codigo
//Exercicio 1(A)

/*function trocaParametros(){
let mensagem = "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
alert(mensagem)
alert(mensagem.replace("Caio","Cassio").replace("23", "32").replace("São Paulo", "São Leopoldo").replace("Estudante", "Perquisador"))
}
trocaParametros()*/

// 1 (B)

function parametros(nome,idade,cidade,profissão){

    console.log (`Sou ${nome} tenho ${idade} anos, moro em ${cidade} e sou ${profissão}`)
}
let nome = prompt("Digite seu nome") 
let idade = prompt("Digite sua idade") 
let cidade = prompt("Digite sua cidade")
let profissão = prompt("Digite sua profissão")
parametros(nome,idade,cidade,profissão)
