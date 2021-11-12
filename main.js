const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

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
  
 }
 

const myField = new Field([
  ['*', '░', 'O'],
  ['░', 'O', '░'],
  ['░', '^', '░'],
]);

myField.print()


const userChoice = prompt('Which way?');
console.log(userChoice);

