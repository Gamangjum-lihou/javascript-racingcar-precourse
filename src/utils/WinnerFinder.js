const WinnerFinder = (cars) => {
  const carsDistance = cars.map((car) => car.getDistance());
  const maxDistance = Math.max(...carsDistance);
  const winner = cars.reduce((acc, car) => {
    if (car.getDistance() === maxDistance) {
      acc.push(car.getName());
    }
    return acc;
  }, []);
  return winner;
};

module.exports = WinnerFinder;
