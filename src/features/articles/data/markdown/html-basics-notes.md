# HTML Fundamentals — Practical Guide

HTML (**HyperText Markup Language**) is the standard language used to structure content on the web.
It defines the **meaning** and **organization** of information, not its appearance or behavior.

* Styling is handled by **CSS**
* Interactivity is handled by **JavaScript**
* HTML provides the semantic foundation on which both rely

HTML uses **elements (tags)** to describe different parts of a page: headings, text, images, navigation, forms, etc.

---

## 1. Basic Structure of an HTML Document

Every HTML page follows a standard structure called a **boilerplate**.

### Example — `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Page</title>
</head>
<body>
    <p>Hello World!</p>
</body>
</html>
```

### Explanation

* `<!DOCTYPE html>`
  Declares the document as HTML5

* `<html>`
  Root element containing the entire page

* `<head>`
  Contains metadata (title, encoding, configuration)

* `<body>`
  Contains the visible content displayed in the browser

* `index.html`
  Common filename used as the homepage

---

## 2. What is an HTML Element?

An HTML element consists of:

* An opening tag
* Content
* A closing tag

```html
<p>This is a paragraph</p>
```

* `<p>` → opening tag
* `This is a paragraph` → content
* `</p>` → closing tag

Some elements are self-closing, such as:

* `<img>`
* `<br>`

---

## 3. Essential Text Elements

### Headings

```html
<h1>Main Title</h1>
<h2>Subtitle</h2>
<h3>Section</h3>
```

* Create a content hierarchy
* Essential for accessibility
* Important for SEO

---

### Paragraph

```html
<p>This is a paragraph.</p>
```

---

### Text Formatting

```html
<strong>Bold</strong>
<em>Italic</em>
<small>Small text</small>
```

* `<strong>` → strong importance (not just visual)
* `<em>` → emphasis
* `<small>` → secondary text

Prefer **semantic tags** over purely visual ones.

---

### Line Break and Horizontal Rule

```html
<br>
<hr>
```

* `<br>` → line break
* `<hr>` → thematic separation

---

### Subscript and Superscript

```html
H<sub>2</sub>O
2<sup>4</sup> = 16
```

* `<sub>` → subscript
* `<sup>` → superscript

---

### Preserving Whitespace

```html
<pre>
Text remains exactly
as written.
</pre>
```

* Preserves spaces and line breaks

---

## 4. Links and Images

### Hyperlink

```html
<a href="https://example.com">Visit Website</a>
```

Open in a new tab:

```html
<a href="https://example.com" target="_blank" rel="noopener">
```

* `target="_blank"` → new tab
* `rel="noopener"` → security

---

### Image

```html
<img src="image.png" alt="Profile picture" width="200">
```

* `src` → image path
* `alt` → description (required for accessibility)
* `width` → width

---

## 5. Semantic Layout Elements

Semantic elements describe the **role** of content.

```html
<header>Website Header</header>

<main>
    <section>
        <article>Main Content</article>
    </section>

    <aside>Sidebar</aside>
</main>

<footer>Footer</footer>
```

* `<header>` → header
* `<main>` → main content
* `<section>` → thematic grouping
* `<article>` → independent content
* `<aside>` → secondary content
* `<footer>` → footer

They improve:

* Maintainability
* Accessibility
* SEO

---

## 6. Containers: `div` vs `span`

### `<div>`

* Block-level element
* Used to structure sections

```html
<div>Main block</div>
```

### `<span>`

* Inline element
* Used to target or style text

```html
<span>Inline text</span>
```

Use a semantic element first.
Use `<div>` only when no semantic alternative exists.

---

## 7. Lists

### Unordered List

```html
<ul>
    <li>Coffee</li>
    <li>Tea</li>
</ul>
```

* `<ul>` → bullet list
* `<li>` → list item

---

### Ordered List

```html
<ol>
    <li>Step One</li>
    <li>Step Two</li>
</ol>
```

* `<ol>` → numbered list

Lists are essential for:

* Navigation menus
* Features
* Structured content

---

## 8. Tables

Tables display structured relational data.

```html
<table>
    <caption>Student Data</caption>
    <tr>
        <th>Name</th>
        <th>Age</th>
    </tr>
    <tr>
        <td>Ali</td>
        <td>20</td>
    </tr>
</table>
```

Tag meanings:

* `<table>` → main container
* `<tr>` → row
* `<th>` → header cell
* `<td>` → data cell
* `<caption>` → table description

---

## 9. Forms — Collecting Data

Forms allow sending data to a server.

```html
<form action="/submit" method="post">
    <label for="name">Name</label>
    <input id="name" type="text" name="name">

    <label>
        <input type="radio" name="class" value="A"> Class A
    </label>

    <label>
        <input type="checkbox" name="terms"> Accept Terms
    </label>

    <textarea name="feedback"></textarea>

    <select name="city">
        <option>Delhi</option>
        <option>Mumbai</option>
    </select>

    <button type="submit">Send</button>
</form>
```

Common elements:

* `<input>` → basic field
* `<textarea>` → text area
* `<select>` → dropdown
* `<button>` → action button

---

## 10. `class` and `id` Attributes

Used to target elements in CSS or JavaScript.

```html
<div id="header"></div>
<div class="card"></div>
```

* `id`

  * Must be unique in the page

* `class`

  * Can be reused multiple times

---

## 11. Embedding External Content

### Iframe

```html
<iframe src="https://example.com"></iframe>
```

---

### Video

```html
<video src="video.mp4" controls width="400"></video>
```

Common attributes:

* `controls`
* `autoplay`
* `loop`
* dimensions (`width`, `height`)

---

## Final Example — Minimal Web Page

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>My Profile</title>
</head>
<body>

<header>
    <h1>Hamza</h1>
</header>

<main>
    <section>
        <p>I am learning Full-Stack Development.</p>
        <img src="me.jpg" alt="My photo" width="150">
    </section>

    <section>
        <h2>Skills</h2>
        <ul>
            <li>HTML</li>
            <li>JavaScript</li>
        </ul>
    </section>
</main>

<footer>
    <a href="https://github.com">My GitHub</a>
</footer>

</body>
</html>
```

---

## Key Concept to Remember

HTML is not about presentation.
It describes the structure and meaning of content.

* Headings define hierarchy
* Sections organize ideas
* Articles represent independent content
* Forms capture user data

CSS improves presentation.
JavaScript adds behavior.
HTML provides the structural model that makes everything coherent and reliable.

Understanding this separation is essential for working effectively with modern frameworks and building maintainable interfaces at scale.
