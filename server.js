const http      =   require('http');
// the process.env.PORT has been set for in the case that you want to deploy it
// Because most deployment services uses that
const app       =   require('./app')
const port      =   process.env.PORT || 3000;
const server    =   http.createServer(app);
// Morgan logs the incoming requests

console.log(`Server listening on port ${port} :P`)
server.listen(port)