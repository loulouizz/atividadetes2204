const {
    adicao,
    subtracao,
    multiplicacao,
    divisao,
    verificaPalindromo,
    celsiusParaFahrenheit,
    fahrenheitParaCelsius,
    validaCPF,
    verificaPrimo,
    ordenaLista
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

  function testConversorTemperatura() {
    console.log(celsiusParaFahrenheit(0) === 32); // Deve retornar true
    console.log(celsiusParaFahrenheit(100) === 212); // Deve retornar true
    console.log(fahrenheitParaCelsius(32) === 0); // Deve retornar true
    console.log(fahrenheitParaCelsius(212) === 100); // Deve retornar true
  }

  function testValidadorCPF() {
    console.log(validaCPF("529.982.247-25") === true); // CPF válido
    console.log(validaCPF("111.111.111-11") === false); // CPF inválido (todos os números iguais)
    console.log(validaCPF("123.456.789-09") === false); // CPF inválido
    console.log(validaCPF("123.456.789-00") === false); // CPF inválido (dígitos verificadores incorretos)
  }

  function testPrimo() {
    console.log(verificaPrimo(5) === true); // Deve retornar true
    console.log(verificaPrimo(16) === false); // Deve retornar true
    console.log(verificaPrimo(23) === true); // Deve retornar true
  }

  function testOrdenadorLista() {
    console.log(JSON.stringify(ordenaLista([3, 1, 2], "crescente")) === JSON.stringify([1, 2, 3])); // Deve retornar true
    console.log(JSON.stringify(ordenaLista([5, 8, 2], "decrescente")) === JSON.stringify([8, 5, 2])); // Deve retornar true
  }