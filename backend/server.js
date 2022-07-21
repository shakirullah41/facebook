const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const { readdirSync } = require('fs');

dotenv.config();

app.use(express.json());
app.use(cors());
readdirSync('./routes').map((route) => {
  app.use(`/${route.split('.')[0]}`, require(`./routes/${route}`));
});
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log('Database connect successfully'))
  .catch((err) => console.log(err));
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`app is running at port ${PORT}`);
});
