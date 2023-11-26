const http = require('node:http');
// const warnings_de_short = require('./mocks/warnings_DE.json');

const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 4000;
const server = http.createServer((req, res) => {
    res.on('error', err => {
        console.error(err);
    });

    const url = req.url;
    if (url.includes('/api')) {
      const fileRes = url.replace('/api', '');
      const filePath = path.join(__dirname, `mocks/${fileRes}`);
      fs.readFile(filePath, { encoding: 'utf-8' }, (err, data) => {
        if (!err) {
          res.writeHead(200, {'Content-Type': 'application/json'});
          res.write(data);
          res.end();
        } else {
          console.log(err);
          res.statusCode = 400;
          res.end('Bad Request');
        }
      });
    }
    if (url === '/') {
      res.end(JSON.stringify({
        data: 'Success',
      }));
    }
  });
  
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });