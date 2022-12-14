const { GAME_STRING, ERROR_MESSAGE, GAME_NUMBER } = require('./Constant');

const Validation = {
  name(nameArray) {
    this.nameLength(nameArray);
    this.nameOverlap(nameArray);
    this.nameNonexistent(nameArray);
  },
  nameLength(nameArray) {
    nameArray.forEach((name) => {
      if (name.length > GAME_NUMBER.nameLimit) {
        throw new Error(ERROR_MESSAGE.nameLength);
      }
    });
  },
  nameOverlap(nameArray) {
    const set = new Set(nameArray);
    if (nameArray.length !== set.size) {
      throw new Error(ERROR_MESSAGE.nameOverlap);
    }
  },
  nameNonexistent(nameArray) {
    if (nameArray.includes('')) {
      throw new Error(ERROR_MESSAGE.nameNonexistent);
    }
  },
};

module.exports = Validation;
