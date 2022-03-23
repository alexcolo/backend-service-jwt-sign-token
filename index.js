const path = require('path');
const fs = require('fs');
const jwt = require('jsonwebtoken');

const userDirectory = 'qmi-qs-abff';

// The user to use when creating the session:
const userId = 'qlik';

// The Sense Enterprise-configured JWT structure. Change the attributes to match
// your configuration:
const token = {
  userDirectory: userDirectory,
  userId: userId,
};

// Path to the private key used for JWT signing:
const privateKeyPath = './keys/private.key';
const key = fs.readFileSync(path.resolve(__dirname, privateKeyPath));

// Sign the token using the RS256 algorithm:
const signedToken = jwt.sign(token, key, { algorithm: 'RS256' });

console.log('signedToken: ', signedToken);