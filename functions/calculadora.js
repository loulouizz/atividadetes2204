function somar (x,y){
    return x+y;
}

function subtrair (x,y){
    return x-y;
}

function multiplicar (x,y){
    return x*y;
}

function dividir (x,y){
    return x/y;
}

function verificaPalindromo(str) {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
  }

  function celsiusParaFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  function fahrenheitParaCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
  }

  function validaCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, ''); 
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false; 
    
    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    
    let resto = soma % 11;
    let digitoVerificador1 = resto < 2 ? 0 : 11 - resto;
    
    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    
    resto = soma % 11;
    let digitoVerificador2 = resto < 2 ? 0 : 11 - resto;
    
    return parseInt(cpf.charAt(9)) === digitoVerificador1 && parseInt(cpf.charAt(10)) === digitoVerificador2;
  }

  function verificaPrimo(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    
    if (num % 2 === 0 || num % 3 === 0) return false;
    
    let divisor = 5;
    while (divisor * divisor <= num) {
      if (num % divisor === 0 || num % (divisor + 2) === 0) return false;
      divisor += 6;
    }
    
    return true;
  }

  function ordenaLista(lista, ordem) {
    if (ordem === "crescente") {
      return lista.sort((a, b) => a - b);
    } else if (ordem === "decrescente") {
      return lista.sort((a, b) => b - a);
    } else {
      throw new Error("A ordem deve ser 'crescente' ou 'decrescente'.");
    }
  }