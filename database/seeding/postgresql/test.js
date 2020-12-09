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
  let row;

  // totalProductVariants

  const write = () => {
    let canWrite = true;


    while (variant_id <= 100 && canWrite) {
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
          curSize += 0.5;
        }
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

// const fileName = path.join(__dirname, '/test.csv');
// const minLineLength = 2
// getLastLine(fileName, minLineLength)
//     .then((lastLine)=> {
//         console.log(lastLine)
//     })
//     .catch((err)=> {
//         console.error(err)
//     })