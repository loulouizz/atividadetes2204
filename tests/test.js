const {
    adicao,
    subtracao,
    multiplicacao,
    divisao,
    verificaPalindromo,
} = require("./functions");

function testCalculadora() {
    console.log("Testando adição:");
    console.log(adicao(2, 3) === 5); // Deve retornar true
    console.log(adicao(-1, 5) === 4); // Deve retornar true
    
    console.log("Testando subtração:");
    console.log(subtracao(5, 3) === 2); // Deve retornar true
    console.log(subtracao(10, -3) === 13); // Deve retornar true
    
    console.log("Testando multiplicação:");
    console.log(multiplicacao(2, 3) === 6); // Deve retornar true
    console.log(multiplicacao(-4, 5) === -20); // Deve retornar true
    
    console.log("Testando divisão:");
    console.log(divisao(10, 2) === 5); // Deve retornar true
    console.log(divisao(15, -3) === -5); // Deve retornar true
    console.log(() => divisao(8, 0)); // Deve lançar um erro
  }

  function testPalindromo() {
    console.log(verificaPalindromo("radar") === true); // Deve retornar true
    console.log(verificaPalindromo("hello") === false); // Deve retornar true
    console.log(verificaPalindromo("level") === true); // Deve retornar true
  }