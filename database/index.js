// Postgres

const { Pool } = require('pg');
const pool = new Pool({
  user: 'jason',
  password: 'password',
  host: 'localhost',
  database: 'sdc',
  port: 5432,
});

pool.connect()
  .then(() => {
    console.log('db connected');
  });


// Cassandra
const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: ['127.0.0.1'],
  localDataCenter: 'datacenter1',
  keyspace: 'sdc'
})
  // .then(() => {
  //   console.log('cass db connected');
  // });

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  },
  execute: (text, key, callback) => {
    return client.execute(text, key, callback)
  },
}
