const fs = require('fs');
const path = require('path');
const faker = require('faker');
const { argv } = require('yargs')

const filename = argv.output || 'test.csv'
const stream = fs.createWriteStream(filename)

const { internet, random, commerce, date, company, image, lorem } = faker;

const totalUniqueProducts = 100; //10000000
const avgProductVariants = 2.5;
const totalProductVariants = totalUniqueProducts * avgProductVariants;

const generateVariant = (id) => {
  const variant_id = id;
  const product_id = random.number({ min: 1, max: totalUniqueProducts});
  const variant_name = lorem.words();
  const ratings = random.number({ min: 1, max: 1000});
  const category_1 = lorem.word();
  const category_2 = lorem.word();
  //simulate 25% of products are unisex
  const unisex = random.number({ min: 1, max: 4}) === 1
  const reg_price = random.number({ min: 100, max: 200});
  const color_1 = commerce.color();
  const color_2 = commerce.color();
  const color_3 = commerce.color();

  return `${variant_id},${product_id},${variant_name},${ratings},${category_1},${category_2},${unisex},${reg_price},${color_1},${color_2},${color_3}\n`;
}

const writeInventoryCSV = () => {
  let variant_id = 1;
  let curSize = 6;
  const smallestSize = 6;
  const inventoryHeader = `variant_id,size,stock\n`;
  const encoding = 'utf-8';
  const done = () => {
    stream.end()
  }

  const write = () => {
    let canWrite = true;
    let row;

    while (variant_id <= totalProductVariants && canWrite) {
      // let smallestSize = 6;
      let largestSize = random.number({ min: 13, max: 15});
      curSize = smallestSize;

      while (curSize <= largestSize && canWrite) {
        // simulate 25% of sizes are 0
        const stock = random.number({ min: 0, max: 3});
        row = `${variant_id},${curSize},${stock}\n`

        if (variant_id === totalProductVariants && curSize === largestSize) {
          stream.write(row, encoding, done);
        } else {
          canWrite = stream.write(row, encoding);
        }
        curSize += 0.5;
      }

      variant_id++;
    }
    if (variant_id < totalProductVariants) {
      stream.once('drain', write);
    }
    console.log(row);
  }


  stream.write(inventoryHeader, encoding);
  write();
}

const writeCSV = (writeStream, encoding, done, generatorFunc) => {
  let i = totalProductVariants;
  const write = () => {
    let canWrite = true;
    do {
      let row = generatorFunc(i);
      i--;
      if (i === 0) {
        console.log(row);
        writeStream.write(row, encoding, done);
      } else {
        canWrite = writeStream.write(row, encoding);
      }
    } while(i > 0 && canWrite)
    if(i > 0 && !canWrite){
      writeStream.once('drain', write);
    }
  }
  write();
}



const variantsHeader = `variant_id,product_id,variant_name,ratings,category_1,category_2,unisex,reg_price,color_1,color_2,color_3\n`;

// stream.write(variantsHeader, 'utf-8');
// writeCSV(stream, 'utf-8', () => {
//   stream.end()
// }, generateVariant)


writeInventoryCSV();

