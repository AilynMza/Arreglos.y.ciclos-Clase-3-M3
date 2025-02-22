const frutas = ["piña", "cereza", "uva", "platano", "sandia", "kiwi"];

const cantidadFrutas = {
  piña: 23,
  cereza: 4,
  uva: 15,
  platano: 26,
  sandia: 0,
  kiwi: 101,
};

console.log("USANDO CICLO FOR");
for (let i = 0; i < frutas.length; i++) {
  console.log("FRUTA: " + frutas[i]);
  console.log("CANTIDAD: " + cantidadFrutas[frutas[i]]);
}

console.log("");
console.log("USANDO CICLO WHILE");

let counter = 0;
while (counter < frutas.length) {
  console.log("FRUTA: " + frutas[counter]);
  console.log("CANTIDAD: " + cantidadFrutas[frutas[counter]]);
  counter++;
}
