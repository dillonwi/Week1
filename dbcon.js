var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : 'cs290_dillonwi',
  password        : '5804',
  database        : 'cs290_dillonwi'
});

module.exports.pool = pool;
