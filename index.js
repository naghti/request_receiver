const express = require("express");
const cors = require('cors')
const https = require("https")
const app = express()
const fs = require('fs')
const path = require('path')
const PORT = process.env.PORT || 5000

app.use(cors());
app.use(express.json())
app.set('trust proxy', true)
app.use('/', f)

function f (req, res) {
  console.log(req)

  res.send("hello")
}

const sslServer = https.createServer({
  key: fs.readFileSync(path.join(__dirname, 'cert', 'key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem'))
}, app)

sslServer.listen(PORT, () => console.log("server listen on " + PORT))
