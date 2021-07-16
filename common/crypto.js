const crypto = require('crypto');

const generateSalt = (length = 10) => {
  var text = '';
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

const hashPassword = (password, salt = '123456') => {
  const hash = crypto.createHash('sha256');
  return hash.update(password + '-' + salt).digest("hex");
}

const verifyPassword = (hashedPassword, password, salt = '123456') => {
  const hash = crypto.createHash('sha256');
  var pwd = hash.update(password + '-' + salt).digest("hex");
  return pwd == hashedPassword;
}

//Encrypt Email and Id
var algorithm = 'aes-256-cbc';
var password = 'password';
const encrypt = (text) => {
  const cipher = crypto.createCipher(algorithm, password);
  var crypted = cipher.update(text.toString(), 'utf8', 'hex');
  crypted += cipher.final('hex');
  return crypted;
}
// Dycript Email and Id
const decrypt = (text) => {
  const decipher = crypto.createDecipher(algorithm, password);
  var dec = decipher.update(text, 'hex', 'utf8');
  dec += decipher.final('utf8');
  return dec;
}

const secret = "qwertyuiop[]lkjhgfdazxcvbnm,./!@#$%^&*()";

module.exports = {
  generateSalt,
  hashPassword,
  verifyPassword,
  encrypt,
  decrypt,
  secret
};