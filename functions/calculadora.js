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