//Trabalho Final - ABRIGO
/*<<<<<<< HEAD
// Banco de dados dos abrigos disponíveis no estado
//O nome do "bando de dados" era abrigos, e não abrigosCadastrados
let abrigos = []

// Variáveis
let menu
const listarAbrigos = []
while (menu !== 5) {
    menu = Number(
    prompt(`===== ABRIGOS TEMPORÁRIOS =====

    1. Cadastrar abrigo

    2. Listar abrigos

    3. Procurar abrigo

    4. Sair

    Escolha uma opção:`)
  )

  switch (menu) {
    case 1:
        cadastrar()
        break;
    case 2:
        listar()
        break;
    case 3:
        buscarAbrigo()
        break;
    case 4:
        alert("Obrigado por acessar este sistema")
        break;
    default:
        alert("Não existe essa opção no menu!")
        break;
  }

function cadastrar() {
    const nomeAbrigo = prompt("Digite o nome do abrigo")
    const enderecoAbrigo = prompt("Digite a rua, número e bairro do abrigo")
    const cidadeAbrigo = prompt("Digite a cidade do seu abrigo:").toLowerCase()
    const telefoneAbrigo = Number(prompt("Digite  o telefone do abrigo:"))
    const capacidadeAbrigo = Number(prompt("Digite a capacidade do abrigo"))
    abrigos.push({nome: nomeAbrigo,endereco: enderecoAbrigo, cidade: cidadeAbrigo, telefone: telefoneAbrigo, capacidade: capacidadeAbrigo});
    //Registra no objeto
    //abrigosCadastrados.push(abrigo);
    //alert("Abrigo cadastrado com sucesso!");
  }

function listar() {
    if (abrigos.length === 0) {
        alert("Ainda não existem abrigos cadastrados");
    } else {
        let mensagem =
`
      LISTAGEM DE ABRIGOS:

      ----------------------------------

      NOME      |    ENDEREÇO       |   TELEFONE  |   CAPACIDADE

     --------------------------------------------------------------------`;
    for (let abrigo of abrigos) {
        mensagem += `\n   ${abrigo.nome}  ${abrigo.endereco}  ${abrigo.cidade}  ${abrigo.telefone}  ${abrigo.capacidade}`
    }
    alert(mensagem);
    }
}
    
function buscarAbrigo() {
if (abrigos.length === 0) {
    alert("Ainda não existem abrigos cadastrados na sua cidade.");
} else {
    const localizarAbrigo = prompt("Digite sua cidade").toLowerCase();
    let mensagem = 
    
    `LISTAGEM DE ABRIGOS:

      ----------------------------------

      NOME      |    ENDEREÇO          |   TELEFONE  | CAPACIDADE

     --------------------------------------------------------------------`;
    for (let abrigo of abrigos) {
        if (abrigo.cidade.includes(localizarAbrigo))
        {
            mensagem += "\n" + abrigo.nome + " " +  abrigo.endereco + " " + abrigo.cidade + " " + abrigo.telefone + " " + abrigo.capacidade
        }
    }
    alert(mensagem);
    }
}
=======
// Banco de dados dos abrigos disponíveis no estado
//O nome do "bando de dados" era abrigos, e não abrigosCadastrados
let abrigos = []

// Variáveis
let menu
const listarAbrigos = []
while (menu !== 5) {
    menu = Number(
    prompt(`===== ABRIGOS TEMPORÁRIOS =====

    1. Cadastrar abrigo

    2. Listar abrigos

    3. Procurar abrigo

    4. Sair

    Escolha uma opção:`)
  )

  switch (menu) {
    case 1:
        cadastrar()
        break;
    case 2:
        listar()
        break;
    case 3:
        buscarAbrigo()
        break;
    case 4:
        alert("Obrigado por acessar este sistema")
        break;
    default:
        alert("Não existe essa opção no menu!")
        break;
  }

function cadastrar() {
    const nome = prompt("Digite o nome do abrigo")
    const endereco = prompt("Digite a rua, número e bairro do abrigo")
    const cidade = prompt("Digite a cidade do seu abrigo:").toLowerCase()
    const telefone = Number(prompt("Digite  o telefone do abrigo:"))
    const capacidade = Number(prompt("Digite a capacidade do abrigo"))
    abrigos.push({nome,endereco,cidade,telefone,capacidade})
    //Registra no objeto
    //abrigosCadastrados.push(abrigo);
    //alert("Abrigo cadastrado com sucesso!");
  }

function listar() {
    if (abrigos.length === 0) {
        alert("Ainda não existem abrigos cadastrados");
    } else {
        let mensagem =
`
      LISTAGEM DE ABRIGOS:

      ----------------------------------

      NOME      |    ENDEREÇO       |   TELEFONE  |   CAPACIDADE

     --------------------------------------------------------------------`;
    for (let abrigo of abrigos) {
        mensagem += `\n   ${abrigo.nome}  ${abrigo.endereco}  ${abrigo.cidade}  ${abrigo.telefone}  ${abrigo.capacidade}`
    }
    alert(mensagem);
    }
}
    
function buscarAbrigo() {
if (abrigos.length === 0) {
    alert("Ainda não existem abrigos cadastrados na sua cidade.");
} else {
    const localizarAbrigo = prompt("Digite sua cidade").toLowerCase();
    let mensagem = 
    
    `LISTAGEM DE ABRIGOS:

      ----------------------------------

      NOME      |    ENDEREÇO          |   TELEFONE  | CAPACIDADE

     --------------------------------------------------------------------`;
    for (let abrigo of abrigos) {
        if (abrigo.cidade.includes(localizarAbrigo))
        {
            mensagem += "\n" + abrigo.nome + " " +  abrigo.endereco + " " + abrigo.cidade + " " + abrigo.telefone + " " + abrigo.capacidade
        }
    }
    alert(mensagem);
    }
}*/

