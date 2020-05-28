# programming_tasks

## Tasks for students

**1. What will be the output of the following Python code? Explain.**
```python
a = [1,2]
b = [1,2]

c = [(x,y**2) for x in a for y in b] 
print(c)﻿
```
- a. [(1, 1), (1, 4), (2, 1), (2, 4)]
- b. [(1, 1), (1, 2), (2, 1), (2, 2)]
- c. [(1, 1), (1, 2), (2, 2), (2, 4)]
- d. [(1, 1), (1, 4), (2, 1), (2, 2)]
- e. Error

**2. What will be the output of the following Python code? Explain.**
```python
a = [1,2,3,4,5,6,7,8,9,10]
print(a[-1:-5])﻿
```
- a. [2,3,4,5]
- b. [5,4,3,2]
- c. [10,9,8,7]
- d. []
- e. Error

**3. What will be the output of the following Python Code? Explain.**
```python
def fn(data1, data2):
    return {data1, data2}

list1 = [1, 2, 3, 4, 5]
list2 = [5, 6, 7, 8, 9]

z= fn(tuple(list1),tuple(list2))

print(z, type(z))﻿
```
- a. {1:5, 2:6, 3:7, 4:8, 5:9} <class 'dict'>
- b. {1, 2, 3, 4, 5, 6, 7, 8, 9} <class 'set'>
- c. {[1, 2, 3, 4, 5], [5,6,7,8,9]} <class 'dict'>
- d. {(1, 2, 3, 4, 5), (5, 6, 7, 8, 9)} <class 'set'>
- e. Error

**4. What will be the output of the following Python code? Explain.**
```python
def product(a, b):
    return a * b


def add(a, b):
    return a + b


answer = (product if True else add)(2, 3)
print(answer)﻿
```
- a. 5
- b. 6
- c. 11
- d. Error

**5. What will be the output and why it is so ?**
```python
d = {True: "guvi", 1: "Good night"}

print(d)
 ```
# Self Explanatory JAVASCRIPT concepts

