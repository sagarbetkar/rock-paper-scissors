const RockPaperScissor = require("../rock_paper_scissor.js");
const inquirer = require("inquirer");
const { expect } = require("@jest/globals");

const game = new RockPaperScissor();

describe("Test get winner function", () => {
  test("Player1: rock, computer: scissors, player 1 label: computer 1", () => {
    expect(game.getWinner("rock", "scissors", "computer 1")).toBe("computer 1");
  });
  test("Player1: scissors, computer: scissors, player 1 label: computer 1", () => {
    expect(game.getWinner("scissors", "scissors", "computer 1")).toBe(
      "It's a tie!"
    );
  });
  test("Player1: paper, computer: rock, player 1 label: player 1", () => {
    expect(game.getWinner("paper", "rock", "player 1")).toBe("player 1");
  });
});

test("Test if randomMove function return value within game.moves", () => {
  const moves = game.moves.map((m) => m.value);
  expect(moves).toContain(game.randomMove());
});
