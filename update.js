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
  static generateField(height, width) {
    
   }
  print() {
    for (let i=0; i<this.field.length; i++){
      console.log(this.field[i].join(''));
    }
  }
  acceptingUserInput(){
    directionInput = userChoice.toLowerCase();
  newPoint = this.field[x][y];
    if(directionInput === 'd') {
      x++; 
      // if (x > this.field.length) {
      //   console.log('you loose');
      // }
      newPoint = this.field[x][y];
      return newPoint, x, y;
    } else if (directionInput === 'r') {
      y++;
      return x, y;
    } else if (directionInput === 'u') {
      x--; 
      if (x <= -1) {
        console.log('Oops, You fell off the board!');
        console.log('Game Over!')
        return endGame = true;
      }
    } else if (directionInput === 'l'){
      console.log('You want to move left');
      y--; 
      if (y <= -1) {
        console.log('Oops, You fell off the board.');
        console.log('Game Over!')
        return endGame = true;
      } else {
        this.field[x][y] = pathCharacter;
      }
    } else if (directionInput === 'end') {
        console.log('Thanks for playing!')
        return endGame = true;
    } else {
      console.log('That is not a valid command. Choose U,D,L,R');
    }
    // return console.log(this.field[x][y]);
  }
  // This is to Check what square we are landing on? 
  updateCurrentLocation() {
   let currentPosit = this.field[x][y];
  //  console.log(`this is the current position array item : ${currentPosit}`);
   if (currentPosit === fieldCharacter) {
    //  console.log(`THIS IS A FIELD CHARACTER! GOOD MOVE!! ${currentPosit}`);
     return this.field[x][y] = pathCharacter;
   } else if (currentPosit === hole) {
     console.log(`You fell down a hole! Game Over!!!`); 
     return endGame = true;
   } else if (currentPosit === hat) {
     console.log(`CONGRATULATIONS! YOU WON!!!`);
     return endGame = true;
   }
  }
  // Method to run the main game loop, until won or lost. 
 winOrLose() {
   do {
     myField.print();
     userChoice = prompt('Which Way?');
    //  console.log(userChoice);
     myField.acceptingUserInput()
     myField.updateCurrentLocation()
   }
    while (endGame === false);

   }
   static generateField(height, width) {

   }
 }

const myField = new Field([
  ['*', '░', 'O'],
  ['░', 'O', '░'],
  ['░', '^', '░'],
]);

// myField.print()


// const userChoice = prompt('Which way?');
// console.log(userChoice);

// myField.acceptingUserInput()
// myField.updateCurrentLocation()
myField.winOrLose();

