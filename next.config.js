const path = require('path');
const webpack = require('webpack');
const rehypePrism = require('@mapbox/rehype-prism');
const nextMDX = require('@next/mdx');
const bundleAnalyzer = require('@next/bundle-analyzer');
const rehypeReadme = require('./lib/rehype-readme');

// only enable rehypeReadme for this file
// because the github relative path replacement
// might break things in other markdowns
const withGitHubMDX = nextMDX({
  extension: path.join(__dirname, 'components', 'docs', 'docs.mdx'),
  options: {
    hastPlugins: [
      rehypePrism,
      [
        rehypeReadme,
        {
          repo: 'zeit/next.js',
          branch: 'master',
          level: 4
        }
      ]
    ]
  }
});

const withMDX = nextMDX({
  extension: /[/\\](pages|blog|telemetry)[/\\](.+)\.mdx?$/,
  options: {
    hastPlugins: [rehypePrism]
  }
});

const withBundleAnalyzer = bundleAnalyzer({ enabled: process.env.ANALYZE === 'true' });

// To test the API use localhost here
// const BACKEND_URL = 'http://localhost:3000';
const BACKEND_URL = process.env.BACKEND_URL || 'https://nextjs.org';

const nextConfig = {
  pageExtensions: ['jsx', 'js', 'ts', 'tsx', 'mdx'],
  experimental: {
    granularChunks: true
  },
  env: {
    BACKEND_URL,
    FIRST_COURSE: 'basics',
    FIRST_LESSON: 'getting-started',
    SITE_NAME: 'Next.js'
  },
  webpack: (config, { dev, isServer }) => {
    config.plugins = config.plugins || [];
    config.plugins.push(
      new webpack.ContextReplacementPlugin(
        /highlight\.js[/\\]lib[/\\]languages$/,
        new RegExp(`^./(${['javascript', 'json', 'xml'].join('|')})$`)
      )
    );

    if (isServer && !dev) {
      const originalEntry = config.entry;
      config.entry = async () => {
        const entries = { ...(await originalEntry()) };
        // This script imports components from the Next app, so it's transpiled to `.next/server/scripts/build-rss.js`
        entries['./scripts/build-rss.js'] = './scripts/build-rss.js';
        return entries;
      };
    }

    return config;
  }
};

module.exports = withGitHubMDX(withMDX(withBundleAnalyzer(nextConfig)));
