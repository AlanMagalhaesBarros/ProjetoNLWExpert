const perguntas = [
    {
      pergunta: "Qual é a linguagem de programação mais utilizada para desenvolvimento web?",
      respostas: [
        "Java",
        "Python",
        "JavaScript"
      ],
      correta: 2
    },
    {
      pergunta: "Qual destes não é um tipo de dado em JavaScript?",
      respostas: [
        "String",
        "Float",
        "Boolean"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do comando 'console.log()' em JavaScript?",
      respostas: [
        "Exibir uma mensagem de erro",
        "Registrar informações no console do navegador",
        "Executar uma função específica"
      ],
      correta: 1
    },
    {
      pergunta: "O que é 'DOM' em JavaScript?",
      respostas: [
        "Document Object Model",
        "Data Object Model",
        "Dynamic Object Model"
      ],
      correta: 0
    },
    {
      pergunta: "O que significa 'NaN' em JavaScript?",
      respostas: [
        "Nada",
        "Not a Number",
        "Nova Arquitetura de Navegação"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
      respostas: [
        "var x = 5;",
        "int x = 5;",
        "string x = 5;"
      ],
      correta: 0
    },
    {
      pergunta: "O que é 'callback' em JavaScript?",
      respostas: [
        "Uma função que é passada como argumento para outra função",
        "Um tipo de erro de sintaxe",
        "Um método para interromper a execução do programa"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
      respostas: [
        "==",
        "===",
        "!="
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a maneira correta de acessar um elemento HTML pelo ID em JavaScript?",
      respostas: [
        "getElementByClass()",
        "querySelector()",
        "getElementById()"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do operador 'typeof' em JavaScript?",
      respostas: [
        "Retornar o tipo de dados de uma variável",
        "Realizar uma comparação lógica entre dois valores",
        "Definir o escopo de uma variável"
      ],
      correta: 0
    }
  ];
  
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostraTotal = document.querySelector('#acertos span')
  mostraTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  
  
  
  
  
  //loop ou laço de repetiçao
  for(const item of perguntas){
   const quizItem = template.content.cloneNode(true)
   quizItem.querySelector('h3').textContent =item.pergunta
  
  
  
  
  for(let resposta of item.respostas){
    const  dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' +  perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
  dt.querySelector('input').onchange = (event) =>{
   const estaCorreta = event.target.value == item.correta // test de escolha do item return true ou false
    corretas.delete(item)
  
    if(estaCorreta){
      corretas.add(item)
     
    }
     mostraTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  }
  
    quizItem.querySelector('dl').appendChild(dt)
  }
  
  
  
  quizItem.querySelector('dl dt').remove()
   //coloca a pergunta na tela
  quiz.appendChild(quizItem)
  }
  