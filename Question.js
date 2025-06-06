// const num = [1, 2, 3, 4, 5, 6,7,8,9,10,11,12];
// const res = num.filter((x)=> x % 2 == 0)
// console.log(res)


// List of fruits
// const fruits = ["orange", "grapes", "apple", "mango", "banana", "watermelon"];
// const res = "app"; 
// const filterresult = fruits.filter(fruit => fruit.includes(res));
// console.log(filterresult); 

// const arr = [1, 2, 3, 4, 5];
// const total = arr.reduce((acc,current) => acc + current, 1);
// console.log(total);

// const num = [1, 2, 3, 4, 5, 6,7,8,9,10,11,12];
// const res = num.filter((x)=> x % 2 == 0)
// console.log(res)
// List of fruits

// const fruits = ["orange", "grapes", "apple", "mango", "banana", "watermelon"];
// const res = "app"; 
// const filterresult = fruits.filter(fruit => fruit.includes(res));
// console.log(filterresult); 

// const arr = [1, 2, 3, 4, 5];
// const total = arr.reduce((acc,current) => acc + current, 1);
// console.log(total);

// const fruits = ["orange", "grapes", "apple", "mango", "banana", "watermelon"];
// fruits.forEach((fruit) => {
//   console.log(fruit);
// });

// const name = "Shyam";
// function greet() {
//   console.log(`Hello ${name}`);
// }
// greet(); 

// const person = {
//   name: "Shyam",
//   age: 21,
//   address: "Junagadh"
// };
// const keys = Object.keys(person);
// console.log(keys); 

// const person = {
//   name: "Shyam",
//   age: 21,
//   address: "Junagadh"
// };
// const keys = Object.values(person);//object.key
// console.log(keys); 

// const person = {
//   name: "Shyam",
//   age: 21,
//   address: "Junagadh"
// };
// const entries = Object.entries(person);
// console.log(entries);

// const obj1 = { name: "Shyam" };
// const obj2 = { age: 21 };
// const result = Object.assign({}, obj1, obj2);
// console.log(result); 

// object = {
//     name:"Deep"
//     age:22
//     address:Junagadh
// }
// object.freeze(Deep);
// Deep.name(Fenil);
// console.log(Deep);


// const num = [1, 2, 3, 4, 5, 6,7,8,9,10,11,12];
// const res = num.filter((x)=> x % 2 == 0)
// console.log(res)
// List of fruits

// const fruits = ["orange", "grapes", "apple", "mango", "banana", "watermelon"];
// const res = "app"; 
// const filterresult = fruits.filter(fruit => fruit.includes(res));
// console.log(filterresult); 

// const arr = [1, 2, 3, 4, 5];
// const total = arr.reduce((acc,current) => acc + current, 1);
// console.log(total);

// const fruits = ["orange", "grapes", "apple", "mango", "banana", "watermelon"];
// fruits.forEach((fruit) => {
//   console.log(fruit);
// });

// const name = "Shyam";
// function greet() {
//   console.log(`Hello ${name}`);
// }
// greet(); 

// const person = {
//   name: "Shyam",
//   age: 21,
//   address: "Junagadh"
// };
// const keys = Object.keys(person);
// console.log(keys); 

// const person = {
//   name: "Shyam",
//   age: 21,
//   address: "Junagadh"
// };
// const keys = Object.values(person);//object.key
// console.log(keys); 

// const person = {
//   name: "Shyam",
//   age: 21,
//   address: "Junagadh"
// };
// const entries = Object.entries(person);
// console.log(entries);

// const obj1 = { name: "Shyam" };
// const obj2 = { age: 21 };
// const result = Object.assign({}, obj1, obj2);
// console.log(result); 

// object = {
//     name:"Deep"
//     age:22
//     address:Junagadh
// }
// object.freeze(Deep);
// Deep.name(Fenil);
// console.log(Deep);


// const person = {
//   name: "Deep",
//   age: 22,
//   address: "Junagadh"
// };
// Object.freeze(person);
// Deep.name = "Fenil";
// console.log(Deep);



