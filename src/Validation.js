const { GAME_STRING, ERROR_MESSAGE, GAME_NUMBER } = require('./Constant');

const Validation = {
  name(nameArray) {
    this.nameLength(nameArray);
    this.nameOverlap(nameArray);
    this.nameNonexistent(nameArray);
  },
  count(number) {
    this.interger(number);
    this.countRange(number);
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
  interger(count) {
    if (!Number.isInteger(count)) {
      throw new Error(ERROR_MESSAGE.interger);
    }
  },
  countRange(count) {
    if (
      GAME_NUMBER.countRangeStart > count ||
      GAME_NUMBER.countRangeEnd < count
    ) {
      throw new Error(ERROR_MESSAGE.countRange);
    }
  },
};

module.exports = Validation;
