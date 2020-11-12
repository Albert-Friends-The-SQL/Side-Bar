const express = require('express');
const app = express();
const path = require('path');
const PORT = 3002;

app.use(express.static(path.join(__dirname, './client/dist')))

app.listen(PORT, ()=> {
  console.log(`Listening at Port ${PORT}`)
})