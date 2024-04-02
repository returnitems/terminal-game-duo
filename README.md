# Terminal Game based on Castle Battle
## By Chris Jimenez and Umang Diwan

1. Introduction to the game

- We created a banner style introduction to the name of the game just to make it easy on the eyes.
- Within the introduction we included the instructions to the game and some lore behind the story.
- For the instructions and the lore we decided to give the players the option to decide whether they want to read the instructions or the lore.

2. Pre-game preparations

- Declared all variables which will be required for the flow of the game.
- Used ```Math.floow(Math.random() * 5) + 1;``` to create the random number of hit-points between 1 and 5 that the computer inflicts on the player.
- Used the same method to create a variable which will randomly select whether the computer attacks or rapairs. We had two methods for this, one was: ```let jobOptions = ["attack", "repair"];
let randomIndex = Math.floor(Math.random() * jobOptions.length);
let randomJob = jobOptions[randomIndex];```, and the other was: ```const computerAction = computerOptions[Math.floor(Math.random() * 2)];

3. 

### Bugs

- While creating the introduction which gives players the option to read the instructions or the lore, we forgot to add the while loop which prevents random inputs to progress the code.