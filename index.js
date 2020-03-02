const readline = require('readline');
var fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


console.log("Bloco 1")
rl.question("Numero da Newsletter", function(n) {
    fs.writeFile(`${n}.html`, 'Learn Node FS module', function (err) {
      if (err) throw err;
      console.log('File is created successfully.');
    });
    rl.close();
});
