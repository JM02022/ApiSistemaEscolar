const {Client} = require('pg');

async function getConnection(){
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',//USUARIO
    password: '1234',
    database: 'bdColegio'
  });
  await client.connect();
  return client;
}

module.exports = getConnection;
