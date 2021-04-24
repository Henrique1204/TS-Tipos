/* eslint-disable */

// Tipos básicos (aqui ocorre inferência de tipos)
let nome: string = 'Paulo'; // Qualquer tipo de string: '' | "" | ``
let idade: number = 19; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let adulto: boolean = true; // true ou false
let simbolo: symbol = Symbol('qualquer-symbol'); // symbol
// let big: bigint = 10n; // bigint

// Arrays
let arrayDoNumeros: Array<number> = [1, 2, 3];
let arrayDoString: Array<string> = ['1', '2', '3'];
let arrayDoBooleanos: boolean[] = [false, true];

// Object
let pessoa: { nome: string, idade: number, adulto?: boolean } = {
    idade: 19,
    nome: 'Paulo'
};

// Funções
function soma(x: number, y: number): number {
    return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;
