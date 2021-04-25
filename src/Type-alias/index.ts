type Idade = number;

type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: string;
};

type Cores = 'VERMELHO' | 'AZUL' | 'AMARELO' | 'VERDE' | 'ROXO';

const pessoa: Pessoa = {
  nome: 'Paulo',
  idade: 19,
  salario: 1_500,
};

export function setCorPreferida(pessoa: Pessoa, cor: Cores): Pessoa {
  return { ...pessoa, corPreferida: cor };
}

console.log(setCorPreferida(pessoa, 'VERDE'));
