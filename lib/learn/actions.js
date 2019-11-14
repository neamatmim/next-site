const endpoints = {
  login: `${process.env.BACKEND_URL}/api/login/github`
};

export function login() {
  const encodedCamebackUrl = encodeURIComponent(window.location.href);
  const href = `${endpoints.login}?needToken=1&appRedirectUrl=${encodedCamebackUrl}`;

  window.location.href = href;
}
