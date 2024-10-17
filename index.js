require('dotenv').config()
const express = require("express");
const cors = require('cors') // Required for CORS configuration
const path = require("path");
const fileUpload = require('express-fileupload')
const PORT = process.env.PORT || 5000
const requestIp = require('request-ip');
const https = require("https");
const fs = require("fs");

const app = express()

// **CORS configuration:**
app.use(cors());

app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use(requestIp.mw());
app.set('trust proxy', true)

app.use('/api', (req, res) => {
  res.send("hello")
})

const start = async () => {
  try {
    app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))
  } catch (e) {
    console.log(e)
  }
}

start()