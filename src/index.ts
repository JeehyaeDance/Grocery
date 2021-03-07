require("dotenv").config()
import express from "express"
import expressSession from 'express-session'

const app = express()
const port = process.env.SERVER_PORT

app.use(express.static(__dirname));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const session = expressSession({secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: false})

app.get('/', (req, res) => {
  res.send('Hello from Bananas!')
})

app.listen(port, () => {
  console.log(`Grocery app listening at http://localhost:${port}`)
})