# Terminal Game based on Castle Battle
### Coded by Chris Jimenez, Documented by Umang Diwan

#### 1. Introduction to the game

- We created a banner style introduction to the name of the game just to make it easy on the eyes.
- Within the introduction we included the instructions to the game and some lore behind the story.
- For the instructions and the lore we decided to give the players the option to decide whether they want to read the instructions or the lore.

#### 2. Pre-game preparations

- Declared all variables which will be required for the flow of the game.
- Used ```Math.floow(Math.random() * 5) + 1;``` to create the random number of hit-points between 1 and 5 that the computer inflicts on the player.
- Used the same method to create a variable which will randomly select whether the computer attacks or rapairs. We had two methods for this, one was: ```let jobOptions = ["attack", "repair"];
let randomIndex = Math.floor(Math.random() * jobOptions.length);
let randomJob = jobOptions[randomIndex];```, and the other was: ```const computerAction = computerOptions[Math.floor(Math.random() * 2)];

#### 3. Creation of the first peon

- Asked the player for the name of their first peon, and then pushed that name into the playerBarracks array as an object with ```name: initialPeon, job: "nothing"```
- Also logged the player barracks for the player to see their current peon.

#### 4. Flow of the game rounds

- Start of the round we ask the player if they would like to create another peon or select a peon from their current barracks.
- If the player chooses to select a peon from their current barracks, we ask them whether they would like to set that peon to attack or repair.
- Job is then set to either "attack" or "repair" depending on what the player types.
- We took the flow of the round and entered it in a function giving us the ability to make multiple functions.

#### 5. Player actions

- Created forEach callback functions for "attack" or "repair" player actions.
- Using the forEach method made it very easy to iterate over the player barracks to initiate the action phase.

#### 6. Computer actions/turn

- For the computers actions we used the previously defined ```computerNumber``` and ```computerOptions``` variables which selected a random number from 1-5 and 0-1, respectively. Using those numbers, we created if..else if statements for whether the computer attacks or repairs and by how many hit points.

#### 7. Game evaluatiion

- For the game evaluation we created a function called ```gameState``` with ```if...else if``` which check for computer or player health.
- For when it is a tie we used the logical "and" ```&&```.
- This created multiple game breaking bugs because, as we found out later, the conditionals were not letting us properly iterate through the game loop. 


### Bugs

1. While creating the introduction which gives players the option to read the instructions or the lore, we forgot to add the while loop which prevents random inputs to progress the code.
2. We were receiving multiple game breaking bugs which seemed to happen at random points. First bug was discovered when the player creates 3 peons.
- We discovered that our function of ```gameState``` was breaking the code when we prompted chatGPT's help. This was the code we received from chatGPT which ultimately helped us format our code properly: 
```
// Function to simulate player's turn
function playerTurn() {
    // Code for player's turn
}

// Function to simulate computer's turn
function computerTurn() {
    // Code for computer's turn
}

// Function to check if the game is over
function isGameOver(playerHealth, computerHealth) {
    return playerHealth <= 0 || computerHealth <= 0;
}

// Main game loop
var playerHealth = 100;
var computerHealth = 100;

while (!isGameOver(playerHealth, computerHealth)) {
    // Player's turn
    playerTurn();
    
    // Check if the game is over after player's turn
    if (isGameOver(playerHealth, computerHealth)) {
        break; // Exit the loop if the game is over
    }
    
    // Computer's turn
    computerTurn();
    
    // Check if the game is over after computer's turn
    if (isGameOver(playerHealth, computerHealth)) {
        break; // Exit the loop if the game is over
    }
}

// Determine the winner
if (playerHealth <= 0) {
    console.log("Computer wins!");
} else if (computerHealth <= 0) {
    console.log("Player wins!");
} else {
    console.log("It's a tie!");
}
``` 
- We then decided to create a while loop with if...else if nested in it which would check for zero health. This did not work.
- Then we did what chatGPT originally suggested and moved the if statements outside of the while loop and that made all the difference!
3. Another game breaking code occured when we select a player peon and try to select "attack" or "repair". What we instead received was that we did not enter the peon name correctly even though the spellings were correct. 