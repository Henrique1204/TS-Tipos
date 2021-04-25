type MapStringCallback = (item: string) => string;

function mapStrings(array: string[], callbackfn: MapStringCallback): string[] {
  const novoArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    novoArray.push(callbackfn(array[i]));
  }

  return novoArray;
}

const abc = ['a', 'b', 'c'];

const ABC = mapStrings(abc, (item) => item.toUpperCase());
console.log(ABC);
