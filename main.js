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
let arrB = [];
let arrA = [];
let a = 0;
let b = 0;

class Field {
  constructor(theField){
    this.field = theField;
  }
  static generateField(height, width){
    
    for (a = 0; a <= height; a++){
      for (b = 0; b <= width; b++) {
        arrA.push(fieldCharacter);
      }
      arrB.push(arrA);
      arrA = [];
    }
    var arrItemTotal = (height * width) / 3;
    console.log(arrItemTotal);
    let i = 0;
    while (i < arrItemTotal) {
      let holeRowLocation = Math.floor(Math.random() * width);
      let holeHeightLocation = Math.floor(Math.random() * height);
      console.log(`iteration number: ${i}, rowlocation: ${holeRowLocation}, heightLocation: ${holeHeightLocation}`);
      arrB[holeRowLocation][holeHeightLocation] = hole;
      i++;
    }
    var hatRowLocation = Math.floor(Math.random() * width);
    var hatHeightLocation = Math.floor(Math.random() * height);
    // console.log(hatRowLocation, hatHeightLocation);
    arrB[hatRowLocation][hatHeightLocation] = hat;
    arrB[0][0] = pathCharacter;
    console.log(arrB)
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
  updateCurrentLocation() {
    let currentPosition = this.field[x][y];
    console.log(`This is the current position of array item: ${currentPosition}`);
    if (currentPosition === fieldCharacter) {
      console.log('This is a field character space');
      return this.field[x][y] = pathCharacter;
    } else if (currentPosition === hole) {
      console.log('You fell down a hole!')
      console.log('Game Over!!');
      return endGame = true;
    } else if (currentPosition === hat) {
      console.log('CONGRATULATIONS! YOU WON!!'); 
      return endGame = true;
    }
  }
  winOrLose() {
    do {
      myField.print();
      userChoice = prompt('Which Way?');
      // console.log(userchoice);
      myField.acceptingUserInput();
      myField.updateCurrentLocation();
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

// myField.winOrLose();
Field.generateField(3, 2);