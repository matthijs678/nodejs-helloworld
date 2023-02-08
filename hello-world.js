const log = require('pretty-log');
const http = require('node:http');

const port = 80;
const hostname = "127.0.0.1";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  log.success(`Server running at http://${hostname}:${port}/`);
});
