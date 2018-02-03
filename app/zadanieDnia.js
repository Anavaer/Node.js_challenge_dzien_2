//Twój kod
const fs = require('fs');

function changeFiles(path) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err === null) {
      const changed = [...data].map((letter, i) => {
        if (i % 2 === 0) {
          return letter.toUpperCase();
        }
        return letter;
      }).join('');
      console.log(changed);
      fs.writeFile(path, changed, err => {
        if (err === null) {
          console.log('zapisano plik');
        } else {
          console.log('nie udało się zapisać pliku');
        }
      })
    } else {
      console.log('nie udało się odczytać pliku');
    }
  })
}

changeFiles(process.argv[2]);