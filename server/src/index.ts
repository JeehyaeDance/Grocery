require("dotenv").config()
import express from "express"

const app = express()
const port = process.env.SERVER_PORT

app.get('/', (req, res) => {
  res.send('Hello from Bananas!')
})

app.listen(port, () => {
  console.log(`Grocery app listening at http://localhost:${port}`)
})