# CSS Fundamentals — Practical Guide

CSS (**Cascading Style Sheets**) is the standard language used to style and layout web pages.
It controls the visual presentation of HTML content.

* HTML defines the structure
* JavaScript defines the behavior
* CSS defines the presentation

CSS works by selecting HTML elements and applying style rules to them.

---

## 1. Basic CSS Syntax

A CSS rule consists of:

* a **selector**
* one or more **declarations**
* each declaration contains a **property** and a **value**

### Example — `style.css`

```css
h1 {
    color: blue;
    font-size: 24px;
}
```

### Breakdown

* `h1`
  Selector (targets `<h1>` elements)

* `color`
  Property (what is being modified)

* `blue`
  Value (how it is modified)

* `{}`
  Contains the declarations

Each declaration ends with a semicolon `;`.

---

## 2. Ways to Add CSS

### External CSS (Recommended)

Recommended method for real projects.

```html
<head>
    <link rel="stylesheet" href="style.css">
</head>
```

Advantages:

* Separation of concerns
* Reusable across multiple pages
* Easier maintenance
* Cleaner architecture

---

### Internal CSS

Used to style a single page.

```html
<head>
    <style>
        body {
            background-color: linen;
        }
    </style>
</head>
```

---

### Inline CSS (Avoid in production)

```html
<p style="color:red;">Hello</p>
```

Inline styling negatively impacts:

* Scalability
* Maintainability
* Code readability

---

## 3. CSS Selectors

Selectors determine which elements are styled.

Common types:

* Element selector
  Example: `p`
  Targets all `<p>` elements

* ID selector
  Example: `#title`
  Targets a unique element

* Class selector
  Example: `.card`
  Targets multiple elements

* Universal selector
  Example: `*`
  Targets all elements

* Group selector
  Example: `div, p`
  Targets multiple element types

Example:

```css
.card {
    background: white;
}
```

---

## 4. Colors in CSS

Examples:

```css
color: rgb(255, 0, 0);
color: #ff0000;
color: rgba(255, 0, 0, 0.5);
```

Common formats:

* Named colors (`red`, `blue`, etc.)
* RGB
* HEX
* RGBA (with transparency)

---

## 5. The Box Model

Every HTML element is rendered as a rectangular box composed of:

1. Content
2. Padding (inner spacing)
3. Border
4. Margin (outer spacing)

### Example

```css
div {
    width: 300px;
    padding: 10px;
    border: 5px solid gray;
    margin: 20px;
}
```

Mastering the box model is essential for controlling layout.

---

## 6. The `display` Property

Controls how an element behaves in the document flow.

Common values:

```css
display: block;
display: inline;
display: inline-block;
display: none;
```

Example:

```css
span {
    display: block;
}
```

---

## 7. CSS Units

### Absolute Units

* `px`
* `cm`
* `pt`

### Relative Units (Recommended)

* `%`
* `em`
* `rem`
* `vw`
* `vh`

Relative units adapt better to responsive design.

---

## 8. Positioning

Controls how an element is placed.

Possible values:

```css
position: static;
position: relative;
position: absolute;
position: fixed;
position: sticky;
```

Example:

```css
.box {
    position: absolute;
    top: 20px;
    left: 50px;
}
```

Positioning changes how the element interacts with the normal document flow.

---

## 9. Layer Management — `z-index`

Determines the stacking order of elements.

```css
z-index: 10;
```

* Higher value → on top
* Lower value → below

---

## 10. Backgrounds

Example:

```css
body {
    background-image: url("bg.jpg");
    background-size: cover;
}
```

Common properties:

* `background-color`
* `background-image`
* `background-size`
* `background-position`
* `background-repeat`

---

## 11. Flexbox — Modern Layout System

Flexbox simplifies creating responsive layouts.

### Create a Flex Container

```css
.container {
    display: flex;
}
```

---

### Direction

```css
flex-direction: row;
flex-direction: column;
```

---

### Alignment

```css
justify-content: center;
align-items: center;
flex-wrap: wrap;
```

Flexbox is preferred over floats for modern layouts.

---

## 12. Media Queries — Responsive Design

Allow adapting design based on screen size.

```css
@media (max-width: 480px) {
    body {
        background-color: lightgreen;
    }
}
```

Essential for mobile-first development.

---

## 13. Transitions

Add smooth visual changes.

```css
button {
    transition: background-color 0.3s ease;
}
```

---

## 14. Transform

Allows moving, rotating, or resizing an element.

```css
transform: translate(50px, 0);
transform: rotate(20deg);
transform: scale(1.5);
```

---

## 15. Animations

Enable animations without JavaScript.

### Step 1 — Define Keyframes

```css
@keyframes example {
    from { background-color: red; }
    to { background-color: yellow; }
}
```

---

### Step 2 — Apply the Animation

```css
div {
    animation: example 4s infinite;
}
```

---

## Final Example — Styled Mini Page

### HTML

```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="card">
    <h1>Hello CSS</h1>
    <p>This is a styled card.</p>
</div>

</body>
</html>
```

---

### CSS

```css
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
}

.card {
    width: 300px;
    padding: 20px;
    margin: 40px auto;
    background: white;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.3s ease;
}

.card:hover {
    transform: scale(1.05);
}
```

---

## Key Concept to Remember

CSS does not define structure.
It defines appearance.

* Select elements
* Apply styles
* Control layout
* Adapt to different screen sizes

HTML defines meaning.
CSS defines appearance.
JavaScript defines behavior.

Understanding this separation is essential for building scalable and maintainable web applications.
