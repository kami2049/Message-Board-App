const pg = require('pg');

const pool = new pg.Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'gamer3049',
  port: 5432,
});

pool.query('SELECT * FROM test', (err, res) => {
		console.log(err, res)
		pool.end()
});



  b 