// JavaScripatQuestion-------------------------------------------

// Question1 
function calculator(a, b, operator) {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return b !== 0 ? a / b : 'Error: Division by zero';
    case '%':
      return b !== 0 ? a % b : 'Error: Division by zero';
    case '**':
      return a ** b;
    default:
      return 'Error: Invalid operator';
  }
}

console.log(calculator(1, 4, '+'));
console.log(calculator(10, 6, '-'));
console.log(calculator(2, 8, '*'));
console.log(calculator(15, 3, '/'));
console.log(calculator(5, 3, '%'));
console.log(calculator(3, 2, '**'));


// Question 2 
function getMName(monthNumber) {
  switch (monthNumber) {
    case 1:
      return "January";
    case 2:
      return "February";
    case 3:
      return "March";
    case 4:
      return "April";
    case 5:
      return "May";
    case 6:
      return "June";
    case 7:
      return "July";
    case 8:
      return "August";
    case 9:
      return "September";
    case 10:
      return "October";
    case 11:
      return "November";
    case 12:
      return "December";
    default:
      return "Invalid month number";
  }
}
console.log(getMName(2));



// Question 3 
function getMessage(grade) {
  switch (grade.toUpperCase()) {
    case 'A':
      return "Needs improvement.";
    case 'B':
      return "Excellent work!";
    case 'C':
      return "Good job!";
    case 'D':
      return "Fair effort";
    case 'E':
      return "At risk. Put in more effort!";
    case 'F':
      return "Failed. Time to work harder.";
    default:
      return "Invalid grade input.";
  }
}
console.log(getMessage('C'));

// Question 4 
function checkBrowserSupport(browser) {
  switch (browser.toLowerCase()) {
    case 'chrome':
      console.log("Chrome is fully supported!");
      break;
    case 'firefox':
      console.log("Firefox has great compatibility!");
      break;
    case 'edge':
      console.log("Edge offers modern web features!");
      break;
    case 'safari':
      console.log("Safari is supported but may have some quirks.");
      break;
    case 'opera':
      console.log("Opera is a valid choice, but ensure compatibility!");
      break;
    default:
      console.log("Unknown browser. Please check support manually.");
  }
}
checkBrowserSupport('chrome');


// Question 5 
function checkEvenOdd(number) {
  switch (number % 2) {
    case 0:
      console.log(`${number} is even.`);
      break;
    case 1:
      console.log(`${number} is odd.`);
      break;
    default:
      console.log("Invalid input.");
  }
}
checkEvenOdd(13);
checkEvenOdd(6);
checkEvenOdd(77);


// Question 6 
function checkUserAction(role, action) {
  switch (role.toLowerCase()) {
    case 'admin':
      switch (action.toLowerCase()) {
        case 'create':
          return "Admin can create content.";
        case 'edit':
          return "Admin can edit content.";
        case 'delete':
          return "Admin can delete content.";
        default:
          return "Invalid action for admin.";
      }
    case 'user':
      switch (action.toLowerCase()) {
        case 'create':
          return "User can create content.";
        case 'edit':
          return "User can edit content.";
        case 'delete':
          return "User cannot delete content.";
        default:
          return "Invalid action for user.";
      }
    default:
      return "Invalid role.";
  }
}
console.log(checkUserAction('Admin', 'edit'));
console.log(checkUserAction('User', 'delete'));


// Question 7 
function getAgeGroup(age) {
  switch (true) {
    case (age >= 0 && age <= 11):
      return "Child";
    case (age >= 12 && age <= 17):
      return "Teen";
    case (age >= 18 && age <= 64):
      return "Adult";
    case (age >= 65):
      return "Senior";
    default:
      return "Invalid age";
  }
}
console.log(getAgeGroup(18));
console.log(getAgeGroup(55));
console.log(getAgeGroup(13));
console.log(getAgeGroup(-9));
console.log(getAgeGroup(9));


