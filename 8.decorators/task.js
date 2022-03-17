function cachingDecoratorNew() {
  const hash = {}

  return function wrapper(...args) {

    if (Object.keys(hash).length > 4) delete hash[Object.keys(hash)[0]];

    if (hash[args]) return ('из кэша:' + hash[args]);

    if (!hash[args]) {
      hash[args] = [...args].reduce((acc, item) => acc + item);
      return ('вычисляем:' + hash[args]);
    }
  }
}

function debounceDecoratorNew(f, ms) {
  let isCooldown = false;

  return function wrapper() {

    if (isCooldown) return;
    f.apply(this, null);
    isCooldown = true;
    setTimeout(() => isCooldown = false, ms);
  };
}


function debounceDecorator2(f, ms) {
  let isCooldown = false;
  let count = 1;

  return function wrapper() {
    console.log('Было произведено ' + count++ + ' вызов(а)(ов)');
    
    if (isCooldown) return;
    f.apply(this, null);
    isCooldown = true;
    setTimeout(() => isCooldown = false, ms);
  };
}
