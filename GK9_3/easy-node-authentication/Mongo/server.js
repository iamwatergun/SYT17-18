const express = require('express')
const bodyParser= require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.listen(3000, function() {
  console.log('listening on 3000')
})

app.get('/', (req, res) => {
   res.sendFile ('D:/Schule/5. Jahrgang/SYT/Borkoli/Cloud-Datenmanagement/easy-node-authentication/Mongo' + '/index.html')
})



app.post('/quotes', (req, res) => {
  console.log(req.body)
})