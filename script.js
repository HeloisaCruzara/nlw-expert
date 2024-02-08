const perguntas = [
    {
      pergunta: "O que significa 'DOM' em JavaScript?",
      respostas: [
        "Document Object Model",
        "Data Object Model",
        "Dynamic Object Management",
      ],
      correta: 0
    },
    {
      pergunta: "Qual desses métodos é usado para imprimir algo no console no JavaScript?",
      respostas: [
        "print()",
        "log()",
        "console.log()",
      ],
      correta: 2
    },
    {
      pergunta: "Como você declara uma variável em JavaScript?",
      respostas: [
        "var myVar;",
        "variable myVar;",
        "v myVar;",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a maneira correta de escrever um comentário de uma linha em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "<!-- Este é um comentário -->",
        "' Este é um comentário",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
      respostas: [
        "==",
        "===",
        "=",
      ],
      correta: 1
    },
    {
      pergunta: "Como você declara uma função em JavaScript?",
      respostas: [
        "função myFunction() {}",
        "function: myFunction() {}",
        "function myFunction() {}",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a saída de console deste código: console.log(typeof([]));",
      respostas: [
        "array",
        "object",
        "undefined",
      ],
      correta: 1
    },
    {
      pergunta: "O que o método 'charAt()' faz em JavaScript?",
      respostas: [
        "Retorna o índice de um caractere específico em uma string",
        "Retorna o caractere em um índice específico em uma string",
        "Verifica se uma string contém um caractere específico",
      ],
      correta: 1
    },
    {
      pergunta: "Qual desses métodos JavaScript é usado para remover o último elemento de um array e retorná-lo?",
      respostas: [
        "pop()",
        "push()",
        "remove()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do operador 'new' em JavaScript?",
      respostas: [
        "Criar um novo objeto",
        "Executar uma nova função",
        "Criar uma nova variável",
      ],
      correta: 0
    },
  ];
  
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  
  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  

    for (let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
      
      corretas.delete(item)
      if(estaCorreta){
        corretas.add(item)
      }
    mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
  

  quizItem.querySelector('dl').appendChild(dt)
  }

  quizItem.querySelector('dl dt').remove()
  quiz.appendChild(quizItem)
  
  }