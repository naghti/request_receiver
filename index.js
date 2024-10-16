const express = require("express");
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 5000

app.use(cors());
app.use(express.json())
app.set('trust proxy', true)
app.use('/api', f)

function f (req, res) {
  console.log(req.query)

  return res.json(true)
}

const start = async () => {
  try {
    app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))
  } catch (e) {
    console.log(e)
  }
}

start()