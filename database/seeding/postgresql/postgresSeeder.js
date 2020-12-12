const fs = require('fs');
const path = require('path');
const faker = require('faker');
const { argv } = require('yargs')

const lines = argv.lines || 100
const filename = argv.output || 'test.csv'
const stream = fs.createWriteStream(filename)

const { internet, random, commerce, date, company, image, lorem } = faker;

const totalUniqueProducts = 10000000; //10000000
const avgProductVariants = 2.5;
const totalProductVariants = totalUniqueProducts * avgProductVariants;

const generateProduct = () => {
  const ratings = random.number({ min: 1, max: 1000});
  const category_1 = lorem.word()
  const category_2 = lorem.word()
  //simulate 25% of products are unisex
  const unisex = random.number({ min: 1, max: 4}) === 1

  return `${ratings},${category_1},${category_2},${unisex}\n`;
}

const generateVariant = () => {
  const product_id = random.number({ min: 1, max: totalUniqueProducts});
  const variant_name = lorem.words();
  const reg_price = random.number({ min: 100, max: 200});
  const color_1 = commerce.color();
  const color_2 = commerce.color();
  const color_3 = commerce.color();

  return `${product_id},${variant_name},${reg_price},${color_1},${color_2},${color_3}\n`;
}

const writeInventoryCSV = () => {
  // iterates through each variant_id (1 to 25,000,000)
  // performs a loop that adds shoe sizes (6 to 14ish)
  // while adding shoe sizes, also add random stock amount
  let variant_id = 1;
  let curSize = 6;
  const smallestSize = 6;
  const inventoryHeader = `variant_id,size,stock\n`;
  const encoding = 'utf-8';
  const done = () => {
    stream.end()
  }

  // totalProductVariants

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
  let i = lines;
  const write = () => {
    let canWrite = true;
    do {
      let row = generatorFunc();
      i--;
      if (i === 0) {
        console.log(row);
        writeStream.write(row, encoding, done);
      } else {
        canWrite = writeStream.write(row, encoding);
      }
      //check if i === 0 so we would write and call `done`
      //else call write and continue looping
    } while(i > 0 && canWrite)
    if(i > 0 && !canWrite){
      //our buffer for stream filled and need to wait for drain
      // Write some more once it drains.
      writeStream.once('drain', write);
    }
  }
  //initiate our writing function
  write();
}

const productsHeader = `ratings,category_1,category_2,unisex\n`
const variantsHeader = `product_id,variant_name,reg_price,color_1,color_2,color_3\n`;


//write our `header` line before we invoke the loop
// stream.write(productsHeader, 'utf-8');
// writeCSV(stream, 'utf-8', () => {
//   stream.end()
// }, generateProduct)

// stream.write(variantsHeader, 'utf-8');
// writeCSV(stream, 'utf-8', () => {
//   stream.end()
// }, generateVariant)


writeInventoryCSV();



// LAST LINE CHECKER
// const readline = require('readline');
// const Stream = require('stream');
// const getLastLine = (fileName, minLength) => {
//   let inStream = fs.createReadStream(fileName);
//   let outStream = new Stream;
//   return new Promise((resolve, reject)=> {
//       let rl = readline.createInterface(inStream, outStream);

//       let lastLine = '';
//       rl.on('line', function (line) {
//           if (line.length >= minLength) {
//               lastLine = line;
//           }
//       });

//       rl.on('error', reject)

//       rl.on('close', function () {
//           resolve(lastLine)
//       });
//   })
// }

// const fileName = path.join(__dirname, '/inventory.csv');
// const minLineLength = 1
// getLastLine(fileName, 1)
//     .then((lastLine)=> {
//         console.log(lastLine)
//     })
//     .catch((err)=> {
//         console.error(err)
//     })