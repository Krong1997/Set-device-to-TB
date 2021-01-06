const APICaller = require('./apiCaller');
const { token } = require('../../constant/env');

async function proxyToTB(config) {
  const _config = {
    ...config,
    headers: {
      ...config.headers,
      'X-Authorization': 'Bearer ' + token,
    }
  }
  return APICaller(_config);
}

module.exports = proxyToTB;