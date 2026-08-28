const names = ['Ahmed', 'Mohamed', "Sara","May"];

names.forEach(x=> console.log(x));

const newnames = names.map(x=> `Hello: ${x}`);
console.log(newnames);

const filterednames = names.filter(x=> names.length <= 4);

console.log(filterednames);