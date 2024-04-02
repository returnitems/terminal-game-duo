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






