const express = require('express');
const app = express();
const compression = require('compression');
const path = require('path');
const PORT = 3000;

const database = require('./database');

app.use(express.json());
app.use(express.static(path.join(__dirname, './client/dist')));

// app.use(compression());

// CREATE
app.post('/api/tests/variants/', (req, res) => {
  const body = req.body;
  let columns = '';
  let values = '';

  // Loop through properties in body obj
  for (const property in body) {
    const value = body[property];

    columns += property + ",";
    if (typeof value === 'string') {
      values += `'${value}',`;
    } else {
      values += `${value},`;
    }
  }

  // Removing hanging ','
  columns = columns.slice(0, -1);
  values = values.slice(0, -1);

  const addVariantQuery = `
    INSERT INTO test_variants (
      ${columns}
    ) VALUES (
      ${values}
    );
  `;

  database.query(addVariantQuery)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => res.status(500).send(err));
});

// READ
app.get('/api/variants/:id', async (req, res) => {
  const id = req.params.id; // 25000000
  const variantQuery = `SELECT * FROM variants WHERE id = ${id}`;
  const inventoryQuery = `SELECT * FROM inventory WHERE variant_id = ${id}`;
  const variantData = await database.query(variantQuery);
  const inventoryData = await database.query(inventoryQuery);

  try {
    res.send([variantData.rows, inventoryData.rows]);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get('/api/tests/variants/:id', async (req, res) => {
  const id = req.params.id; // 25000000
  const variantQuery = `SELECT * FROM test_variants WHERE id = ${id}`;
  const inventoryQuery = `SELECT * FROM test_inventory WHERE variant_id = ${id}`;
  const variantData = await database.query(variantQuery);
  const inventoryData = await database.query(inventoryQuery);

  try {
    res.send([variantData.rows, inventoryData.rows]);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get('/api/tests/multi_query1/:id', async (req, res) => {
  const id = req.params.id; // 25000000
  const variantQuery = `SELECT * FROM variants INNER JOIN products ON products.id=variants.product_id WHERE variants.id=${id};`;
  const variantData = await database.query(variantQuery);

  try {
    res.send(variantData.rows);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get('/api/tests/multi_query2/:id', async (req, res) => {
  const id = req.params.id; // 25000000
  const variantQuery = `SELECT * FROM inventory WHERE variant_id=${id};`;
  const variantData = await database.query(variantQuery);

  // SELECT * FROM inventory WHERE variants.id=

  try {
    res.send(variantData.rows);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get('/api/tests/single_query/:id', async (req, res) => {
  const id = req.params.id; // 25000000
  const variantQuery = `SELECT * FROM variants INNER JOIN products ON products.id=variants.product_id INNER JOIN inventory ON inventory.variant_id=variants.id WHERE variants.id=${id};`;
  const variantData = await database.query(variantQuery);

  try {
    res.send(variantData.rows);
  } catch (err) {
    res.status(500).send(err);
  }
});


// UPDATE
app.patch('/api/tests/variants/:id', (req, res) => {
  const id = req.params.id
  const body = req.body;
  let columnsValues = '';

  // Loop through properties in body obj
  for (const property in body) {
    const value = body[property];

    if (typeof value === 'string') {
      columnsValues += `${property} = '${value}',`;
    } else {
      columnsValues += `${property} = ${value},`;
    }
  }

  // Removing hanging ','
  columnsValues = columnsValues.slice(0, -1);

  const updateVariantQuery = `
    UPDATE test_variants
    SET ${columnsValues}
    WHERE id=${id};
  `;

  console.log(updateVariantQuery);

  database.query(updateVariantQuery)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => res.status(500).send(err));
});

// DELETE
app.delete('/api/tests/variants/:id', (req, res) => {
  const id = req.params.id
  const deleteQuery = `DELETE FROM test_variants WHERE id=${id};`;

  database.query(deleteQuery)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => res.status(500).send(err));
});

app.listen(PORT, ()=> {
  console.log(`Listening at Port ${PORT}`)
});

