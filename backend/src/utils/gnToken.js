const crypto = require('crypto');

const gnToken = () => crypto.randomBytes(8).toString('hex');

module.exports = gnToken;