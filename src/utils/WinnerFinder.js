const WinnerFinder = (cars) => {
  const carsDistance = cars.map((car) => car.distance);
  const maxDistance = Math.max(...carsDistance);
  const winner = cars.reduce((acc, car) => {
    if (car.distance === maxDistance) {
      acc.push(car.name);
    }
    return acc;
  }, []);
  return winner;
};

module.exports = WinnerFinder;
