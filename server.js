const express = require('express');
const app = express();
const path = require('path');
const PORT = 3004;
// const db = require('./database/database.js');
const model = require('./database/model.js');

app.use(express.json());

app.use(express.static(path.join(__dirname, './client/dist')))

app.listen(PORT, ()=> {
  console.log(`Listening at Port ${PORT}`)
})

app.post('/api/sidebar', (req,res)=> {
  model.save(req.body, (err, result)=> {
    if (err) {
      console.log(err);
    } else {
      console.log('Successfully sent data to the database!')
    }
    res.status(200).send(result)
  })

})

app.get('/api/sidebar', (req, res) => {
  model.getAll((err, result)=>{
    res.send(result)
  });


})