# Terminal Game based on Castle Battle
### By Chris Jimenez and Umang Diwan

####1. Introduction to the game

- We created a banner style introduction to the name of the game just to make it easy on the eyes.
- Within the introduction we included the instructions to the game and some lore behind the story.
- For the instructions and the lore we decided to give the players the option to decide whether they want to read the instructions or the lore.

####2. Pre-game preparations

- Declared all variables which will be required for the flow of the game.
- Used ```Math.floow(Math.random() * 5) + 1;``` to create the random number of hit-points between 1 and 5 that the computer inflicts on the player.
- Used the same method to create a variable which will randomly select whether the computer attacks or rapairs. We had two methods for this, one was: ```let jobOptions = ["attack", "repair"];
let randomIndex = Math.floor(Math.random() * jobOptions.length);
let randomJob = jobOptions[randomIndex];```, and the other was: ```const computerAction = computerOptions[Math.floor(Math.random() * 2)];

####3. Creation of the first peon

- Asked the player for the name of their first peon, and then pushed that name into the playerBarracks array as an object with ```name: initialPeon, job: "nothing"```
- Also logged the player barracks for the player to see their current peon.

####4. Flow of the game rounds

- Start of the round we ask the player if they would like to create another peon or select a peon from their current barracks.
- If the player chooses to select a peon from their current barracks, we ask them whether they would like to set that peon to attack or repair.
- Job is then set to either "attack" or "repair" depending on what the player types.
- We took the flow of the round and entered it in a function giving us the ability to make multiple functions.

####5. Player actions

- Created forEach callback functions for "attack" or "repair" player actions.
- Using the forEach method made it very easy to iterate over the player barracks to initiate the action phase.

####6. Computer actions/turn

- For the computers actions we used the previously defined ```computerNumber``` and ```computerOptions``` variables which selected a random number from 1-5 and 0-1, respectively. Using those numbers, we created if..else if statements for whether the computer attacks or repairs and by how many hit points.


### Bugs

- While creating the introduction which gives players the option to read the instructions or the lore, we forgot to add the while loop which prevents random inputs to progress the code.