*You can try online javascript editor here
[js.do](https://js.do/).*

**Introduction :**          
JavaScript is a programming language initially designed to interact with elements of web pages.

JavaScript allows you to add interactivity to a web page
It is often used with HTML and CSS to enhance the functionality of a web page such as validating forms, creating interactive maps, and displaying animated charts.

**Set - 0000**

**Q1 :**
**What is variable declaration ?**
```javascript
var declaration

console.log(declaration) // undefined
```
variables are initialized with the value of undefined when they are created. What that means is if we try to log the declaration variable, we’ll get undefined.

**Q2 :**
**What is variable intialization ?**
```javascript
var declaration

console.log(declaration) // undefined

declaration = 'This is an initialization'
```
In contract to variable declaration, variable initialization is when you first assign a value to a variable.we’re initializing the declaration variable by assigning it to a string(here).

**Q3 :**
**What is scope ?**

Scope defines where variables and functions are accessible inside of your program. There are two kinds of scope - global scope, and function scope.

**Q4 :**
**What is local scope and global scope ?**

All variables exist within a scope that determines the lifetime of the variables and which part of the code can access them.

JavaScript mainly has global and function scopes. ES6 introduced a new scope called block scope.
```javascript
function say() {
  var message = "Hi";
  
  return message;
}
```
If you declare a variable in a function, JavaScript adds the variable to the function scope. In case you declare a variable outside of a function, JavaScript adds it to the global scope.

The message variable is a local variable in the above example. In other words, it only exists inside the function

*If you try to access the message outside the function as shown in the following example, you will get a ReferenceError because the message variable was not defined:*
```javasript
function say() {
    var message = 'Hi';
}
console.log(message); // ReferenceError
```
**Q5 :**
**What is Variable shadowing ?**
```javascript
// global variable
var message = "Hello";

function say() {
    // local variable
    var message = 'Hi';
    console.log(message); // which message?
}
say();// Hi

console.log(message); // Hello

```
we have two variables that share the same name: message. The first message variable is a global variable whereas the second one is the local variable.

*Inside the say() function, the global message variable is shadowed. It cannot be accessible inside the say() function but outside of the function. This is called variable shadowing.*

**Q6 :**
**What is Non-Strict Mode?**

*Non-Strict mode*
```javascript
// global variable
var message = "Hello";
function say() {
    // local variable
    message = 'Hi';
    console.log(message); // which message?
}
say();// Hi
console.log(message); // Hi
```
In this example, we define a global variable named message. In the say() function, we reference the global message variable by omitting the var keyword and change its value to a string of Hi.

Although it is possible to refer to a global variable inside a function, it is not recommended. This is because the global variables are very difficult to maintain and potentially cause much confusion.
```javascript
function say() {
    message = 'Hi'; // what?
    console.log(message);
}
say(); // Hi
console.log(message); // Hi
```

When you execute the script, it outputs the  Hi string twice in the output.

Because when we call the say() function, the JavaScript engine looks for the variable named message inside the scope of the function.

As a result, it could not find any variable declared with that name so it goes up to the next immediate scope which is the global scope in this case and asks whether or not the message variable has been declared.

*Because the JavaScript engine couldn’t find any of global variable named message so it creates a new variable with that name and adds it to the global scope.*

**Q7 :**
**What is Strict Mode?**

*Strict mode*

To avoid creating a global variable accidentally inside a function because of omitting the var keyword, you use the strict mode by adding the "use strict"; at the beginning of the JavaScript file (or the function) as follows:
```javascript
"use strict";

function say() {
    message = 'Hi'; // ReferenceError
    console.log(message);
}
say(); // Hi
console.log(message); // Hi
```
**Q8 :**
**What is Hoisting?**

When executing JavaScript code, the JavaScript engine goes through two phases:

- Parsing
- Execution

1. In the parsing phase, The JavaScript engine moves all variable declarations to the top of the file if the variables are global, or to the top of a function if the variables are declared in the fucntion.

2. In the execution phase, the JavaScript engine assigns values to variables and execute the code.

*Hoisting is a mechanism that the JavaScript engine moves all the variable declarations to the top of their scopes, either function or global scopes.*

If you declare a variable with the var keyword, the variable is hoisted to the top of its enclosing scope, either global or function scope.
```javascript
console.log(message); // undefined
var message;
```
As a result, if you access a variable before declaring it, the variable evaluates to undefined.
```javascript
var message;
console.log(message); // undefined
```
The JavaScript engine moves the declaration of the message variable to the top, so the former code snippet  is equivalent to the latter.

**Q9 :**
**How does the javascript engine intreprets the following code ?**
```javascript
function discountPrices (prices, discount) {
  console.log(discounted) // undefined

  var discounted = []

  for (var i = 0; i < prices.length; i++) {
    var discountedPrice = prices[i] * (1 - discount)
    var finalPrice = Math.round(discountedPrice * 100) / 100
    discounted.push(finalPrice)
  }

  console.log(i) // 3
  console.log(discountedPrice) // 150
  console.log(finalPrice) // 150

  return discounted
}
```
All the variable declarations were assigned a default value of undefined. That’s why if you try access one of those variables before it was actually declared, you’ll just get undefined.

```javascript
function discountPrices (prices, discount) {
  var discounted = undefined
  var i = undefined
  var discountedPrice = undefined
  var finalPrice = undefined

  discounted = []
  for (var i = 0; i < prices.length; i++) {
    discountedPrice = prices[i] * (1 - discount)
    finalPrice = Math.round(discountedPrice * 100) / 100
    discounted.push(finalPrice)
  }

  console.log(i) // 3
  console.log(discountedPrice) // 150
  console.log(finalPrice) // 150

  return discounted
}
```

Since var is function scope we are able to access *i*, *dicountedPrice*, *finalPrice*
which means we can access those varibles wherever we want under function (here discountPrices)

It is not the same for *let*

**Q10:**
**What is the difference between var and let ?**

First, let’s compare var and let. The main difference between var and let is that instead of being function scoped, let is block scoped. 

*What that means is that a variable created with the let keyword is available inside the “block” that it was created in as well as any nested blocks.*

*When I say “block”, I mean anything surrounded by a curly brace {} like in a for loop or an if statement.*

```javascript
function discountPrices (prices, discount) {
  var discounted = []

  for (var i = 0; i < prices.length; i++) {
    var discountedPrice = prices[i] * (1 - discount)
    var finalPrice = Math.round(discountedPrice * 100) / 100
    discounted.push(finalPrice)
  }

  console.log(i) // 3
  console.log(discountedPrice) // 150
  console.log(finalPrice) // 150

  return discounted
}
```
Remember the previous question , 
we were able to log *i, discountedPrice, and finalPrice* outside of the for loop since they were declared with var and var is function scoped. But now, what happens if we change those var declarations to use let and try to run it?

```javascript
function discountPrices (prices, discount) {
  let discounted = []

  for (let i = 0; i < prices.length; i++) {
    let discountedPrice = prices[i] * (1 - discount)
    let finalPrice = Math.round(discountedPrice * 100) / 100
    discounted.push(finalPrice)
  }

  console.log(i) // 3
  console.log(discountedPrice) // 150
  console.log(finalPrice) // 150

  return discounted
}

discountPrices([100, 200, 300], .5) // ❌ ReferenceError: i is not defined
```
 We get ReferenceError: i is not defined. What this tells us is that variables declared with let are block scoped, not function scoped. 
 
 So trying to access i (or discountedPrice or finalPrice) outside of the “block” they were declared in is going to give us a reference error as we just barely saw.

**Q11:**
**What happens when you try to access a variable declared with let before it’s declared?**

```javascript
function discountPrices (prices, discount) {
  console.log(discounted) // ❌ ReferenceError

  let discounted = []

  for (let i = 0; i < prices.length; i++) {
    let discountedPrice = prices[i] * (1 - discount)
    let finalPrice = Math.round(discountedPrice * 100) / 100
    discounted.push(finalPrice)
  }

  console.log(i) // 3
  console.log(discountedPrice) // 150
  console.log(finalPrice) // 150

  return discounted
}
```
Instead of getting undefined (like with those variables declared with var), you’ll get a ReferenceError.

*var VS let*

- var: 
  1. function scoped
  2. undefined when accessing a variable before it's declared

- let: 
  1. block scoped
  2. ReferenceError when accessing a variable before it's declared
  
 **Q12:**
**What is the difference between var and let ?**

*const* is almost exactly the same as let. However, the only difference is that once you’ve assigned a value to a variable using const, you can’t reassign it to a new value.

```javascript
let name = 'Sherlock'
const handle = 'nothing'

name = 'Sherlock Holmes' // ✅
handle = 'something' // ❌ TypeError: Assignment to constant variable.
```
changing a property on an object isn’t reassigning it, so even though an object is declared with const, that doesn’t mean you can’t mutate any of its properties.

It only means you can’t reassign it to a new value.

```javascript
const person = {
  name: 'Guvi'
}

person.name = 'Guvi Geeks' // ✅

person = {} // ❌ Assignment to constant variable.
```
**Q13:**
**What is the difference between var,let and const ?**

*var VS let VS const*

- var: 
  1. function scoped
  2. undefined when accessing a variable before it's declared

- let: 
  1. block scoped
  2. ReferenceError when accessing a variable before it's declared

- const:
  1. block scoped
  2. ReferenceError when accessing a variable before it's declared
  3. can't be reassigned
  
**Q14:**
























 
 


