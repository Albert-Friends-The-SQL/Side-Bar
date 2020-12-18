require('newrelic');
const express = require('express');
const app = express();
const compression = require('compression');
const path = require('path');
const PORT = process.env.PORT || 3000;

const database = require('./database');
const postgres_variant = require('./models/postgres_variant.js');
const cass_variant = require('./models/cass_variant.js');

app.use(express.json());
app.use(express.static(path.join(__dirname, './client/dist')));

app.use(compression());

// CREATE
app.post('/api/variants/', (req, res) => {
  postgres_variant.create(res, req.body);
  // cass_variant.create(res, req.body);
});

// READ
app.get('/api/variants/:id', async (req, res) => {
  const id = req.params.id;
  postgres_variant.read(res, id);
  // cass_variant.read(res, id);
});

// UPDATE
app.patch('/api/variants/:id', (req, res) => {
  const id = req.params.id;
  const body = req.body;
  postgres_variant.update(res, id, body);
  // cass_variant.update(res, id, body);
});

// DELETE
app.delete('/api/variants/:id', (req, res) => {
  const id = req.params.id;
  postgres_variant.delete(res, id);
  // cass_variant.delete(res, id);
});

app.listen(PORT, ()=> {
  console.log(`Listening at Port ${PORT}`)
});

