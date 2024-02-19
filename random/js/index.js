var a = prompt("istalgan raqamni kiriting");

var b = Math.random();

b = Math.floor(10 * b);
var d = 0;

while (b != a) {
  console.log(b);
  d++;
  b = Math.random();
  b = Math.floor(10 * b);
}

alert(
  `men sizga random orqali ${b} sonini chiqarib berdim. ${d} marta urinishda`
);
