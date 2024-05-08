function createParagraph() {
    const para = document.createElement("p");
    para.textContent = "You clicked the button!";
    document.body.appendChild(para);
  }
  
  const buttons = document.querySelectorAll("button");
  
  for (const button of buttons) {
    button.addEventListener("click", createParagraph);
  }

      // Get the last modified date of the document
      let lastModifiedDate = document.lastModified;

      // Find the paragraph element with the id "lastModified"
      let paragraphElement = document.getElementById("lastModified");
  
      // Set the text content of the paragraph element to display the last modified date
      paragraphElement.textContent = "Last modified: " + lastModifiedDate;


// // Concatenation
// const me = "Argie";
// const age = 22;
// // Template string
// const hello = `My name is ${me} and I am ${age} years old`;

// console.log(hello);

// Array- variable that hold multiple values
// const array = 'Egg, Chicken, Milk, Oil'
// console.log(array.split(', '))

// const fruits = ['apples' , 'orange', 'mango', 'banana', 10, 20]
// console.log(fruits)

// const person = {
//   first:'Gesesis',
//   last:'Manila',
//   hobbies: ['music', 'movies' ,'sports'],
//   location: {
//     street: 'Libertador',
//     city: 'Candelaria',
//     province: 'Zambales'
//     }
//   }
// person.email = 'genesis123@hmail.con'
// console.log(person)

// const todos = [
//   {
//     id:1,
//     text: 'take out the trash',
//     isCompleted: true
//   },
//   {
//     id:2,
//     text: 'meet the boss',
//     isCompleted: true
//   },
//   {
//     id:3,
//     text: 'dentist appt',
//     isCompleted: false
//   },
// ];


// console.log(todos[2].text)


// For

// for (let i=0; i<10; i++) {
//   console.log(i);
// }

// forEach, map, filter

// todos.forEach(function(todo) {
//     console.log(todo.text);
// });  

// const todoText = todos.map(function(todo) {
//   return todo.text;
// });

// console.log(todoText);

// const todoCompleted = todos.filter(function(todo) {
//   return todo.isCompleted ===true;
// }).map(function(todo){
//   return todo.text;
// });

// console.log(todoCompleted);

// if statement 
// const x = 6;
// const y = 11;

// if (x > 5 && y > 10){
//   console.log('x is more that 5 or y is more tahn 10')
// }

// // turnery operator
// const x = 9;

// const color = x > 10 ? 'blue' : 'red';

// console.log(color)

// switch (color) {
//   case 'blue':
//     console.log('The color is blue')
//     break;
//   case 'red':
//     console.log('The color is red')
//     break;
//   default:
//     console.log('the color is NOT blue or red')
//     break;
// }

// function

const days = 6;
const limit = 30;
let studentReport = [ 11,42,33,64,29,37,44];

let = 0;
while(i<limit){
  console.log(i)
  i++;
}