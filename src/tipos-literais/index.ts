let x = 10; // eslint-disable-line
x = 100; // ele permite a troca de valores, desde que seja number
// x = 'Paulo' // Erro

const y = 100; // Tipo leteral, o tipo é 100 numérico, um subtipo de number.

// Dessa forma você também define um tipo leteral.
let z: 20 = 20; // eslint-disable-line
// z = 100; // Erro

// Outra forma de criar um tipo literal
let n = 30 as const // eslint-disable-line

console.log(x, y, z);

const pessoa2 = {
  nome: 'Paulo' as const, // Impede que o valor seja trocado
  sobrenome: 'Souza',
};

// pessoa2.nome = 'Henrique'; // Erro
console.log(pessoa2);

// Alternativa ao enum, dessa forma o Typescript proíbe que seja colocado um valor diferente dos definidos
function escolhaCor(cor: 'VERMELHO' | 'AZUL' | 'VERDE'): void {
  console.log(cor);
}

escolhaCor('VERMELHO');
// escolhaCor('AMARELO'); // Erro
