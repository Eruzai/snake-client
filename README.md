# Snake Client Project

the game of "Snake" is a well known retro video game. The rules are simple. You control a "snake" symbolized by a line of color that moves across a 2D background. You steer the snake into red dots, symbolizing apples, to steadily grow larger and accumulate points. Eventually you'll either run out of space, crash into yourself or another snake, or the wall at which point the game ends.

This is a multiplayer version of the game!


## Final Product

!["screenshot description"](#)
!["screenshot description"](#)


## Getting Started

- Follow steps inside the snek server repo to run the server side. They are summarized below:

### Clone from repository

```bash
git clone https://github.com/lighthouse-labs/snek-multiplayer.git
cd snek-multiplayer

# install and run via npm
npm install
npm run play
```

- Run the development snake client using the `node play.js` command.


## ⚠️ Important!

- you may need to update the IP and PORT information held in constants.js if you're connecting from a different machine. By default it's set to run locally using "localhost" as IP.

- to enable the scoreboard comment out (add // to the beginning of) line 98 and delete the "//" at the beggining of line 97 of the UserInterface.js file


## Optional

paste the following code just after line 29 of the RemoteInterface.js file held by the server to enable a message to be broadcast to each existing player when a new player joins!

```js
.on('connection', (socket) => { // passes the connecting client to this function
  for (const client of this.clients) { // looks at each client connected
    if (client !== socket) { // if the client looked is not the connecting client send them a message.
      client.write("A new player has joined!");
    }
  }
})
```