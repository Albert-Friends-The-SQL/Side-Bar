import http from 'k6/http';
import { sleep } from 'k6';
import { Counter } from "k6/metrics";
import faker from 'https://cdnjs.cloudflare.com/ajax/libs/Faker/3.1.0/faker.min.js';

var myErrorCounter = new Counter("my_error_counter");

export let options = {
  stages: [
    { duration: "10s", target: 500 },
  ],
  thresholds: {
    http_req_duration: ['p(99)<1500'], // 99% of requests must complete below 1.5s
  },
};



export default function () {
  const randomVariantId = faker.random.number({ min: 1, max: 10000000});

  // READ
  let res = http.get(`http://localhost:3000/api/variants/${randomVariantId}`);
  if (res.status !== 200) {
    myErrorCounter.add(1);
  }
  sleep(1);
}


  // SINGLE QUERY
  // http.get(`http://localhost:3000/api/tests/single_query/${randomVariantId}`);

  //MULTI QUERY
  // http.get(`http://localhost:3000/api/tests/multi_query/${randomVariantId}`);
  // http.get(`http://localhost:3000/api/tests/multi_query2/${randomVariantId}`);