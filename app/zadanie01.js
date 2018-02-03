//Twój kod
const fs = require('fs');

fs.readFile('./data/zadanie01/input.json', 'utf8', (err,data) => {
  if(err === null) {
     const sum = JSON.parse(data).reduce((a, b) => a += b)
    fs.writeFile('./data/zadanie01/sum.txt', sum, err => {
      if (err === null) {
        console.log('wynik wynosi', sum);
      } else {
        console.log('nie udało się zapisać pliku');
      }
    });
  } else {
    console.log('nie udało się odczytać pliku', err);
  }
});



