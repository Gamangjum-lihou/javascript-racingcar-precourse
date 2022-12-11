function checkWinner(carList) {
  let max = 0;
  const winPlayer = [];

  carList.forEach((car) => {
    const result = car.getCurrent().length;
    if (result > max) max = result;
  });

  carList.forEach((car) => {
    const result = car.getCurrent().length;
    if (result === max) winPlayer.push(car.getName());
  });

  return winPlayer;
}

module.exports = checkWinner;
