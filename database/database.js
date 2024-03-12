const { createPool } = require('mysql')

const pool = createPool({
    host : 'localhost',
    user : 'root',
    password : 'mysqlpassword',
    database : 'trello',
    connectionLimit : 10
});

// pool.query(`select * from boards`, (err, result, fields) => {
//     if(err){
//         return console.log(err);
//     }
//     return console.log(result);
// })

module.exports = pool;