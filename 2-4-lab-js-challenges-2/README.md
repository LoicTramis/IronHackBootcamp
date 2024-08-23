![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | JS Challenges II (Intermediate)

<p align="center">
  <img src="https://media.giphy.com/media/hNk0I3uRsRkZ4pT5l8/giphy.gif" alt="JS Technical Challenges" width="300"/>
</p>

<br>

<details>
  <summary>
   <h2>Learning Goals</h2>
  </summary>

 This exercise allows you to practice and apply the concepts and techniques taught in class. 

  Upon completion of this exercise, you will be able to:

  - Determine correctly the variable scope in JavaScript code,
  - Interpret correctly how hoisting affects the variables and functions in JavaScript code,
  - Determine how variable shadowing affects the variables in JavaScript,
  - Interpret correctly how primitive values are passed and compared in JavaScript,
  - Interpret correctly how objects and arrays are passed and compared in JavaScript,
  - Interpret correctly how function parameters behave in JavaScript,

  <br>
  <hr> 

</details>

## Introduction

Are you ready to put your coding skills to the test? In this exercise, you will be given a series of short code challenges that simulate the types of questions you may encounter during a Junior Developer job interviews or technical assessments. The challenges are designed to help you practice and reflect on the concepts of scope, hoisting, variable shadowing, and passing value versus passing reference. By examining the code and trying to predict the output, you will put your problem-solving skills to the test and gain a better understanding of how these concepts work in JavaScript.

<br>

## Requirements

- Fork this repo.
- Clone this repo.

<br>

## Submission

- Upon completion, run the following commands:

```bash
git add .
git commit -m "Solved lab"
git push origin master
```

- Create a Pull Request and submit your assignment

<br>



## Instructions

We encourage you to try to solve the challenges without running the code first. Once you have written down your answer for a challenge, run the code and check if your answer was correct. If your answer was incorrect, try to understand why the code behaves the way it does.

<br>

You should record your answers in the `answers.md` file and provide a brief explanation for each answer. For example:

```text
1. Challenge 1:
  - Answer: a
  - Explanation: The output of the code will be "123" because...
```

<br>

### Challenge 1

```javascript
// Challenge 1
let foo = "abc";

function bar() {
  foo = "xyz";
  console.log(foo);
}

bar();


console.log(foo);
```

<br>

Given the code above, answer the following questions:

1. Which of the following will be the output of the above code? Why?
  <br>a) `"abc"` and `"xyz"`
  <br>b) `"xyz"` and `"xyz"`
  <br>c) `undefined` and `"xyz"`
  <br>d) ReferenceError: foo is not defined


<br>

Once you write down your answer, run the code above and check if it is correct.


<br>

### Challenge 2

```javascript
// Challenge 2
let a = 1;

function example(a) {
  a = 10;
  console.log(a); // Console log 1
}

example(a);


console.log(a);  // Console log 2
```

<br>

Given the code above, without running the code, answer the following question:

1. Which of the following will be the output of the above code? Why?
  <br>a) `10` and `10`
  <br>b) `1` and `10`
  <br>c) `10` and `1`
  <br>d) ReferenceError: a is not defined


<br>

Once you write down your answer, run the code above and check if it is correct.

<br>

### Challenge 3

```javascript
// Challenge 3

sayHi();

function sayHi() {
  console.log("Hi there!");
}
```

<br>

Given the code above, without running the code, answer the following question:
1. What will be the output of the code above? Why?
  <br>a) `ReferenceError: sayHi is not defined`
  <br>b) `undefined`
  <br>c) `"Hi there!"`
  <br>d) `TypeError: sayHi is not a function`

<br>

Once you write down your answer, run the code above and check if your answer was correct.


<br>

### Challenge 4

```javascript
const a = { num: 42 };
const b = a; 

b.num = 90;

console.log(a);
```

<br>

Given the code above, without running the code, answer the following question:
1. What will be the output of the code above? Why?
  <br>a) TypeError: Assignment to constant variable.
  <br>b) `{ num: 42 }`
  <br>c) `{ num: 90 }`
  <br>d) ReferenceError: a is not defined


<br>

Once you write down your answer, run the code above and check if your answer was correct.


<br>

### Bonus: Challenge 5 | Two Rabbits and a Magic Hat :rabbit: :rabbit2: :tophat:

```javascript
function magicHat(obj) {
  obj.age = 10;
  obj = { name: "Ada", age: 20 };
  return obj;
}
  
const rabbit1 = { name: "Bob", age: 30 };
  
const rabbit2 = magicHat(rabbit1);
  
console.log("rabbit1: ", rabbit1);
console.log("rabbit2: ", rabbit2);
```

<br>

Given the code above, without running the code, answer the following question:
1. What will be the output of the code above? Why?
  <br>a) `{ name: "Bob", age: 30 }` and `{ name: "Ada", age: 20 }`
  <br>b) `{ name: "Bob", age: 30 }` and `{ name: "Bob", age: 10 }`
  <br>c) `{ name: "Bob", age: 10 }` and `{ name: "Ada", age: 20 }`
  <br>d) ReferenceError: obj is not defined

<br>

Once you write down your answer, run the code above and check if your answer was correct.


<br>
