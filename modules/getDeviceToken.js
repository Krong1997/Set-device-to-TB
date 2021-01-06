const proxyToTB = require('./utils/proxyToTB');
const {
  host,
  port
} = require('../constant/env');

async function getDeviceToken(deviceId) {
  try {
    const opt = {
      method: 'get',
      url: `http://${host}:${port}/api/device/${deviceId}/credentials`,
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const res = await proxyToTB(opt);
    return res['credentialsId'];
  } catch (error) {
    console.error("[get device token Error]",error);
    return error;
  }
}

module.exports = getDeviceToken;