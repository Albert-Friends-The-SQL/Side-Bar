import http from 'k6/http';
import { sleep, group } from 'k6';
import faker from 'https://cdnjs.cloudflare.com/ajax/libs/Faker/3.1.0/faker.min.js';

export let options = {
  vus: 10,
  duration: '30s'
};

export default function () {
  const randomVariantId = faker.random.number({ min: 1, max: 25000000});

  // SINGLE QUERY
  group('Single Query', () => {
    http.get(`http://localhost:3000/api/tests/single_query/${randomVariantId}`);
  });
  // http.get(`http://localhost:3000/api/tests/single_query/${randomVariantId}`);

  //MULTI QUERY
  group('Multi Query', () => {
    http.get(`http://localhost:3000/api/tests/multi_query1/${randomVariantId}`);
     http.get(`http://localhost:3000/api/tests/multi_query2/${randomVariantId}`);
  });


}
