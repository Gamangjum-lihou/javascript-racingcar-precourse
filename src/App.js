const CarGameController = require('./controller/CarGameController');

class App {
  #carGameController = new CarGameController();

  play() {
    this.#carGameController.run();
  }
}

module.exports = App;

const app = new App();
app.play();
