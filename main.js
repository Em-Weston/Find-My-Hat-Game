// To run the game in the command line: 
//  node //Users/emmaweston/GitDev/Find-My-Hat-Game/main.js
const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
let endGame = false;
let userChoice;
let directionInput;
let newPoint;
let x = 0;
let y = 0;

class Field {
  constructor(theField){
    this.field = theField;
  }
  print() {
    for (let i=0; i<this.field.length; i++){
      // console.log(i);
      console.log(this.field[i].join(''));
    }
  }
  acceptingUserInput() {
    // console.log(userChoice);
    directionInput = userChoice.toLowerCase(); 
    newPoint = this.field[x][y];
    // console.log(directionInput);
    // console.log(x, y);
    if(directionInput === 'd') {
      x++;
      // console.log(x);
      newPoint = this.field[x][y];
      return newPoint, x, y;
    } else if (directionInput === 'r') {
      y++;
      return x,y;
    } else if (directionInput === 'u') {
      x--;
      // console.log(`x is: ${x}`);
      if (x<= -1) {
        console.log('Oops, you fell off the game field.');
        console.log('Game over!')
        return endGame = true;
      }
    } else if (directionInput === 'l') {
      console.log('You want to move left');
      y--;
      if (y <= -1) {
        console.log('Oops, you fell off the game field.');
        console.log('Game over!')
        return endGame = true;
      } else {
        this.field[x][y] = pathCharacter;
      }
    } else if (directionInput === 'end') {
      console.log('Thanks for playing!');
      return endGame = true;
    } else {
      console.log('That is not a valid command. Choose U,D,L,R or End.');
    }
  }
  winOrLose() {
    do {
      myField.print();
      userChoice = prompt('Which Way?');
      // console.log(userchoice);
      myField.acceptingUserInput();

    }
    while (endGame === false);
  }
  
 }
 

const myField = new Field([
  ['*', '░', 'O'],
  ['░', 'O', '░'],
  ['░', '^', '░'],
]);

// myField.print()
// myField.acceptingUserInput();

// userChoice = prompt('Which way?');
// console.log(userChoice);

myField.winOrLose();