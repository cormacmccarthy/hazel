const http = require('http');
const hazel = require('./lib/server');

const port = process.env.PORT || 8000;

http.createServer((req, res) => {
	hazel(req, res)
}).listen(port);

console.log(`Server listening on port ${port}`);