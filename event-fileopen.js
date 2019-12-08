var fs = require('fs');

var readStream = fs.createReadStream('./app.js');

/*Write to the console when the file is opened:*/
readStream.on('open', function () {
  console.log('The file is open');
});
