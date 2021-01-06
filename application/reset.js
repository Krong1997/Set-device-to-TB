const showLog = require('../modules/showMsgOnLog');
const deleteAllDevice = require('../modules/deleteAllDevice');
const fs = require('fs');
const { jsonPath } = require('../constant/env');

try {
  deleteAllDevice().then(() => {
    showLog('clean device list json file');
    fs.writeFileSync(jsonPath, '', (err) => {
      console.error('Data written to file error', err);
    });
    showLog('done');
  });
} catch (error) {
  
}




