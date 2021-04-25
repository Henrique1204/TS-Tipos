// Fromas de criar um array - Array<T> || T[]
function multiplicarNumeros(...args: Array<number>): number {
  return args.reduce((a, b) => a * b, 1);
}

console.log(multiplicarNumeros(1, 2, 3, 4));

function concatenarString(...args: string[]): string {
  return args.join('');
}

console.log(concatenarString('Paulo', 'foi', 'na', 'feira'));

function transformarMaiusculo(...args: string[]): string[] {
  return args.map((arg) => arg.toUpperCase());
}

console.log(transformarMaiusculo('a', 'b', 'c'));
