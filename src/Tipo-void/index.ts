// Tipo void é usada em funções sem retornos.
function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

semRetorno('Paulo', 'Foi', 'na', 'feira');
