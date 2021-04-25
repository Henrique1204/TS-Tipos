function addOrConcat(a: number | string, b: number | string): number | string {
  // Typescript não deixa você usar + em valores que não são number, por isso é preciso testar antes.
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}

console.log(addOrConcat('10', '20'));
