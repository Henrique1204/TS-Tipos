type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'Titulo',
  texto: 'Texto',
  // data: new Date(),
};

// Caso o valor de data seja undefined ou null, retorna o valor depois de ??
console.log(documento.data?.toDateString() ?? 'Ixi, não tem valor');
