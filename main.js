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
var arrItemTotal;
let toPrint;
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)  ) + min;
}
class Field {
  constructor(theField){
    this.field = theField;
  }
  static generateField(down, across){
    // down and across 9 and 2;
    for (a = 0; a <= down; a++){
      for (b = 0; b <= across; b++) {
        arrA.push(fieldCharacter);
      }
      arrB.push(arrA);
      arrA = [];
    }
    let totalDown = down +1;
    let totalAcross = across +1;
    arrItemTotal = (totalDown * totalAcross);
    var ArrDivBy3 = arrItemTotal / 3;
    // console.log(arrItemTotal);
    let i = 0;
    while (i <= ArrDivBy3) {
     let newAcrossLocation = getRndInteger(0, across);
      let newDownLocation = getRndInteger(0, down);
      if (arrB[newDownLocation][newAcrossLocation] === hole){
        let newAcrLoc = getRndInteger(0, across);
        let newDowLoc = getRndInteger(0, down);
        arrB[newDowLoc][newAcrLoc] = hole;
      };
      arrB[newDownLocation][newAcrossLocation] = hole;
      i++;
    }
    var hatAcrossLocation = getRndInteger(0, across);
    var hatDownLocation = getRndInteger(0, down);
    if (hatDownLocation === 0 && hatAcrossLocation === 0) {
      hatDownLocation = getRndInteger(0, down);
    }
    arrB[hatDownLocation][hatAcrossLocation] = hat;
    arrB[0][0] = pathCharacter;
    return arrB;
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
 

// const myField = new Field([
//   ['*', '░', 'O'],
//   ['░', 'O', '░'],
//   ['░', '^', '░'],
// ]);

// myField.print()
// myField.acceptingUserInput();

// userChoice = prompt('Which way?');
// console.log(userChoice);

// myField.winOrLose();
// Field.generateField(3, 2);
let myField = new Field(Field.generateField(5,3));
myField.winOrLose();