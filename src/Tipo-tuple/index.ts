// Readonly previne que a tupla seja modificada.
const dadosCliente1: readonly [number, string] = [1, 'Opa'];
const dadosCliente2: [number, string, string] = [1, 'Opa', 'Tudo certo?'];
const dadosCliente3: [number, string, string?] = [1, 'Opa'];
const dadosCliente4: [number, string, ...string[]] = [1, 'Opa', 'opa2', 'opa3'];

// dadosCliente1[1] = 'Blz?'; // Não é possível alterar valores de uma tupla com readonly
// dadosCliente1.pop(); // Com isso você consegue modificar a tupla, porém é errado.
console.log(dadosCliente1);

console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);
