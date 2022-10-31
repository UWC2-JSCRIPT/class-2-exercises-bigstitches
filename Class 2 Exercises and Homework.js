// 1. Create an object representation of yourself
// Should include: 
// - firstName
// - lastName
// - 'favorite food'
// - bestFriend (object with the same 3 properties as above)

const me = {
    firstName: 'Eileen',
    lastName: 'Beck',
    'favorite food': 'Pop Rocks',
    bestFriend: {firstName: 'Ashly', lastName: 'Thomas', 'favorite food': 'fried chicken'}
}

// 2. console.log best friend's firstName and your favorite food
console.log(me.bestFriend.firstName)
console.log(me["favorite food"])


// 3. Create an array to represent this tic-tac-toe board
// -O-
// -XO
// X-X
const anotherboard = 
    [['-', 'o', '-'],
     ['-', 'x', 'o'],
     ['x', '-', 'x']];

// 4. After the array is created, 'O' claims the top right square.
// Update that value.
anotherboard[0][2] = 'O';


// 5. Log the grid to the console.
console.table(anotherboard)


// 6. You are given an email as string myEmail, make sure it is in correct email format.
// Should be 1 or more characters, then @ sign, then 1 or more characters, then dot, then one or more characters - no whitespace
// i.e. foo@bar.baz
// Hints:
// - Use rubular to check a few emails: https://rubular.com/
// - Use regexp test method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test

  // const emailTest = new RegExp(/([a-zA-Z]|\d)([a-zA-Z]|\d|[^!#$&*(){}|\/?])+\w+@([a-zA-Z]|\d)+[.][a-zA-Z]{3}/);
  const emailTest = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  var myEmail = 'emailTest@test.com';
  console.log(emailTest.test(myEmail));



// 7. You are given an assignmentDate as a string in the format "month/day/year"
// i.e. '1/21/2019' - but this could be any date.
// Convert this string to a Date
const assignmentDate = '1/21/2019';
let dateArray = assignmentDate.split("/");
var stringDate = new Date (dateArray[2], (dateArray[0]-1), dateArray[1]);

// 8. Create a new Date instance to represent the dueDate.  
// This will be exactly 7 days after the assignment date.
var dueDate = new Date (2022, 9, 30+7);

// 9. Use dueDate values to create an HTML time tag in format
// <time datetime="YYYY-MM-DD">Month day, year</time>
// I have provided a months array to help
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

let htmlTag = '<time datetime="YYYY-MM-DD">${dueDate.toDateString()}</time>'

// 10. log this value using console.log
console.log(htmlTag);