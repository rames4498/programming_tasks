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
##JAVASCRIPT
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

**Q2 :**
**What is scope ?**


 
 


