import express from 'express';

import router from "./router";
import mongoose from 'mongoose';
import cookieparser from 'cookie-parser';

const app: express.Express = express();
const PORT = process.env.PORT || 5050;

// setup view engine
app.set('views', 'views');
app.set('view engine', 'pug');

// on utilise le middleware cookie-parser
app.use(cookieparser());

//routing
app.use(router);

async function run () {
  // connexion à la BD
  await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/hadj',{useNewUrlParser: true});
  // lancer l'appli
  app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
  });
}

run();