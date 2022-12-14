const GameController = require('./controller/GameController');

class App {
  play() {
    const gameController = new GameController();
    gameController.startGame();
  }
}

const app = new App();
app.play();

module.exports = App;
