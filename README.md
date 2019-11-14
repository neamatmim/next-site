# Next.js website

The official website for Next.js.

## Contribution

To submit a feature, bug fix, or enhancement to the website proceed as follows:

1. Clone this repository
2. Run `yarn` to install the dependencies
3. Once the dependencies are installed, run `now dev` or `yarn dev` to start the dev server on `localhost:3000`

**Note:** `now dev` will require you to add the file `.env` with the secrets required by `now.json`, it should look like the following:

```
ACCESS_TOKEN_SECRET = abc
GITHUB_CLIENT_ID = abc
GITHUB_CLIENT_SECRET = abc
AIRTABLE_API_KEY = abc
```

> You don't need to add real values unless you want to locally test the API routes

We really appreciate any contribution.

## Adding a showcase

1. Capture a screenshot of the website with the recommended 3836x2200 resolution and `.jpg` format
2. Copy `website.jpg` into `static/images/showcases/`
3. Copy a 800x459 downscaled duplicate image into `static/images/showcase-thumbnails/`
4. Optimize both images
5. Update `showcase-manifest.js`

## Related Repositories

- [Next.js](https://github.com/zeit/next.js)
- [Next.js Plugins](https://github.com/zeit/next-plugins)
