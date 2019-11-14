import GitHub from 'passport-github';
import jwt from 'jsonwebtoken';
import { learnTable } from './airtable';
import getEnv from './env';

interface TokenProfile {
  id: string;
  provider: string;
  displayName: string;
  username?: string;
}

const env = getEnv();
const createJwt = (secret: string, { id, provider, displayName, username }: TokenProfile) => {
  const payload = {
    id,
    provider,
    displayName,
    username,
    iat: Math.floor(Date.now() / 1000)
  };
  const options = { algorithm: 'HS256' };

  return jwt.sign(payload, secret, options);
};
// Use localhost when testing the API
// export const callbackURL = 'http://localhost:3000/api/login/github/callback';
export const callbackURL = `${env.ROOT_URL}/api/login/github/callback`;

export const githubStrategy = new GitHub.Strategy(
  {
    passReqToCallback: true,
    clientID: env.GITHUB_CLIENT_ID,
    clientSecret: env.GITHUB_CLIENT_SECRET,
    callbackURL
  },
  (_req, _accessToken, _refreshToken, profile, done) => {
    const accessToken = createJwt(env.ACCESS_TOKEN_SECRET, profile);

    learnTable
      .addGitHubEntry(profile)
      .catch(e => {
        console.log('An error ocurred with Airtable');
        console.error(e);
      })
      .finally(() => {
        done(null, { accessToken });
      });
  }
);
