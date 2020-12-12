const database = require('../database');

exports.read = async (res, id) => {
  // SELECT * FROM variants INNER JOIN products on products.id=variants.product_id WHERE variants.id=${id}
  const variantQuery = `SELECT * FROM sdc.variants_by_product_id WHERE variant_id=${id}`;
  const inventoryQuery = `SELECT size, stock FROM sdc.inventory_by_variant_id WHERE variant_id = ${id}`;
  // let variantData = await database.execute(variantQuery);
  const inventoryData = await database.execute(inventoryQuery);

  try {
    variantData.rows[0].inventory = inventoryData.rows;
    res.send(variantData.rows[0]);
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
    INSERT INTO sdc.variants (
      ${columns}
    ) VALUES (
      ${values}
    );
  `;

  database.execute(addVariantQuery)
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
    UPDATE sdc.variants
    SET ${columnsValues}
    WHERE id=${id};
  `;

  console.log(updateVariantQuery);

  database.execute(updateVariantQuery)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => res.status(500).send(err));
}

exports.delete = (res, id) => {
  const deleteQuery = `DELETE FROM sdc.variants WHERE id=${id};`;

  database.execute(deleteQuery)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => res.status(500).send(err));
}