//Dependancies
const express = require('express')


//Server info
const app = express()
const port = 3000




app.listen(port, () => {
	console.log(`Server is listening on port ${port}`)
})