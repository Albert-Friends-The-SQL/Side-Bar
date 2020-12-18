// Postgres

const { Pool, Client } = require('pg');

// const connectionString = 'postgresql://jason:password@54.183.181.200:5432/sdc';
const pool = new Pool({
  user: 'ubuntu',
  host: 'ec2-54-183-181-200.us-west-1.compute.amazonaws.com',
  database: 'sdc',
  password: 'password',
  port: 5432,
});

pool.connect()
  .then(() => {
    console.log('db connected');
  })
  .catch((err) => {
    console.log(err);
  })


// Cassandra
// const cassandra = require('cassandra-driver');

// const client = new cassandra.Client({
//   contactPoints: ['127.0.0.1'],
//   localDataCenter: 'datacenter1',
//   keyspace: 'sdc'
// })
  // .then(() => {
  //   console.log('cass db connected');
  // });

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  },
  // execute: (text, key, callback) => {
  //   return client.execute(text, key, callback)
  // },
}
