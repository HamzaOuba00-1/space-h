# JavaScript Fundamentals — Practical Guide

JavaScript is a programming language used to add **behavior and logic** to web applications.

It allows you to:

* Manipulate HTML dynamically
* React to user interactions
* Manage application state
* Communicate with APIs

- HTML defines structure
- CSS defines appearance
- JavaScript controls behavior

JavaScript operates primarily through the **DOM (Document Object Model)**, which represents the page as a manipulable tree.

---

## 1. How JavaScript Works in the Browser

JavaScript runs inside the browser and interacts with the page through the DOM.

### Example — Basic Interaction

```html
<p id="demo">Hello</p>

<script>
  document.getElementById("demo").textContent = "Hello JavaScript";
</script>
```

### Explanation

* `document` → represents the entire page
* `getElementById()` → selects an element
* `textContent` → modifies text

---

## 2. Variables — Storing Data

Variables store values used in your program.

```javascript
let name = "Hamza";
const age = 22;
```

### Rules

* `let` → value can change
* `const` → value cannot be reassigned
* Avoid `var` in modern code

---

## 3. Data Types

JavaScript supports several core types:

```javascript
let text = "Hello";     // string
let number = 10;        // number
let isActive = true;    // boolean
let user = { name: "Ali" }; // object
let list = [1, 2, 3];   // array
```

---

## 4. Operators

### Arithmetic

```javascript
let result = 5 + 3;
```

### Comparison

```javascript
5 === "5"; // false
```

### Logical

```javascript
true && false;
true || false;
```

Use `===` instead of `==` to avoid implicit type conversion.

---

## 5. Conditions — Controlling Logic

```javascript
let score = 80;

if (score >= 90) {
  console.log("Excellent");
} else if (score >= 60) {
  console.log("Passed");
} else {
  console.log("Failed");
}
```

---

## 6. Functions — Reusable Logic

Functions encapsulate behavior.

```javascript
function greet(name) {
  return "Hello " + name;
}

greet("Hamza");
```

### Arrow Function (Modern)

```javascript
const add = (a, b) => a + b;
```

---

## 7. Arrays — Working with Lists

```javascript
let fruits = ["Apple", "Banana", "Orange"];

fruits.push("Mango");
fruits.pop();
```

Access elements:

```javascript
fruits[0]; // Apple
```

---

## 8. Objects — Structured Data

```javascript
let user = {
  name: "Hamza",
  age: 22
};

console.log(user.name);
```

Objects are used everywhere (APIs, configs, state).

---

## 9. DOM Manipulation — Core of Front-End

### Selecting Elements

```javascript
document.getElementById("id");
document.querySelector(".class");
```

---

### Creating Elements

```javascript
const li = document.createElement("li");
li.textContent = "New Task";
```

---

### Adding to the DOM

```javascript
document.querySelector("ul").appendChild(li);
```

---

## 10. Events — Reacting to Users

JavaScript listens to user actions.

```javascript
button.addEventListener("click", function () {
  console.log("Clicked");
});
```

Common events:

* `click`
* `input`
* `keydown`
* `submit`

---

## 11. Class Manipulation

Used to change UI state.

```javascript
element.classList.add("active");
element.classList.remove("active");
element.classList.toggle("active");
```

---

## 12. Loops

### For Loop

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

### While Loop

```javascript
let i = 0;
while (i < 5) {
  i++;
}
```

---

## 13. Working with Forms

```javascript
const input = document.getElementById("name");

input.addEventListener("input", function () {
  console.log(input.value);
});
```

---

## 14. Error Handling

```javascript
try {
  riskyFunction();
} catch (error) {
  console.log(error.message);
}
```

---

## 15. JSON — Data Exchange Format

```javascript
const json = '{"name":"Hamza"}';

const obj = JSON.parse(json);
JSON.stringify(obj);
```

Used for APIs and backend communication.

---

## 16. Local Storage — Persist Data

```javascript
localStorage.setItem("name", "Hamza");

const value = localStorage.getItem("name");
```

Data stays even after page refresh.

---

## 17. Example — Mini Dynamic Feature

```html
<input id="task" />
<button id="add">Add</button>
<ul id="list"></ul>

<script>
  const input = document.getElementById("task");
  const list = document.getElementById("list");

  document.getElementById("add").addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = input.value;
    list.appendChild(li);
    input.value = "";
  });
</script>
```

---

## Key Concept to Remember

JavaScript is not just scripting — it is **state + behavior management**.

* The DOM is your UI
* Events are user signals
* Functions define logic
* State drives what is displayed

Modern frameworks (React, Vue, Angular) are abstractions over:

```text
DOM + State + Events
```

Understanding this foundation allows you to:

* Build without frameworks
* Debug complex applications
* Design scalable front-end architectures

