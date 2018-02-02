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
