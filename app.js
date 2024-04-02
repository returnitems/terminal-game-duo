const prompt = require('prompt-sync')();
//Game Introduction
console.log(`************
Welcome to Castle Battle! 
**********`); //Add stars later
console.log(``); //We want space between text - for aesthetic visual purposes
//We want the player to have the option of reading the lore and whether they want to read the instructions or not
let intro = prompt(`Would you like to read the lore? - Type (Y) for yes (N) for no: `);
while(intro !== "Y" && intro !== "N"){
    intro = prompt(`Please type either (Y) or (N): `);
}
if(intro === "Y"){
    console.log(`lore goes here`); //Revisit to write lore
    intro = prompt(`Would you like to read the instructions? - Type (Y) for yes (N) for no: `);
    //We want the user to ONLY type the requested input
    while(intro !== "Y" && intro !== "N"){
        intro = prompt(`Please type either (Y) or (N): `);
    }
    if(intro === "Y"){
        console.log(`instructions go here`); //Revisit to write instructions
    }else if(intro === "N"){
        console.log(`Great, let's begin!`);
    }
}else if(intro === "N"){
    intro = prompt(`Would you like to read the instructions? - Type (Y) for yes (N) for no: `);
    while(intro !== "Y" && intro !== "N"){
        intro = prompt(`Please type either (Y) or (N): `);
    }
    if(intro === "Y"){
        console.log(`instructions go here`); //Revisit to write instructions
    }else if(intro === "N"){
        console.log(`Great, let's begin!`);
    }
}
//Pre-Game: Player creates INITIAL peon + list of variables we want in global scope (for future reference in code blocks and functions)
const playerBarracks = [];
let playerHealth = 10;
let computerHealth = 10;
let computerNumber = Math.floor(Math.random() * 5) + 1; //We chose to mulitply by 5 and then add 1 to ensure that we NEVER get 0 (since coputer needs to choose 1-5) and 5 is inclusive 
const computerOptions = ["attack", "repair"];
//let computerAction = computerOptions[Math.floor(Math.random() * 2)]; //We will use later to gnerate the action computer will take










