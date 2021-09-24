// We use pg and POOL for retreiving data using ctual postgresql queries.

// var express=require()
const Pool = require("pg").Pool;

const pool = new Pool({
  user: "icarus",
  host: "localhost",
  database: "icarus",
  password: "tiger",
  port: 5432,
});

module.exports = pool;
