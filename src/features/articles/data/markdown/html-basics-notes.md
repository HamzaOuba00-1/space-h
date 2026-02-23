

# HTML Fundamentals — Practical Guide

HTML (**HyperText Markup Language**) is the standard language used to structure content on the web.
It defines the meaning and organization of information, not its visual appearance or behavior.

Styling is handled by CSS.
Interactivity is handled by JavaScript.
HTML provides the semantic foundation that both rely on.

HTML uses **elements (tags)** to describe parts of a page such as headings, text, images, navigation, and forms.

---

## 1. Basic Structure of an HTML Document

Every HTML page follows a standard structure known as the **boilerplate**.

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

| Element           | Purpose                                     |
| ----------------- | ------------------------------------------- |
| `<!DOCTYPE html>` | Declares the document as HTML5              |
| `<html>`          | Root element containing the entire page     |
| `<head>`          | Metadata (title, encoding, configuration)   |
| `<body>`          | Visible content rendered in the browser     |
| `index.html`      | Default filename typically used as homepage |

---

## 2. What Is an HTML Element?

An HTML element consists of an opening tag, content, and a closing tag.

```html
<p>This is a paragraph</p>
```

* `<p>` → Opening tag
* Content → Text inside the element
* `</p>` → Closing tag

Some elements are self-closing, such as `<img>` or `<br>`.

---

## 3. Essential Text Elements

### Headings

```html
<h1>Main Title</h1>
<h2>Subtitle</h2>
<h3>Section</h3>
```

Headings create a content hierarchy and are critical for accessibility and search engines.

### Paragraph

```html
<p>This is a paragraph.</p>
```

### Text Formatting

```html
<strong>Bold</strong>
<em>Italic</em>
<small>Small text</small>
```

Prefer semantic tags like `<strong>` and `<em>` instead of purely visual ones.

### Line Break and Horizontal Rule

```html
<br>
<hr>
```

### Superscript and Subscript

```html
H<sub>2</sub>O
2<sup>4</sup> = 16
```

### Preserving Whitespace

```html
<pre>
Text remains exactly
as written.
</pre>
```

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

### Image

```html
<img src="image.png" alt="Profile picture" width="200">
```

The `alt` attribute is required for accessibility.

---

## 5. Semantic Layout Elements

Semantic elements describe the role of content rather than its appearance.

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

These improve maintainability, accessibility, and SEO.

---

## 6. Containers: `div` vs `span`

| Tag      | Display Type | Typical Use Case          |
| -------- | ------------ | ------------------------- |
| `<div>`  | Block        | Structural grouping       |
| `<span>` | Inline       | Styling or targeting text |

```html
<div>Main block</div>
<span>Inline text</span>
```

Use semantic elements first; use `<div>` only when no semantic alternative exists.

---

## 7. Lists

### Unordered List

```html
<ul>
    <li>Coffee</li>
    <li>Tea</li>
</ul>
```

### Ordered List

```html
<ol>
    <li>Step One</li>
    <li>Step Two</li>
</ol>
```

Lists are essential for navigation menus, features, and structured content.

---

## 8. Tables

Tables display structured, relational data.

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

| Tag         | Meaning           |
| ----------- | ----------------- |
| `<table>`   | Table container   |
| `<tr>`      | Table row         |
| `<th>`      | Header cell       |
| `<td>`      | Data cell         |
| `<caption>` | Table description |

---

## 9. Forms — Collecting User Input

Forms send user data to a server.

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

---

## 10. `class` and `id` Attributes

Used to target elements in CSS or JavaScript.

```html
<div id="header"></div>
<div class="card"></div>
```

| Attribute | Constraint     |
| --------- | -------------- |
| `id`      | Must be unique |
| `class`   | Can be reused  |

---

## 11. Embedding External Media

### Iframe

```html
<iframe src="https://example.com"></iframe>
```

### Video

```html
<video src="video.mp4" controls width="400"></video>
```

Common attributes include `controls`, `autoplay`, `loop`, and size settings.

---

## Final Example — Minimal Webpage

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

## Core Concept to Remember

HTML is not about presentation.
It is about describing content and its meaning.

* Headings define hierarchy
* Sections organize ideas
* Articles represent standalone content
* Forms capture user input

CSS enhances presentation.
JavaScript adds behavior.
HTML provides the structural model that makes both possible.

Understanding this separation is what allows modern frameworks to work reliably at scale.
