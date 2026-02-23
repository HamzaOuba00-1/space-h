## Exercise — Build a Student Profile Page

---

### Overview

This exercise focuses on building a simple, well-structured HTML document using **semantic elements only**.
No styling. No scripting. Only structure.

The objective is to understand how to organize content meaningfully so that it remains clear, accessible, and maintainable even without CSS or JavaScript.

---

### Objective

Create a file named:

```
index.html
```

This page will represent a student profile using proper semantic HTML.

---

### Required Layout

Your document must follow this structure:

```html
<header>   → Page title and identity
<main>
    <section> → About the student
    <section> → Skills
    <section> → Weekly schedule (table)
    <section> → Contact form
</main>
<footer>   → External link
```

Use semantic tags intentionally. Avoid unnecessary containers.

---

### Tasks to Implement

### 1. Header

Inside `<header>`:

* Display the student's name using `<h1>`
* Add a short descriptive tagline using `<p>`

Example:

```
Full Stack Engineering Student  
Learning to build scalable web applications.
```

---

### 2. About Section

Inside a `<section>`:

* Add a paragraph describing the student
* Include an image using `<img>`
* Provide a meaningful `alt` attribute for accessibility

---

### 3. Skills Section

Create a list of technologies being learned.

Requirements:

* Use `<h2>` as the section title
* Use `<ul>` with **at least five items**

---

### 4. Weekly Learning Schedule (Table)

Create a study plan table with the following data:
<table style="width: 100%;">
  <thead>
    <tr>
      <th>Day</th>
      <th>Topic</th>
      <th>Hours</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Monday</td>
      <td>HTML</td>
      <td>2</td>
    </tr>
    <tr>
      <td>Tuesday</td>
      <td>CSS</td>
      <td>3</td>
    </tr>
    <tr>
      <td>Friday</td>
      <td>Java</td>
      <td>2</td>
    </tr>
  </tbody>
</table>

Use:

* `<table>`
* `<caption>`
* `<tr>`
* `<th>`
* `<td>`

The structure must be clear and logical.

---

### 5. Contact Form

Build a basic form to collect:

* Name → text input
* Email → email input
* Learning Level → dropdown (`<select>`)

  * Beginner
  * Intermediate
  * Advanced
* Message → `<textarea>`
* Submit button

Each field must be properly associated with a `<label>` using the `for` attribute.

No visual styling is required.

---

### 6. Footer

Inside `<footer>`:

* Insert a horizontal separator using `<hr>`
* Add a clickable external link using `<a>`
* Configure it to open in a new tab

---

### Constraints

* Avoid using `<div>` unless there is no semantic alternative.
* Do not add CSS or JavaScript.
* Write the markup manually to build familiarity with the elements.
* Focus on meaning, not appearance.

A useful mental test:

> If all styling were removed, would the document still be understandable?

If yes, the structure is correct.

---

### Learning Goals

This exercise builds foundational instincts for:

* Structuring UI before styling
* Accessibility-aware markup
* Search-engine-friendly HTML
* Component thinking used in modern frameworks
* Clean separation between structure and presentation

Modern frameworks such as React, Vue, and Angular still rely on these underlying HTML primitives. Understanding them deeply is essential before adding abstraction layers.
