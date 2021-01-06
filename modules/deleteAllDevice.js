const proxyToTB = require('./utils/proxyToTB');
const {
  host,
  port
} = require('../constant/env');

async function deleteAllDevice() {
  const deviceList = require('../output/deviceList.json');
  if (!Array.isArray(deviceList)) throw new Error('device is not array');
  for (let i = 0; i < deviceList.length; i++) {
    try {
      const opt = {
        method: 'delete',
        url: `http://${host}:${port}/api/device/${deviceList[i].id}`,
        headers: {
          'Content-Type': 'application/json'
        }
      }
      proxyToTB(opt);
    } catch (error) {
       throw error;
    }

  }
}

module.exports = deleteAllDevice;
