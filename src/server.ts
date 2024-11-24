import mongoose from 'mongoose';
import app from './app';
import config from './config';
const port = 5000;

async function server() {
  try {
    //Connect mongoose and mongoDB
    await mongoose.connect(config.database_url as string)
    app.listen(port, () => {
      console.log(`App is listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

server();
