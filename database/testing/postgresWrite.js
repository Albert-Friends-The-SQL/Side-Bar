import http from 'k6/http';
import { sleep } from 'k6';
import faker from 'https://cdnjs.cloudflare.com/ajax/libs/Faker/3.1.0/faker.min.js';

export let options = {
  vus: 10,
  duration: '30s'
};



export default function () {
  const product_id = faker.random.number({ min: 1, max: 10000000});
  const variant_name = faker.lorem.words();
  const reg_price = faker.random.number({ min: 100, max: 200});
  const color_1 = faker.commerce.color();
  const color_2 = faker.commerce.color();
  const color_3 = faker.commerce.color();

  const url = 'http://localhost:3000/api/variants/';
  let headers = { 'Content-Type': 'application/json' };

  let data = {
    product_id,
    variant_name,
    reg_price,
    color_1,
    color_2,
    color_3
  }
  let res = http.post(url, JSON.stringify(data), { headers });
  headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
  res = http.post(url, data, { headers });
}
