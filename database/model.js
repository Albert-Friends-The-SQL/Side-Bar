const db = require('./index.js');

const save = (obj, cb) => {
  const str = `INSERT INTO Shoes(color, size, price, quantity, name) \
  VALUE ('${obj.color}' ,'${obj.size}','${obj.price}','${obj.quantity}','${obj.name}')`;

  db.query(str, obj, (err, results)=> {
    if (err) {
      cb(err)
    } else {
      cb(null, results);
    }

  })
}

const getAll = (cb) => {
  const str = `SELECT * FROM Shoes`;
  db.query(str, (err, results) => {
    if (err) {
      cb(err)
    } else {
      cb(null, results);
    }
  })
}
module.exports = {
  save,
  getAll
}