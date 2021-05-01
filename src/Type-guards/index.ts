function add(a: unknown, b: unknown): number | string {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}

console.log(add(1, 2));

type Pessoa = { tipo: 'pessoa'; nome: string };
type Animal = { tipo: 'animal'; raca: string };
type PessoaOuAnimal = Pessoa | Animal;

export class Aluno implements Pessoa {
  public tipo: 'pessoa' = 'pessoa';

  constructor(public nome: string) {}
}

export class Cachorro implements Animal {
  public tipo: 'animal' = 'animal';

  constructor(public raca: string) {}
}

function mostraNome(obj: PessoaOuAnimal): void {
  // if ('nome' in obj) console.log(obj.nome); // Type guard checando se existe a propriedade dentro do objeto.
  // if (obj instanceof Aluno) console.log(obj.nome); // Type guard checando se o obj é uma instância da classe Aluno.

  switch (obj.tipo) {
    case 'pessoa':
      console.log(obj.nome);
      break;
    default:
      console.log('Não tem nome.');
      break;
  }
}

mostraNome(new Aluno('Paulo'));