// Question 8 .
let fruit = 'kiwi';
switch (fruit) {
  case 'apple':
    console.log('Apple is selected.');
  case 'orange':
    console.log('orange is selected.');
  case 'kiwi':
    console.log('kiwi is selected.');
    break;
  default:
    console.log('No fruit selected.');
}


// Question 9 

let color = 'blue';

switch (color) {
  default:
    console.log('No matching color found.');
    break;
  case 'red':
    console.log('Red color selected.');
    break;
  case 'green':
    console.log('Green color selected.');
    break;
  case 'blue':
    console.log('Blue color selected.');
    break;
}



// Question 10 
switch (day) {
  case 1:
  case 2:
  case 3:
    console.log('It is a weekday.');
  case 4:
  case 5:
    console.log('It is a workday.');
    break;
  case 6:
  case 7:
    console.log('It is the weekend.');
    break;
  default:
    console.log('Invalid day.');
}


// Question 11 
const nums = [1, 2, 3, 4, 5];
const squaredNum = nums.map(num => num ** 2);
console.log(squaredNum);

// Question 12 
const names = ["RobertDowney", "Bob", "Chris", "TomCruise", "Smith", "MarkRuffalo", "vin", "alice"];
const longNames = names.filter(name => name.length > 5);
console.log(longNames);

// Question 13 
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddsum = num.reduce((accumulator, currentValue) => {
  if (currentValue % 2 !== 0) {
    return accumulator + currentValue;
  }
  return accumulator;
}, 0);
console.log(oddsum);

// Question 14 
Array.prototype.customMap = function (callback) {
  const resultArray = [];
  for (let i = 0; i < this.length; i++) {
    resultArray.push(callback(this[i], i, this));
  }
  return resultArray;
};
const numbers = [1, 2, 3, 4];
const squaredNumbers = numbers.customMap(num => num ** 2);
console.log(squaredNumbers);

// Question 15 
function repeat(fn, n) {
  for (let i = 0; i < n; i++) {
    fn();
  }
}
const sayHello = () => {
  console.log("Hello!");
};
repeat(sayHello, 3);


// Question 16 
const indexnum = [10, 20, 30, 40, 50];
indexnum.forEach((value, index) => {
  console.log(`Index: ${index}, Value: ${value}`);
});


// Question 17 =
const words = ["Welcome", "to", "Parul", "University"];
const sentence = words.reduce((acc, word) => acc + " " + word, "");
console.log(sentence);

// Queestion 18 
const wds = ["racecar", "hello", "madam", "world", "level", "javascript"];
const nonPalindromes = wds.filter(word => word !== word.split("").reverse().join(""));
console.log(nonPalindromes);

// Question 19 
const numArray = [1, 2, 3, 4, 5, 6];
const oddeven = numArray.map(num => (num % 2 === 0 ? "Even" : "Odd"));
console.log(oddeven);

// Question 20 
const NumArr = [2, 2, 3, 5, 5, 8, 8, 8, 6, 6, 1, 4, 4, 4, 4];
const countOccurrence = NumArr.reduce((acc, num) => {
  acc[num] = (acc[num] || 0) + 1;
  return acc;
}, {});
console.log(countOccurrence);


// Question 21 
function delayFunction(callback, delay) {
  setTimeout(callback, delay);
}
function greet() {
  console.log("Welcome to Parul University");
}
delayFunction(greet, 2000);

// Question 22 
let user = [
  { name: "Smith", age: 28 },
  { name: "Jack", age: 12 },
  { name: "Tim", age: 20 },
  { name: "Harry", age: 40 },
  { name: "Mark", age: 17 },
  { name: "Peter", age: 55 }
];
const adults = user.filter(user => user.age > 18);
console.log(adults);

// Question 23 
const num1 = [1, 2, 3, 4];
const double = num1.map(num => num * 2);
console.log(double);
numbers.forEach(num =>
  console.log(num * 2));


