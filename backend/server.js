const express = require('express');
const app = express();
const { readdirSync } = require('fs');

readdirSync('./routes').map((route) => {
  app.use(`/${route.split('.')[0]}`, require(`./routes/${route}`));
});
app.listen(4000, () => {
  console.log('app is running at port 4000');
});
