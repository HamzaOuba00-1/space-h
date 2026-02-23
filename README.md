# 🚀 space-H

**space-H** is a static React website built to document my learning journey in web development and to share practical exercises along with their solutions.

The goal of this project is twofold:

* Structure and consolidate what I learn (HTML, CSS, JavaScript, frameworks…).
* Provide technical exercises with downloadable solutions.

---

## ✨ Features

* 📚 Technical articles written in Markdown
* 🧠 Exercises with statements + downloadable solutions (`.zip`)
* 🔎 Search and filtering by technology
* 🧱 Modular React architecture (feature-based)
* 🛡️ Secure Markdown rendering (XSS prevention)
* ⚡ Fully static website (no backend required)

---

## 🛠️ Tech Stack

### Frontend

* **React 19**
* **TypeScript**
* **Vite** (modern build tool)
* **React Router** (routing)
* **TailwindCSS v4** (UI + design system)

### Content Rendering

* **React-Markdown**
* **Remark-GFM** (GitHub flavored markdown)
* **DOMPurify** (sanitization against XSS)

### Tooling & Quality

* ESLint
* Feature-based architecture
* Maintainability-oriented structure

---

## 🏗️ Architecture

The project follows a **feature-based architecture** approach:

```
src/
 ├─ app/            → application bootstrap (providers, router)
 ├─ features/       → domain logic (articles, exercises)
 ├─ pages/          → UI pages
 ├─ shared/         → reusable components
 └─ public/         → static assets (downloads)
```

### Example:

* `features/articles` → model + repository + data
* `shared/components` → generic UI (Card, Markdown…)
* `shared/lib` → pure helpers (sorting, sanitization…)

---

## 🔐 Security

Even though the site is static, security best practices are applied:

* Markdown content is sanitized to prevent XSS injections.
* No unsafe `dangerouslySetInnerHTML` usage.
* Data is isolated through local repositories.
* No uncontrolled external calls.




