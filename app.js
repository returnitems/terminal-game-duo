const prompt = require('prompt-sync')();
//Game Introduction
console.log(`******************************
  Welcome to Castle Battle! 
******************************`); //Add stars later
console.log(``); //We want space between text - for aesthetic visual purposes
//We want the player to have the option of reading the lore and whether they want to read the instructions or not
let intro = prompt(`Would you like to read the lore? - Type (y) for yes (n) for no: `);
while(intro !== "y" && intro !== "n"){
    intro = prompt(`Please type either (y) or (n): `);
}
if(intro === "y"){
    console.clear();
    console.log(`You are a proud Samurai in Feudal Japan and you're leading a rebellion against the tyrannical Feudal Lord. It's time the two factions faced each other in combat!`); //Revisit to write lore
    intro = prompt(`Would you like to read the instructions? - Type (y) for yes (n) for no: `);
    //We want the user to ONLY type the requested input
    while(intro !== "y" && intro !== "n"){
        intro = prompt(`Please type either (y) or (n): `);
    }
    if(intro === "y"){
        console.log(`1.Choose either to CREATE or SELECT a peon
        2.If SELECT peon: a.Select by name, b.assign job (attack or repair)
        3.If CREATE peon: Assign peon name
        4.Game Over if health is 0 - or - Continue playing until health is 0`); //Revisit to write instructions
    }else if(intro === "n"){
        console.clear();
        console.log(`Great, let's begin!`);
    }
}else if(intro === "n"){
    intro = prompt(`Would you like to read the instructions? - Type (y) for yes (n) for no: `);
    while(intro !== "y" && intro !== "n"){
        intro = prompt(`Please type either (y) or (n): `);
    }
    if(intro === "y"){
        console.log(`1.Choose either to CREATE or SELECT a peon
        2.If SELECT peon: a.Select by name, b.assign job (attack or repair)
        3.If CREATE peon: Assign peon name
        4.Game Over if health is 0 - or - Continue playing until health is 0`); //Revisit to write instructions
    }else if(intro === "n"){
        console.clear();
        console.log(`Great, let's begin!`);
    }
}

//Pre-Game: Player creates INITIAL peon + list of variables we want in global scope (for future reference in code blocks and functions)
const playerBarracks = [];
let playerHealth = 10;
let computerHealth = 10;
let computerNumber = Math.floor(Math.random() * 5) + 1; //We chose to mulitply by 5 and then add 1 to ensure that we NEVER get 0 (since coputer needs to choose 1-5) and 5 is inclusive 
const computerOptions = ["attack", "repair"];
// let computerAction = computerOptions[Math.floor(Math.random() * 2)]; //We will use later to gnerate the action computer will take
let initialPeon = prompt(`Attention! Before the game starts with round 1, you need to create your first peon - Give your peon a name: `);
playerBarracks.push({name: initialPeon, job: "nothing"});
console.log(`Congrats! You've created your first peon and this is the current status of your barracks:`, playerBarracks);


//We chose to create a function that represents ONE player round (before action)
const startRound = ()=>{
    let round = prompt(`Round Start! Would you like to CREATE or SELECT a peon? - Please type (create) or (select): `);
console.clear();
while(round !== "create" && round !== "select"){
    round = prompt(`Please type either (create) or (select): `);
}
if(round === "create"){
    round = prompt(`Give your peon a name: `);
    playerBarracks.push({name: round, job: "nothing"}); //If player chose to create a peon - we added to his barracks with correct property values
}else if(round === "select"){
    console.log(`These are your current Barracks:`, playerBarracks);
    round = prompt(`Please select a peon from your Barracks - Type peon name: `);
    console.clear();
    playerBarracks.forEach((peon)=>{
        console.log(`Here is the current status of your Barracks`, playerBarracks); //We chose to display the status of Barracks on this line, so that play can see available peons (also, to only show Barracks once even after multiple incorrect inputs)
        while(round !== peon.name){
            round = prompt(`Please type a correct peon name: `);
        }
        if(peon.name === round){
            console.log(`You have chosen ${peon.name}`); 
            round = prompt(`What action would you like ${peon.name} to perform? - Please type (attack) or (repair): `);
            while(round !== "attack" && round !== "repair"){
                round = prompt(`Please type either (attack) or (repair): `);
            }
            if(round === "attack"){
                peon.job = "attack";
            }else if(round === "repair"){
                peon.job = "repair";
            }
        }
    })
}
console.log(playerBarracks);
}
startRound();
console.clear();

//Part 2: Player action
 const playerAction = ()=>{
    playerBarracks.forEach((peon)=>{ //We want to iterate over the player's barracks to initiate the action phase 
    if(peon.job === "repair"){ //With the forEach() method we can target the value of the object elements and identify the value to match our conditional statements
        playerHealth += 1;
        console.log(`Nice defensive move! You have repaired yourself by 1 point`);
    }else if(peon.job === "attack"){
        computerHealth -= 1;
        console.log(`Nice move! you have inflicted damage and decreased the Fedual Lord's health by 1 point`);
        }
    })
}

//Part 3: 
const computerAction = ()=>{
    let computerDecision = computerOptions[Math.floor(Math.random() * 2)];
    if(computerDecision === computerOptions[0]){
        playerHealth -= computerNumber;
        console.log(`Oh no! The Feudal Lord has inflicted damage and reduced your health by ${computerNumber} points`);
    }else if(computerDecision === computerOptions[1]){
        computerHealth += computerNumber;
        console.log(`Watch out! The Feudal Lord has chosen to heal and increased his health by ${computerNumber} points`);
    }
}
computerAction();
// console.log(`Current Player Health: ${playerHealth} - Current Feudal Lord Health: ${computerHealth}`);

//We chose to use a while...loop to ensure that if end game status had both computer and player health above 0 - the game would start from beginning
while(computerHealth > 0 && playerHealth > 0){  
    console.log(`Current Player Health: ${playerHealth}  -  Current Feudal Lord Health: ${computerHealth}`);
    startRound();
    playerAction();
    computerAction();
}
if(computerHealth <= 0){
    console.log(`Congratulations, you've defeated the Feudal Lord and liberated your clan from his tyranny!`);
}else if(playerHealth <= 0){
    console.log(`You have been slain! The Feudal Lord has vanquished your clan and has taken absolute power over the nation - GAME OVER...`);
}else if(computerHealth <= 0 && playerHealth <= 0){
    console.log(`It's a tie! Both you and the Feudal Lord are in a stalemate, better luck next time...`);
}




