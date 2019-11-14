import url from 'url';
import express from 'express';
import passport from 'passport';
import { githubStrategy, callbackURL } from '../../../../lib/api-utils/github-login';

const app = express();

app.disable('x-powered-by');

app.use(passport.initialize());

passport.use(githubStrategy);

app.get('/api/login/github', (req, res) => {
  const appRedirectUrl = req.query.appRedirectUrl && url.parse(req.query.appRedirectUrl);

  if (!appRedirectUrl || !appRedirectUrl.hostname) {
    res.status(500).send('appRedirectUrl should be a valid URL');
    return;
  }

  const redirectTo = url.parse(callbackURL, true);
  redirectTo.query.appRedirectUrl = url.format(appRedirectUrl);

  // callbackURL is not in the options for the GitHub strategy, but it can be used
  passport.authenticate('github', { callbackURL: url.format(redirectTo) } as any)(req, res);
});

export default app;
