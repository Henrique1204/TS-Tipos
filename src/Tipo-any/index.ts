// Any é um tipo que aceita qualquer coisa, não é recomendado usar, use só em caso extremo.
function mostrarMsg(msg: any) {
  return msg;
}

console.log(mostrarMsg('Olá'));
console.log(mostrarMsg([1, 2, 3]));
