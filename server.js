const http = require('http'),
  fs = require('fs');

http.createServer((req, res) => {
  fs.readFile('./dist/index.html', (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end(err);
      return
    }
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(data)
  });
}).listen(8000)
