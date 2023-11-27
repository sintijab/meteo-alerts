import express, { Request, Response } from 'express';
var cors = require('cors')
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 4000;

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))


// app.use(express.static(path.join(__dirname, './public')));
// res.sendFile(__dirname + '/public/index.html');

// create application/json parser
// var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', (req: Request, res: Response) => {
    res.header('Content-Type', 'application/json');
    res.send(JSON.stringify({ data: 'Success' }));
    // res.json({ data: 'Success'});
})

app.get('/api/:country', (req, res) => {
    const url = req.params.country;
    const fileRes = url.replace('/api', '');
    const filePath = path.join(__dirname, `mocks/${fileRes}`);
    // @ts-ignore
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
})

app.post('/address_lookup', urlencodedParser, (req, res) => {
  const { address } = req.body;
  if (address) {
    if (address.includes('Germany')) { // Google places API
      req.url = "/api/warnings_DE.json";
      req.method = 'GET';
      // @ts-ignore
      app.handle(req, res);
    } else {
      res.statusCode = 400;
      res.end('Bad Request');
    }
  }
});

app.listen(port, () => {  console.log(`Server running at http://localhost:${port}/`) })



