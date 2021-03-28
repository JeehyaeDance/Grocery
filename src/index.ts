require('dotenv').config();
import express from 'express';
import expressSession from 'express-session';
import passport from 'passport';
import passportLocal from 'passport-local';
import {testConnection} from './utility/database';

const LocalStrategy = passportLocal.Strategy;

testConnection();

passport.use(
  new LocalStrategy((username, password, done) => {
    // TODO: Find the user in the database
    const user = {username};
    return done(null, user);
  })
);

const app = express();
const port = process.env.SERVER_PORT;

app.use(express.static(__dirname));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const session = expressSession({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
});

app.use(passport.initialize());
app.use(passport.session());

app.get('/status', (req, res) => {
  res.send('Hello from Bananas!');
});

// app.post('/login', passport.authenticate('local', {
//   successRedirect:
// }))

if (process.env.NODE_ENV === 'test') {
  module.exports = app;
} else {
  app.listen(port, () => {
    console.log(`Grocery app listening at http://localhost:${port}`);
  });
}
