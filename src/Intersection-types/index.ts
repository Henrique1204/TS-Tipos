type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Fulano = TemNome & TemSobrenome & TemIdade; // Une os tipos.

const fulano: Fulano = {
  nome: 'Paulo',
  sobrenome: 'Souza',
  idade: 19,
};

console.log(fulano);

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'A' | 'D';
type Intersecao = AB & AC & AD; // Irá retornar o valor que se repete me todos, no caso A