//Trabalho Final-H

// Variáveis
let menu;
const doadoresSangue = [];

// Laço de repetição
while (menu !== 5) {
  menu = Number(
    prompt(`===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE =====
        1. Cadastrar doador
        2. Listar doadores
        3. Buscar doador por tipo sanguíneo
        4. Buscar doador por data da última doação
        5. Sair
        Escolha uma opção:
        `)
  );

  // Switch para fazer algo dependendo da função
  switch (menu) {
    case 1:
      cadastrar();
      break;
    case 2:
      listar();
      break;
    case 3:
      buscarDoadorTipoSanguineo();
      break;
    case 4:
      buscarDadosData();
      break;
      case 5 :
        alert("Programa finalizado, volte sempre!")
        break;
    default:
      
        alert("Opção não encontrada, tente novamente!");
      break;

  }
}
// Cadastro de Doador
function cadastrar() {
  const nome = prompt("Digite seu nome");
  const idade = Number(prompt("Digite sua idade"));
  const peso = Number(prompt("Digite seu peso"));
  const tipoSangue = prompt("Digite seu tipo sanguineo").toLowerCase();
  const ultimaData = prompt("Digite a ultima data de doação? DD/MM/AAAA");
  let varTeste = 0

  const doador = {
    nome,
    idade,
    peso,
    tipoSangue,
    ultimaData,
  };

  doadoresSangue.push(doador);

  alert("Doador cadastrado com sucesso");
}

// Listar os Doadores
function listar() {
  if (doadoresSangue.length === 0) {
    alert("Não existe doadores cadastrados");
  } else {
    let mensagem = `
        --------------------
        LISTAGEM DE DOADORES:
        --------------------
     NOME | IDADE |  PESO  | TIPO SANGUÍNEO  |  ÚLTIMA DOAÇÃO
        `;

    for (let doador of doadoresSangue) {
      mensagem += `\n     ${doador.nome}      ${doador.idade}         ${doador.peso}            ${doador.tipoSangue}               ${doador.ultimaData}`;
    }
    alert(mensagem);
  }
}

// Buscar Doador
function buscarDoadorTipoSanguineo() {
  if (doadoresSangue.length === 0) {
    alert("Não existe doadores cadastrados");
  } else {
    const buscaTipoSanguineo = prompt("Digite o tipo sanguine").toLowerCase();

    let mensagem = `
        ------------------------
        RESULTADO DA BUSCA:
        ------------------------
     NOME  |   IDADE  |   PESO   |   TIPO SANGUÍNEO   | ÚLTIMA DOAÇÃO
        `;

    for (let doador of doadoresSangue) {
      if (doador.tipoSangue.includes(buscaTipoSanguineo)) {
        mensagem += `\n         ${doador.nome} ||     ${doador.idade} ||      ${doador.peso} ||        ${doador.tipoSangue} ||             ${doador.ultimaData}`;
      }
    }

    alert(mensagem);
  }
}

// Buscar Doador pela data
function buscarDadosData() {
  if (doadoresSangue.length === 0) {
    alert("Não existe doadores cadastrados");
  } else {
    const dataBusca = prompt("Digite o a ultima data? DD/MM/AAAA");

    let mensagem = `
        ------------------------
        RESULTADO DA BUSCA:
        ------------------------
     NOME    |  IDADE  |  PESO  |  TIPO SANGUÍNEO |  ÚLTIMA DOAÇÃO
        `;

    for (let doador of doadoresSangue) {
      if (doador.ultimaData === dataBusca) {
        mensagem +=` \n      ${doador.nome} ||     ${doador.idade} ||      ${doador.peso} ||         ${doador.tipoSangue} ||            ${doador.ultimaData}`;
      }
    }

    alert(mensagem);
  }
}


