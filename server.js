const http = require('http');
// the process.env.PORT has been set for in the case that you want to deploy it
// Because most deployment services uses that
const app = require('./app')
const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(3000)