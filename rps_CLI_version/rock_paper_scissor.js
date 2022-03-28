const inquirer = require("inquirer");

module.exports = class RockPaperScissor {
  constructor() {
    this.prompt = inquirer.createPromptModule();
    this.moves = [
      { name: "👊", value: "rock" },
      { name: "✋", value: "paper" },
      { name: "✌", value: "scissors" },
    ];
    this.rules = {
      rock: ["scissors"],
      scissors: ["paper"],
      paper: ["rock"],
    };
  }

  newGame() {
    this.prompt({
      type: "confirm",
      name: "new_game",
      message: "New Game?",
    })
      .then(({ new_game }) => {
        if (new_game) {
          this.chooseGameOption();
        } else {
          console.log("Bye!");
          process.exit();
        }
      })
      .catch((error) => {
        console.log(
          "Error =>",
          "Something went wrong! Please restart the game."
        );
        process.exit();
      });
  }

  chooseGameOption() {
    this.prompt({
      type: "list",
      name: "game_option",
      message: "Please choose one",
      choices: [
        { name: "Player vs Computer", value: "p_vs_c" },
        { name: "Computer vs Computer", value: "c_vs_c" },
      ],
    }).then(({ game_option }) => this.compete(game_option));
  }

  async compete(gameOption) {
    let player1Label = "";
    let player1Move = "";
    let computerMove = this.randomMove();
    if (gameOption === "p_vs_c") {
      player1Move = await this.getUserMove();
      player1Label = "You";
    } else if (gameOption === "c_vs_c") {
      player1Move = this.randomMove();
      player1Label = "Computer 1";
    }
    if (player1Move === "") {
      console.log("Something went wrong. Please try again.");
      process.exit();
    }

    let winner = this.getWinner(player1Move, computerMove, player1Label);

    this.printResult(winner, player1Label, player1Move, computerMove);
    this.newGame();
  }

  getWinner(player1Move, computerMove, player1Label) {
    let winner = "";
    if (player1Move === computerMove) {
      winner = "It's a tie!";
    } else if (this.rules[player1Move].some((x) => x === computerMove)) {
      winner = `${player1Label}`;
    } else {
      winner = "Computer";
    }

    return winner;
  }

  printResult(winner, player1Label, player1Move, computerMove) {
    console.log(
      `${player1Label}(${player1Move}) vs Computer(${computerMove}) \n Winner: ${winner}.`
    );
  }

  randomMove() {
    return this.moves[Math.floor(Math.random() * this.moves.length)].value;
  }

  async getUserMove() {
    let answer = await this.prompt({
      type: "list",
      name: "move",
      message: "Choose your move.",
      choices: this.moves,
    });
    return new Promise((resolve, reject) => {
      resolve(answer.move);
    });
  }
};
