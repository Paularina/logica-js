var numero = parseInt(prompt("Digite um número inteiro:"));

tentativa = 0;
while (tentativa <= 3){
  tentativa ++
  var numero = parseInt(prompt("Digite um número inteiro:"));

  if (numero % 2 === 0 && numero > 0 && numero < 100) {
    alert("O número atende aos critérios.");
  } else {
    alert("O número não atende aos critérios.");
  }
}


