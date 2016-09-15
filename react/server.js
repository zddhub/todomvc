var express = require('express')
var app = express()

var port = 3000

app.use(express.static('./'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.listen(port, () => {
  console.info("==> 🌎  Listening on port %s. Open http://localhost:%s/ in your browser.", port, port)
})
