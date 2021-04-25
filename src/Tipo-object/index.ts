// Objeto por padrão não permite que seja adicionados novos tipos.
const objetoA = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objetoA.chaveA = 'Mudou o valor A';
// objetoA.chaveC = 'Novo valor C'; // Erro

// Para corrigir isso, você deve fazer assim:
const objetoB: {
  chaveA: string;
  readonly chaveB: string; // Impede que o valor seja alterado.
  chaveC?: string; // Criando valor opcional.
  [key: string]: unknown; // "index assignature" Permite que tu adicione novos valores quaisquer que sejam.
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objetoB.chaveC = 'Novo valor C';
objetoB.chaveD = 'Novo valor D com tipo string';
objetoB.chaveE = 20;
