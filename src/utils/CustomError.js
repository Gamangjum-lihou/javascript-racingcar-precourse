const { ERROR_MESSAGE_PREFIX } = require('../constants/Message');

class CustomError extends Error {
  constructor(message) {
    super(`${ERROR_MESSAGE_PREFIX} ${message}`);
    this.name = this.constructor.name;
  }
}

module.exports = CustomError;
