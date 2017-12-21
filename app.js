const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const config = require('./config/db')
const port = process.env.port || 3000

const app = express()
//connect to database
config.connect((err)=>{
	if(err)
		console.log('Something wrong with mysql database connection')
	//config.end()
})

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

//register routes
const user = require('./app/routes/route')(app, express)
app.use('/', user)

app.listen(port,()=>{
	console.log('Running on port ' + port)
})