const addDevices = require('./modules/addDevice');
const getDeviceToken = require('./modules/getDeviceToken');

async function getTokenList(deviceList) {
  const deviceTokenList = [];
  if (!Array.isArray(deviceList)) throw new Error('deviceList is not a array');
  for (let i = 0; i < deviceList.length; i++) {
    const token = await getDeviceToken(deviceList[i].id);
    deviceTokenList.push({
      name: deviceList[i].name,
      id: deviceList[i].id,
      token
    });
  }
  return deviceTokenList;
}

async function init() {
  const deviceList = await getTokenList(await addDevices());
  console.log(deviceList);
}

init();