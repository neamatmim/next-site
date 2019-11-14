import url from 'url';
import express from 'express';
import passport from 'passport';
import { githubStrategy } from '../../../../lib/api-utils/github-login';

const app = express();

app.disable('x-powered-by');

app.use(passport.initialize());

passport.use(githubStrategy);

app.get('/api/login/github/callback', (req, res) => {
  passport.authenticate('github', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Login with Github failed');
    } else {
      const redirectTo = url.parse(req.query.appRedirectUrl, true);

      redirectTo.query.loginToken = data.accessToken;
      res.redirect(url.format(redirectTo));
    }
  })(req, res);
});

export default app;
