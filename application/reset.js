const showLog = require('../modules/showMsgOnLog');
const deleteAllDevice = require('../modules/deleteAllDevice');

try {
  showLog('delete all devices...');
  deleteAllDevice();
} catch (error) {
  console.error('deleteAllDevice error',error);
}




