const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fetcher', { useUnifiedTopology: true, useNewUrlParser: true });

let shoeSchema = mongoose.Schema({
  name: String,
  color: String,
  size: String,
  price: Number,
  quantity: Number
});

let Shoe = mongoose.model('Shoe', shoeSchema, 'Shoe');

const save = (data, callback) => {
  const newShoe = new Shoe({
    name: data.name,
    color: data.color,
    size: data.size,
    price: data.price,
    quantity: data.quantity
  });

  newShoe.save((err, result)=> {
    if (err) {
      callback(err)
    } else {
      callback(null, result)
    }
  })
};

const find = (callback) => {
  Shoe.find((err, Shoe) => {
    if (err) return console.error('Error getting production information from database');
    callback(Shoe);
  });
}

module.exports.save = save;
module.exports.find = find;