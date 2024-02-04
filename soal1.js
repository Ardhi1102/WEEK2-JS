const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Masukkan bilangan genap: ', (input) => {
  const x = parseFloat(input);

  if (isNaN(x) || x < 0) {
    console.log('Error: Tidak bisa input bilangan negatif');
  } else if (x % 2 !== 0) {
    console.log('Error: Tidak bisa input bilangan ganjil');
  } else {
    const result = Math.sqrt(x);
    console.log(`Akar pangkat 2 dari ${x} adalah: ${result}`);
  }

  rl.close();
});
