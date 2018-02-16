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
//DAY 6

//Day 7
// var h1 = document.createElement("h1");
// var p = document.createElement('p');// append a p tag
// var body = document.querySelector("body");
// //how you put the writing inside of it...
// h1.innerHTML = "hello world";
// //how do we add it to the body tag---add in the body tag above. ONLY EVER ONE body tag
//
// body.appendChild(h1); //h1 is not a string because it is a variable var h1
// p.textContent = "whoa!!!";
//
// body.appendChild(h1);
// body.appendChild(p);
// //create new element
// var newDiv = document.createElement("div");
// //style new element by color and height
// newDiv.style.backgroundColor = "green";
// newDiv.style.height = "120px";
// //not added until this line
// body.insertBefore(newDiv, p);
//
// //us predefined classes and add or remove id's
//
// //body.className = "red-background";
// //in order to access the classes now..
// myDiv.addEventListener('click', () => {
//  body.classList.toggle('red-background');
//  body.classList.replace("white-text", "purple-text");
// });
// //important that it returns a boolean...
// body.classList.contains("white-text")
//
// var newImg = document.createElement("img")//insert name of
// newImg.setAttribute("src", "https://www.amazon.com/Flamingo-Watercolor-Art-DJ-Rogers/dp/B013TXO84S"); //2 arguments
//
// body.appendChild(newImg);

//DAY 7 Cont...@FIZZBUZZ TEST:
//to count..need an incrementor
// for (let i = 0; i <= 100; i++) {
//   if(i % 3 === 0 && i % 5 === 0) {//if i is a multiple of 3
//     console.log('FizzBuzz');
//   } else if(i % 3 === 0) {
//     console.log(Fizz);//define your logic - what represents your number?
//   } else if(i % 5 === 0); {
//     console.log('Buzz');
//   }
//DAY 7 TAKE HOME... FORMS:
// input:number = input type/name/id
//  <form action> //wrap input in forms, formmethod (contact forms, surveys, reset password, )
  // action attribute <form action="post">
// const orderForm = document.forms.order;
//
// console.log(orderForm.quantity.value);

//attach event listener..
// const orderForm = document.forms.order;
//
// var submitBtn = orderForm.submit;
//
// document.addEventListener('submit', function(e) {
//   e.preventDefault();
//   if(orderForm.quantity.value == null) {
//     //how many times they click it
//     //
//   }
//   //validation/varification
// })

//WHAT IS THIS???
// var checkScope = function() {
//   console.log(this);
// }
//this. refers to the window - it was not bound to a function scope
//allows you to perform closure
//defined by the way the its called
// var name = 'Peter';
//changed name to global
// function wrapLog() {
//   logThis();
// }

// wrapLog();
//no matter what - if you console.log this without changing context, it will always refer back to the window
//trying to seperate your code of functions
// var obj = { //creating an object
  // a: checkScope //creating a key a's value is checkScope
// } //the checkScopemust be called (as it is below in obj.a)

// obj.a(); //trying to see what is this in that checkScope
//because it it set to a function
//-implicet binding-
//only applys to object
// //this binding will last only as long as you are calling a function like THIS
//
// var checkScope = function() {
//   console.log(this);
// }
//
// var name = 'Peter';
// var obj = { //creating an object
//   a: checkScope //creating a key a's value is checkScope
// }
// obj.a();
// YOU DONT KNOW JS for free on GITHUB - check it
//3 ways to bind - know these!
//methods that get called
//default, explicit, implicit

//SCOPE
//this and scope are not the same thing, this has to obey scopes rules
//scope doesnt have to follow this rules
//SCOPE where you functions and variables live, namespace
// var me = 'Ryeker';
//
// function logMe() {
//   var me = "jonathon";
//   console.log(me);
// }
//
// console.log(me);
// //const
// const me = 'Ryeker';
//
// function logMe() {
//   const me = "jonathon";
//   console.log(me);
// }

// console.log(me); //its going to look in the global scope for this variable(me)


//Custom object
//primitive - are the only things that are not object
//string, boolean, number can be created as an object version

//function, methods, strings are objects

//everything you make in JS, has a prototype/blueprint,
// //newString - use the rules for string method using your value (hello world)
// var myString = new String('Hello World')
// console.log(Object.getPrototypeOf(myString));
//use the rules of the object, then tell me the prototype of the string is
//different from classical inheritence


//DAY 9 cont..

//OBJECTS
// . notation,
// usually prefered and faster.
// cannot always be used when there are numbers as keys
// var admin = {     in admin what is the key for peter =
//  username: 'peter'
//  password: 'superjbsdfj'
//  date: newDate(01/01/2011)
//};
//  console.log(admin.password)
//---whatever keu name is will be .password
// bracket notation
//---whatever key name is, has to be in brackets
// var product = {
//  name: 'soap'
//  price: "$10.99"
//  notes: "Great for cleaning"
//};
// to gather all the data in an array - use a loop
// example of a loop: i is your controller, incriments by 1 (i++), will stop at the length of the data becuase it says data.length
// let i = 0;
// do{
//  console.log(data[i].notes);
//  i++;
// }while(i < data.length);
// a loop need a place to start, jumping incriments, and a place to end
//javascript inheritance, constructor member of a prototype will always tell you the function
// constructor is something that can be used over and over
// in console log look for proto and you can see what kind of prototype it is
// var myObj = {          //prototype
//   firstName: 'Danielle' //key =firstName object='Danielle'
//   lastName: 'Handler'
// }
// function Name(first, last) { //define the function for the user
//   this.first = first;  //defining placeholders, that get passed in, in order of function line
//   this.last = last;  //defining
// };
// let newPerson = new Name("Danielle", "Handler"); //writing the constructor function call
// console.log(newPerson);

// constructor function (above)
// singleton = each let (newPerson) or (otherPerson)



//for a form first make a click eventListener to the submit button or..

var newUserForm = document.forms.newUser;
newUserForm.addEventListener("submit", function(e) {
  login(e);
}) //can only be used in a form
//submit is an arguement for eventlistener
//login enter the e to pass in the event to stop it from submitting..
//whatever is called has to match the event below in the function (e)
document.querySelector(".newUser");

function User(a, b){
  this.username = a;
  this.password = b;
}
//var user = []; //this is used to make an array of saved users

function login(e) {
  e.preventDefault();
  var username = document.querySelector('.username').value;  //could use querySelector
  //above line give you what the user typed in
  // if you are getting null, you are not getting what the value is, .value would be missing
  var password = newUserForm.password.value; //gives you what the user entered
  var newUser = new User(username, password);
  //return newUser; //doing return will call the answer
  console.log(newUser);
}
//if you see new it makes a 
//an object made from an obect of another function
//function Vehicle(wheels,type, engine, color) {   //function Vehile (this is the constructor function)
// this.wheels = wheels;
// this.type = type;
// this.engine = engine;
// this.color = color;
// }
//function Engine(numCyls, injSys, vRooms, horsees) {
// this.numCyls = numCyls;
// this.injSys = injSys;
//this.vRooms = vRooms;
//this.horsees = horsees;
}
//make a reference to engine to pass into vehicle
//var myEngine = new Engine(2, 'crap', 0.00, "???");
//make a reference for vehicle
//var myVehicle = new Vehicle(4, 'car', meEngine, "faded gret");
//console.log(saturn);
