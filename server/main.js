const express = require('express');
let server = express();

server.get('/', (req, res) => res.send('hello world'));

server.listen(3000, function () {
  console.log('Сервер запущен');
})
