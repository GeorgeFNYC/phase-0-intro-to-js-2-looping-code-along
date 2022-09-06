// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`)
// }

function writeCards (name, event = 'surprise') {
    let myArray = []
    for (let names of name) {  
        myArray.push (`Thank you, ${names}, for the wonderful ${event} gift!`);
    }
    return myArray
}

function countDown(num) {
    while (num >= 0) {
      console.log(num)
      num--
    }
  }