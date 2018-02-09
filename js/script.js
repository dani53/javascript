// //anonymous function with 0 arguments
//
// var myFunc = function() {
//   console.log('Youre fired your anonymous function');
// };
//
// myFunc();
//
//
// var userLogin = function(username, password) {
//   // compare correct password for this user with the password they give you
// }
//
// function myMagicFunction(argument1, argument2) {
//   console.log(`${argument1} is better than ${argument2}`);
// };
//
// myMagicFunction ()
//
// //Step 1
// var todos = [];
// var todoOne = prompt("what do you want to do this weekend?");
// var todoTwo = prompt("what else do you want to do this weekend?");
// var todoThree = prompt("what is a third thing you want to do this weekend?");
//
// todos.push(todoOne, todoTwo, todoThree);

//step 2
// var todosWithDays = [];
// for(let i = 0; i < todos.length; i++) {
//   var due = prompt(`What day do you want to get ${todos[i]} done?`, `Please use this format: day/month/year`);
//   due = new Date(due);
//   todosWithDays.push([todos[i] due]);
// }

//Step 3
// var sortedWithIndices = [];
// let j = 0;
// var now = new Date().getTime(); //converts JS Date object to miliseconds
// while (j < todosWithDays.length) {
  // let oneDay = 24 * 60 * 60 * 1000; //hours*minutes*seconds*milliseconds
  // var diffDays = Math.round((todosWithDays[j][1].getTime() - now)/oneDay);
  // sortedWithIndices.push([diffDays, todosWithDays[j]]);
  // j++ //incriment by one or you'll have a problem!
// }

// sortedWithIndices.sort();

// console.log(sortedWithIndices[sortedWithIndices.length - 1][1], `will take the longest`); // take the sorted length of and minus 1, take the to do (1)

//Step 4
//let n = 0;

// do {
  // if(n != sortedWithIndices.length - 1) {
    // sortedWithIndices[n][1].push("done");
  // }
  // n++
// } while(n < sortedWithIndices.length);

// let alertArr = [];
// for(let i = 0; i < sortedWithIndices.length; i++) {
  // if(sortedWithIndices[i][1]);
// }

//Fat arrow functions
// function callMyself(number) {
//   if(number >=0) {
//     number--;
//     console.log(number);
//   } else {
//     return
//   }
// }
//
// (number) => {
//   if(number >= 0) {
//     number--;
//     console.log(number);
//   } else
// }
// function givesMeBestNumber(number) {
//   if(number)
// }

// function dogsAge(number) {
//   if(number )
// }
//Try it out day5
//const dogAge = prompt("how old is your dog?", '3');
// need a function to take that step and do something ith it
// This is a declaration..definition of the function - what matters is where we call the function
// function calcDogYears(age) {
//   parseInt(age); // check that it is a givesMeBestNumber
//   // if(age == NaN) { //nan is an object - not saved by their value, but where they are saved
//     if(isNaN(age)) { //a function called isNan will calculate if someghing is not a number
//       //if age comes back as not a number
//       calcDogYears(prompt(`Nah for real..NUMBER`, `10`));
//     } else {  //track how many times the question has been asked -extra cred!
//       alert(age *=7); //age equals age times 7
//   }
// }
//
// calcDogYears(dogAge);

// const lifeTimeSupply = prompt("How old are you now?", "20");
// parseInt(age);
//   if(age == NaN) {
//     if(isNan(age))
//   }

// function calcLifetimeSupply(age, perDay) {
//   return (80 - age) * (365 * perDay);
//   let testArr = [age, perDay];
//   if(testForInts(testArr)){
//     var lifeTime = (80 - age) * (365 perDay);
//     alert(`uyou will need ${lifeTime} ${supplyOf} to last until you're 80.`);
//   } else {
//     var age = prompt("How old are you?");
//     var daily = prompt("How much do you use per day?");
//     lifeTime = calcLifetimeSupply(age, daily);
//   }
// }
