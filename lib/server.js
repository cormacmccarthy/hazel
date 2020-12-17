const hazel = require('./index');

const {
  INTERVAL: interval,
  ACCOUNT: account,
  REPOSITORY: repository,
  SERVE_PRERELEASES: servePrereleases,
  TOKEN: token,
  URL: url
} = process.env

module.exports = hazel({
  interval,
  account,
  repository,
  servePrereleases,
  token,
  url
});
