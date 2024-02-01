/*
Aula 03 - Tipos de variáveis
var: Em qualquer bloco de codigo, vou conseguir utilizar ela.
let: Uma variavel que pode ser utilizada do scopo para frente, ou seja, dentro do bloco. 
const: Uma variavel que o valor nao pode ser alterado.
*/
'use strict';
const curso = "JavaScript";

// Criando uma função para teste
function teste(){
  var name = 'Joaquim';
  if (true) {
    console.log("Dentro do if do teste: " + name);
  }
  console.log("Fora do if do teste: " + name);
}

// Chamando a função

teste()

// Atribuindo um valor para curso ( Para retornar um erro )
curso = "HTML";
// Consoles

console.log("Curso: " + curso)
console.log("Fora do teste: " + name);

