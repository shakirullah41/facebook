const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
const { readdirSync } = require('fs');

dotenv.config();
app.use(cors());
readdirSync('./routes').map((route) => {
  app.use(`/${route.split('.')[0]}`, require(`./routes/${route}`));
});
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`app is running at port ${PORT}`);
});
