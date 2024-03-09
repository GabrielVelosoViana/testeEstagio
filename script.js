/* Questão 1 Observe o trecho de código abaixo:
int INDICE = 13, SOMA = 0, K = 0;
enquanto K < INDICE faça
{
 K = K + 1;
 SOMA = SOMA + K;
 }
imprimir(SOMA);*/

let INDICE = 13
let SOMA = 0
let K = 0

while (K < INDICE) {
  K = K + 1
  SOMA = SOMA + K
}

console.log(SOMA) //Resposta = 91

/*Questão 2 Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
IMPORTANTE:
Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;*/

function pertenceFibonacci(numero) {
  let fib1 = 0
  let fib2 = 1

  while (fib2 <= numero) {
    if (fib2 === numero) {
      return true // O número pertence à sequência de Fibonacci
    }

    let proximoFib = fib1 + fib2
    fib1 = fib2
    fib2 = proximoFib
  }

  return false // O número não pertence à sequência de Fibonacci
}

// Exemplo de uso
let numeroInformado = 13 // Pode ser alterado para qualquer número desejado
let resultado = pertenceFibonacci(numeroInformado)

if (resultado) {
  console.log(`${numeroInformado} pertence à sequência de Fibonacci.`)
} else {
  console.log(`${numeroInformado} não pertence à sequência de Fibonacci.`)
}

/*Questão 3 Descubra a lógica e complete o próximo elemento:

 a) 1, 3, 5, 7, _9

 b) 2, 4, 8, 16, 32, 64, _128

 c) 0, 1, 4, 9, 16, 25, 36, _49

 d) 4, 16, 36, 64, _100

 e) 1, 1, 2, 3, 5, 8, _13

 f) 2,10, 12, 16, 17, 18, 19, _20 */
 
 /*Questão 4 Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada. Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?

 1- ligaria o primeiro interruptor e aguardaria alguns minutos para aquecer a lâmpada.
 2- Desligaria o primeiro interruptor e ligaria o segundo interruptor.
 3- Entraria na sala onde estão as lâmpadas.

 Com isso conseguia a resposta da seguinte forma:

 Se a lâmpada estiver acesa, então o segundo interruptor controla essa lâmpada.
 Se a lâmpada estiver apagada e ainda estiver quente, então o primeiro interruptor controla essa lâmpada.
 Se a lâmpada estiver apagada e não estiver quente, então o terceiro interruptor controla essa lâmpada.*/

/*Questão 5  Escreva um programa que inverta os caracteres de um string.
IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse; */

function inverterString(original) {
  let stringInvertida = "";

  for (let i = original.length - 1; i >= 0; i--) {
      stringInvertida += original[i];
  }

  return stringInvertida;
}

// Exemplo de uso
let minhaString = "Hello, World!";
let stringInvertida = inverterString(minhaString);

console.log("Original: ", minhaString);
console.log("Invertida:", stringInvertida);
