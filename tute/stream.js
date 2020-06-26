const fs = require('fs');

const readStream = fs.createReadStream('./docs/text.txt');
readStream.on('data', (chunk) => {
    console.log(chunk);
});