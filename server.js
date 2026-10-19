
const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();
const dbPath = path.join(__dirname, 'db.json');
const router = jsonServer.router(dbPath);
const middlewares = jsonServer.defaults({
  static: path.join(__dirname, 'public')
});

const port = process.env.PORT || 3000;

console.log('Database path:', dbPath);
console.log('Available resources:', Object.keys(router.db.getState()));

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
