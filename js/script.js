//*console.log("Hello World");*//
//*let firstName = prompt(“What is your first name?”, “Maria”);*//
//*const lastName = prompt (“Wheat is your last name?”, “is..”);*//
//*console.log(firstName);*//
//*alert(lastName);*//
//*Let birthday = prompt(“What’s your birthday?”, “Please answer in the following format: 1/1/1900”);*//
//*confirm(new Date(birthday));*//
//*whatever I want*//


//*console.log(!bestNumber);*//

//*var bestNumber = 42*//


//*var number = 1;*//
//*console.log(string === number);*//

//*let obj1 = {name:"Ryeker"};*//
//*let obj2 = {name:"Ryeker"};*//


//*var = 1;*//
//*var newString "1";*//


//*let*//

// const bestMovie = [];
// bestMovie !== undefined ? alert('it exists!') : alert('It doesnt exist!');
// if(typeof(bestMovie) == 'string'){
// alert('yay its a string');
// } else if(typeof(bestMovie) == 'number'){
//   alert('you gave me a number')
// } else {
//   alert('Its not a string')
// }

// switch(typeof(bestMovie)) {
  // case 'string':
      // alert('Yay it\'s a string');
      // break;
  // case 'number':
      // alert('You gave a number');
      // break;
  // case 'boolean':
      // alert("You gave me a boolean");
      // break;
  // case 'object':
      // alert('an object!')
      // break;
    // default:
      // alert('its and array');
      // break;
// }

// var userAge = confirm('Are you over 18?', 'no');

// if(userAge >= 18) {
  // console.log('it worked');
  // do stuff
// } else {
  // alert('You are not old enough...');
// }

// var userAge = confirm('Are you over 18?');

// if(userAge == true) {
  // under80 = confirm('Are you under 80 yeasrs old?');
  // if(under80) {
    // var starWars = confirm("Do you like star wars?");
    // if(starWars) {
      // alert('you rock!');
      // }
// } else {
  // confirm('Do you like prunes?');
  // }
// } else {
  // alert('You are not old enough...');
// }
// end JS day 3

// *BEGINNING OF DAY 4

//var arr = ["thingOne", 22, true, {}, []];
//console.log(arr[0],arr[3]);

var myArr = ["stay", 21, true, 2003];
// console.log(myArr, myArr [4]);
// console.log(typeof(myArr));
// console.log(Array.isArray(myArr));

// var bestTeacher = prompt('Who is best teacher?', 'Ron');
// myArr.push(bestTeacher);

// var removedItem = myArr.splice(2, 1);
// console.log(myArr);

// var removedItem = myArr.splice(2, 1, false);
//  starting at the second index, deleting 1, replace the 3rd index with false
// console.log(myArr);

// var removedItem = myArr.splice(2, 0, false);
//  starting at the second index, delete nothing '0' (must have a number of how many to delete - even 0), you are inserting 'false'
// console.log(myArr);

// negative integers:
// var removedItem = myArr.splice(-2, 1);
// console.log(myArr);

// Slice method - make a copy
// var removedItem = myArr.slice();
// console.log(removedItem, myArr);

// Slice method - make a copy - beginning index
// var removedItem = myArr.slice(2);
// console.log(removedItem, myArr);

// Slice method - make a copy - only want 0 and index 1
// var removedItem = myArr.slice(0, 2);
//  0 is where is styarts and at 2 is where is stops. 0 & 1 are what is displayed.
// console.log(removedItem, myArr);

// Slice method - make a copy - beginning index
// var removedItem = myArr.slice(2);
// console.log(removedItem, myArr);

var userName = prompt('Give me your user name.');
var firstName = prompt('Give me your name.');
var lastName = prompt('Give me your last name.')
var favColor = prompt("What is your favorite color?", "blue or yellow");
switch(favColor.toLowerCase()) {
  case 'blue':

  //ES5 - String interpolation
    alert("Hey there, " + firstName + " it looks like you love " + favColor + " and your last name is " + lastName + ".");

//ES6 String interpolation
  alert(`Hey there, ${firstName} it looks like you love ${favColor} and your last name is ${lastName}`);

    break;
  case 'yellow':
    alert(userName + "You are so yellow..");
    break;
  default:
  alert('Please answer with a valid color.');
}

// var arr = [1, 2, 3, 4, 5];
// ifArr

// Nested arrays
var favoriteMovie = ['Star Wars VI', '1983'];
var secondFavorite = ['Return of the King', '2003'];
var thirdFavorite = ['Equilibrium', '2002'];
var myFavoriteMovies = [];
myFavoriteMovies.push(favoriteMovie, secondFavorite, thirdFavorite);
//Result:
[['Star Wars VI', '1983'], ['Return of the King', '2003'], ['Equilibrium', '2002']];

//  JUST THE YEARS ---HARD WAY
var movieYears = [];
movieYears.push(myFavoriteMovies[0][1], myFavoriteMovies[1][1],myFavoriteMovies[2][1]);
alert(movieYears);

// FIRST BRACKET IS ARRAY, brackets inside of array are the index - starts at 0

var firstMovie = ['Movie1', 'Jack Black'];
var secondMovie = ['Movie2', 'John Travolta'];
var thirdMovie = ['Movie3', 'John Wayne'];
var fourthMovie = ['Movie4', 'Bob Sagat'];
var fifthMovie = ['Movie5', 'Tom Jones'];
var myFavoriteMovies = [];
myFavoriteMovies.push(firstMovie, secondMovie, thirdMovie, fourthMovie, fifthMovie);
console.log(myFavoriteMovies);
var movieTitles = [];
movieTitles.push(firstMovie[0], secondMovie[0], thirdMovie[0], fourthMovie[0], fifthMovie[0])
alert(movieTitles);

// fav and least fav
// var favAndleastfav = [];
// favAndleastfav.push(firstMovie, thirdMovie);



// for loop
for(var i = 0; i < myFavoriteMovies.length; i++) {
  if(myFavoriteMovies[i][0] === "Movie1") {
    alert(`${myFavoriteMovies[i][0]} is my favorite movie with ${myFavoriteMovies[i][1]}.`)
  }
}

// Do WHILE
var i = 0;

do {
  console.log(myFavoriteMovies[i]);
  i++;
} while(i < myFavoriteMovies.length);
