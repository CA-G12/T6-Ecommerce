const jwt = require("jsonwebtoken");

const { SECRET_KEY } = process.env;

class AuthHelpers {
  static generateToken(payload) {
    return new Promise((res, rej) => {
      jwt.sign(payload, SECRET_KEY, (error, decoded) => {
        if (error) {
          rej(error);
        } else {
          res(decoded);
        }
      });
    });
  }
}

module.exports = AuthHelpers;
