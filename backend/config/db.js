const mysql = require('mysql')
const db = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database:"stock_portfolio_database" 
})

module.exports = db;