import express from 'express';

import router from "./router";

const app: express.Express = express();
const PORT = process.env.PORT || 5050;

//routing
app.use(router);

 // lancer l'appli
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
  });