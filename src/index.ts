import express from 'express';

const app: express.Express = express();
const PORT = process.env.PORT || 5050;


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
  });