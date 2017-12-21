const mysql = require('mysql')
const schema = mysql.createConnection
const connection = new schema({
	host : '127.0.0.1',
	user : 'root',
	password : '',
	database : 'test'
})
module.exports = connection