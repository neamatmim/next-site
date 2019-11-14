export default function getEnv() {
  const { ACCESS_TOKEN_SECRET, GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, ROOT_URL } = process.env;

  if (!ACCESS_TOKEN_SECRET || !GITHUB_CLIENT_ID || !GITHUB_CLIENT_SECRET || !ROOT_URL) {
    throw new Error(
      'The auth API can only be used after adding the environment variables required in now.json'
    );
  }

  return {
    ACCESS_TOKEN_SECRET,
    GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET,
    ROOT_URL
  };
}
