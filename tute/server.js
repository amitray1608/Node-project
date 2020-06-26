const fs = require('fs');
const http = require('http');
const lo = require('lodash');

const server = http.createServer((req, res) => {

    //lodash
    const num = lo.random(0, 20);
    console.log (num);

    const greet = lo.once(() => {
        console.log('YOOOO BITCH');
    });
    // console.log(req.url, req.method);
    greet();
    greet();
    res.setHeader('content-Typre', 'tetx/html');

    let path = './html/';
    switch(req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, (err, data) => {
        if(err) {
            console.log(err);
            res.end();
        } else {
            res.write(data);
            res.end();
        }
    })
});

server.listen(3000, 'localhost', () => {
    console.log('listening for req on port 3000');  
});

