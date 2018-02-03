//Twój kod

const fs = require('fs');

fs.readdir('./data/zadanie02/', (err, data) => {
  if (err === null) {
    console.log('list plików', data);
    data.forEach((file) => {
      fs.readFile(`./data/zadanie02/${file}`, 'utf8', (err, data) => {
        if (err === null) {
          console.log('zawartość pliku to', data);
        } else {
          console.log('nie udalo się odczytać pliku');
        }
      })
    });
  } else {
    console.log('nie udało się zlistować katalogu');
  }
});