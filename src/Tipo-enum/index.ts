// Inicialmente ele preenche os valores com 0, 1, 2.
enum Cores {
  VERMELHO,
  AZUL,
  AMARELO,
}

// Porém pode trocar os valores manualmente.
enum Cores {
  ROXO = 'ROXO',
  VERDE = 20, // Se tiver uma string antes do campo, ele não consegue definir o valor automaticamente, você precisa definir manualmente
  ROSA,
}

// No caso de ter dois enum com o mesmo nome, ele une os dois em um só.
console.log(Cores);

function escolhaCor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaCor(Cores.ROXO); // Porém Typescript não impede que outors valores de fora do enum sejam usados na função.
