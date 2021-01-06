const proxyToTB = require('./utils/proxyToTB');
const {
  host,
  port,
  numberOfDevices
} = require('../constant/env');

const opt = {
  method: 'post',
  url: `http://${host}:${port}/api/device`,
  headers: {
    'Content-Type': 'application/json'
  }
}

async function addDevices() {
  const deviceIdList = [];
  try {
    for (let i = 0; i < numberOfDevices; i++) {
      const res = await proxyToTB({
        ...opt,
        data: JSON.stringify({ name: `device${i}` })
      });
      deviceIdList.push({
        name: res.name,
        id:res.id.id
      });
    }
    return deviceIdList;
  } catch (error) {
    console.error("[add Devices Error]", error);
  }
}

module.exports = addDevices;