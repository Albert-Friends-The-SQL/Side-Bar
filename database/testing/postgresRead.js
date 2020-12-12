import http from 'k6/http';
import { sleep } from 'k6';
import { Counter } from "k6/metrics";
import faker from 'https://cdnjs.cloudflare.com/ajax/libs/Faker/3.1.0/faker.min.js';

var myErrorCounter = new Counter("my_error_counter");

export let options = {
  vus: 100,
  duration: '5s'
  // stages: [
  //   { duration: '2m', target: 100 }, // below normal load
  //   { duration: '5m', target: 100 },
  //   { duration: '2m', target: 200 }, // normal load
  //   { duration: '5m', target: 200 },
  //   { duration: '2m', target: 300 }, // around the breaking point
  //   { duration: '5m', target: 300 },
  //   { duration: '2m', target: 400 }, // beyond the breaking point
  //   { duration: '5m', target: 400 },
  //   { duration: '10m', target: 0 }, // scale down. Recovery stage.
  // ],
};



export default function () {
  const randomVariantId = faker.random.number({ min: 1, max: 25000000});

  // READ
  let res = http.get(`http://localhost:3000/api/variants/${randomVariantId}`);
  if (res.status !== 200) {
    myErrorCounter.add(1);
  }
}


  // SINGLE QUERY
  // http.get(`http://localhost:3000/api/tests/single_query/${randomVariantId}`);

  //MULTI QUERY
  // http.get(`http://localhost:3000/api/tests/multi_query/${randomVariantId}`);
  // http.get(`http://localhost:3000/api/tests/multi_query2/${randomVariantId}`);