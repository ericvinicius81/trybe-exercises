function hydrate(string) {
  const split = string.split('');
  let total = 0;

  for (index=0; index <= split.length; index +=1) {
    const parse = parseInt(split[index]);
    if (parse > 0) {
      total += parse;
    }
  }

  let copo = 'copo';

  if (total > 1) {
    copo = 'copos';
  }
  return `${total} ${copo} de água`;
};

console.log(hydrate('2 cervejas, 2 vodkas'));

module.exports = hydrate;

