const WinnerFinder = (cars) => {
  const maxDistance = Math.max(...cars.map((car) => car.getDistance()));
  return cars.reduce((acc, car) => {
    if (car.getDistance() === maxDistance) {
      acc.push(car.getName());
    }
    return acc;
  }, []);
};

module.exports = WinnerFinder;
