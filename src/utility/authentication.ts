import passport from 'passport';
import {Strategy} from 'passport-local';

function setupPassport() {
  passport.use(
    new Strategy(async (username, password, done) => {
      try {
        console.log('passport setup');
        // const user = await
      } catch (e) {}
    })
  );
}

export {setupPassport};
