const GameController = require('./Controller/GameController');

class App {
  play() {
    const game = new GameController();
    game.getCarName();
  }
}
const app = new App();
app.play();

module.exports = App;
