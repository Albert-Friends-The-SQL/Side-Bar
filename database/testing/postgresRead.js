import http from 'k6/http';
import { sleep } from 'k6';
import faker from 'https://cdnjs.cloudflare.com/ajax/libs/Faker/3.1.0/faker.min.js';

export let options = {
  vus: 100,
  duration: '30s'
};



export default function () {
  const randomVariantId = faker.random.number({ min: 1, max: 25000000});

  // READ
  http.get(`http://localhost:3000/api/variants/${randomVariantId}`);
  // SINGLE QUERY
  // http.get(`http://localhost:3000/api/tests/single_query/${randomVariantId}`);

  //MULTI QUERY
  // http.get(`http://localhost:3000/api/tests/multi_query/${randomVariantId}`);
  // http.get(`http://localhost:3000/api/tests/multi_query2/${randomVariantId}`);

}
