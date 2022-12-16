const mysql = require('mysql')


const con = mysql.createConnection({
    host:'localhost',
    database:'result_pra',
    user:'root',
    password:'root'

})

module.exports = con