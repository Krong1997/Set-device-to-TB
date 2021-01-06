require('dotenv').config();

module.exports = {
  host: process.env.HOST || "127.0.0.1",
  port: process.env.PORT || "80",
  token: process.env.ACCESS_TOKEN,
  numberOfDevices: process.env.NUMBER_OF_DEVICES || 1
}