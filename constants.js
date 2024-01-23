const IP = "localhost";
const PORT = 50541;
const NAME = "EZA" // change this to change the snakes name (must be three characters)
const MOVEMENT = { // change key to change movement binding, don't change value of the key!
  w: "up",
  s: "down",
  a: "left",
  d: "right"
};
const MESSAGES = { // change key to change message binding, you can also change the message!
  j: "Snacksss",
  k: "I hunger...",
  l: "isss food?",
  u: "Need ssspace!",
  i: "Trapped...",
  o: "This isss end"
};
const OPTIONS = {
  continuousMovement: true,
  enableScoreboard: true,
  announceNewPlayers: true
};

module.exports = {
  IP,
  PORT,
  NAME,
  MOVEMENT,
  MESSAGES,
  OPTIONS
};
