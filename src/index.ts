require("dotenv").config()
import express from "express"
import expressSession from 'express-session'
import passport from 'passport'
import passportLocal from "passport-local"

const LocalStrategy = passportLocal.Strategy

passport.use(new LocalStrategy((username, password, done) => {
  // TODO
  return undefined
}))

const app = express()
const port = process.env.SERVER_PORT

app.use(express.static(__dirname));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const session = expressSession({secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: false})

app.use(passport.initialize());
app.use(passport.session());

app.get('/status', (req, res) => {
  res.send('Hello from Bananas!')
})

app.post('/login', passport.authenticate('local'), (req, res) => {
  res.status(200).send("Successfully logged in")
})

app.listen(port, () => {
  console.log(`Grocery app listening at http://localhost:${port}`)
})