// Question 24 
let sum2 = sum1.reduce((acc, num) => acc + num, 0);
console.log(sum2);


// Question 25 
function applyOperation(number, operation) {
  return operation(number);
}
function square(x) {
  return x * x;
}
function cube(x) {
  return x * x * x;
}
console.log(applyOperation(5, square));
console.log(applyOperation(3, cube));

// Question 26
function bankAccount(accNumber, initialBalance) {
  this.accNumber = accNumber;
  this.balance = initialBalance;

  this.deposit = function (amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    } else {
      console.log("Deposit amount must be positive.");
    }
  };

  this.withdraw = function (amount) {
    if (amount > 0) {
      if (this.balance >= amount) {
        this.balance -= amount;
        console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
      } else {
        console.log("Insufficient balance.");
      }
    } else {
      console.log("Withdrawal amount must be positive.");
    }
  };
}
const myAccount = new bankAccount("SB-123", 1500);
myAccount.deposit(500);
myAccount.withdraw(400);
myAccount.withdraw(1800);


// Question 27 
const person = {
  name: "Praful",
  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
};
person.sayHello();

// Question 28 =
const persondetails = {
  name: "Praful",
  age: 22,
  profession: "Developer"
};
console.log(Object.keys(persondetails));

// Question 29 
const totalsum = {
  a: 10,
  b: 20,
  c: 30,
  d: 40
};
const sum = Object.values(totalsum).reduce((acc, num) => acc + num, 0);
console.log(sum);


// Question 30 
const obj1 = { name: "Praful", age: 22 };
const obj2 = { profession: "Developer", location: "Vadodara" };
const mergedObj = Object.assign({}, obj1, obj2);
console.log(mergedObj);


// Question 31 
const userinfo = {
  name: "Praful",
  age: 21
};
Object.freeze(user);
userinfo.age = 23;
userinfo.location = "Vadodara";
delete userinfo.name;
console.log(userinfo);



// Question 32 
const userInformation = {
  name: "Praful",
  age: 22
};
Object.seal(userInformation);
userInformation.age = 25;
userInformation.location = "Gujarat";
delete userInformation.name;
console.log(userInformation);


// Question 33 
const developerdetails = {
  name: "Praful",
  age: 25,
  profession: "Developer",
};
console.log(developerdetails.hasOwnProperty("age"));
console.log(developerdetails.hasOwnProperty("location"));


// Question 34 
const calculate = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  }
};
console.log(calculate.add(9, 8));
console.log(calculate.subtract(27, 10));

// Question 34 
const student = {
  name: "Praful",
  age: 22,
  course: "Computer Science",
  getDetails() {
    return `Student Name: ${this.name}, Age: ${this.age}, Course: ${this.course}`;
  }
};
console.log(student.getDetails());


// Question 36 
function clearObject(obj) {
  return Object.fromEntries(
    Object.entries(obj).filter(([_, value]) => value != null)
  );
}
const data = { name: "Praful", age: null, location: "Gujarat", profession: undefined };
const clearedData = clearObject(data);
console.log(clearedData);


// Question 37 
const userdata = {
  name: "Praful",
  age: 22
};
Object.seal(userdata);
userdata.age = 25;
userdata.location = "Gujarat";
delete userdata.name;
console.log(userdata);
//Object freeze 
const userfacts = {
  name: "Praful",
  age: 21
};
Object.freeze(userfacts);
userfacts.age = 23;
userfacts.location = "Vadodara";
delete userfacts.name;
console.log(userfacts);

// Question 38 
const obj = {
  name: "Praful",
  sayHello: () => {
    console.log(`Hello, ${this.name}!`);
  }
};
obj.sayHello();


// Question 39 
const informartion = {
  name: 'Praful',
  greet() {
    console.log(`Hello, ${this.name}`);
  }
};
setTimeout(user.greet, 1000);


// Question 40
const mydetails = {
  name: "Praful",
  age: 22,
  city: "Vadodara"
};
const entries = Object.entries(user);
console.log(entries);
