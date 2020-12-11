const database = require('../database');

exports.read = async (res, id) => {
  const variantQuery = `
  SELECT
    variant_name,
    reg_price,
    color_1,
    color_2,
    color_3,
    products.ratings,
    products.category_1,
    products.category_2,
    products.unisex
  FROM variants INNER JOIN products on products.id=variants.product_id WHERE variants.id = ${id} LIMIT 1`;
  // const variantQuery = `
  //   SELECT
  //     *
  //   FROM variants INNER JOIN products ON products.id=variants.product_id INNER JOIN inventory ON inventory.variant_id=variants.id WHERE variants.id=${id};`;
  const inventoryQuery = `SELECT size, stock FROM inventory WHERE variant_id = ${id} LIMIT 1`;
  let variantData = await database.query(variantQuery);
  const inventoryData = await database.query(inventoryQuery);


  try {
    variantData.rows[0].inventory = inventoryData.rows;
    res.send(variantData.rows);
  } catch {
    res.status(404).send('Variant not found');
  }
}

exports.create = (res, body) => {
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
}

exports.update = (res, id, body) => {
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
}

exports.delete = (res, id) => {
  const deleteQuery = `DELETE FROM test_variants WHERE id=${id};`;

  database.query(deleteQuery)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => res.status(500).send(err));
}