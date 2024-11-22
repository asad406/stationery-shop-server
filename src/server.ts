import app from './app';
const port = 5000;

async function server() {
  app.listen(port, () => {
    console.log('hello world');
  });
}

server();
