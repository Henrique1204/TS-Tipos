const coresObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
  roxo: 'purple',
};

type CoresObj = typeof coresObj; // Define o tipo igual ao objeto.
type CoresObjKey = keyof CoresObj; // Define o tipo union com as chaves do tipo.

function traduzirCor(cor: CoresObjKey, cores: CoresObj) {
  return cores[cor];
}

console.log(traduzirCor('verde', coresObj));
