Voici le même contenu réécrit **sans tableaux**, uniquement en Markdown avec des listes structurées, prêt pour un fichier `.md`.

---

# HTML Fundamentals — Practical Guide

HTML (**HyperText Markup Language**) est le langage standard utilisé pour structurer le contenu sur le web.
Il définit la **signification** et l’**organisation** de l’information, pas son apparence ni son comportement.

* Le style est géré par **CSS**
* L’interactivité est gérée par **JavaScript**
* HTML fournit la base sémantique sur laquelle les deux reposent

HTML utilise des **éléments (tags)** pour décrire les différentes parties d’une page : titres, texte, images, navigation, formulaires, etc.

---

## 1. Structure de Base d’un Document HTML

Chaque page HTML suit une structure standard appelée **boilerplate**.

### Exemple — `index.html`

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

### Explication

* `<!DOCTYPE html>`
  Déclare le document comme étant en HTML5

* `<html>`
  Élément racine contenant toute la page

* `<head>`
  Contient les métadonnées (titre, encodage, configuration)

* `<body>`
  Contient le contenu visible affiché dans le navigateur

* `index.html`
  Nom de fichier généralement utilisé comme page d’accueil

---

## 2. Qu’est-ce qu’un Élément HTML ?

Un élément HTML est composé de :

* Une balise ouvrante
* Du contenu
* Une balise fermante

```html
<p>This is a paragraph</p>
```

* `<p>` → balise ouvrante
* `This is a paragraph` → contenu
* `</p>` → balise fermante

Certains éléments sont auto-fermants, comme :

* `<img>`
* `<br>`

---

## 3. Éléments Essentiels de Texte

### Titres (Headings)

```html
<h1>Main Title</h1>
<h2>Subtitle</h2>
<h3>Section</h3>
```

* Créent une hiérarchie de contenu
* Essentiels pour l’accessibilité
* Importants pour le SEO

---

### Paragraphe

```html
<p>This is a paragraph.</p>
```

---

### Mise en Forme du Texte

```html
<strong>Bold</strong>
<em>Italic</em>
<small>Small text</small>
```

* `<strong>` → importance forte (pas seulement visuel)
* `<em>` → emphase
* `<small>` → texte secondaire

Privilier les balises **sémantiques** plutôt que purement visuelles.

---

### Saut de Ligne et Ligne Horizontale

```html
<br>
<hr>
```

* `<br>` → saut de ligne
* `<hr>` → séparation thématique

---

### Indice et Exposant

```html
H<sub>2</sub>O
2<sup>4</sup> = 16
```

* `<sub>` → indice
* `<sup>` → exposant

---

### Préservation des Espaces

```html
<pre>
Text remains exactly
as written.
</pre>
```

* Conserve les espaces et retours à la ligne

---

## 4. Liens et Images

### Lien Hypertexte

```html
<a href="https://example.com">Visit Website</a>
```

Ouvrir dans un nouvel onglet :

```html
<a href="https://example.com" target="_blank" rel="noopener">
```

* `target="_blank"` → nouvel onglet
* `rel="noopener"` → sécurité

---

### Image

```html
<img src="image.png" alt="Profile picture" width="200">
```

* `src` → chemin de l’image
* `alt` → description (obligatoire pour l’accessibilité)
* `width` → largeur

---

## 5. Éléments de Mise en Page Sémantiques

Les éléments sémantiques décrivent le **rôle** du contenu.

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

* `<header>` → en-tête
* `<main>` → contenu principal
* `<section>` → regroupement thématique
* `<article>` → contenu autonome
* `<aside>` → contenu secondaire
* `<footer>` → pied de page

Améliorent :

* La maintenabilité
* L’accessibilité
* Le SEO

---

## 6. Conteneurs : `div` vs `span`

### `<div>`

* Élément de type bloc
* Utilisé pour structurer des sections

```html
<div>Main block</div>
```

### `<span>`

* Élément inline
* Utilisé pour cibler ou styliser du texte

```html
<span>Inline text</span>
```

Utiliser d’abord un élément sémantique adapté.
Employer `<div>` seulement lorsqu’aucune alternative sémantique n’existe.

---

## 7. Listes

### Liste Non Ordonnée

```html
<ul>
    <li>Coffee</li>
    <li>Tea</li>
</ul>
```

* `<ul>` → liste à puces
* `<li>` → élément de liste

---

### Liste Ordonnée

```html
<ol>
    <li>Step One</li>
    <li>Step Two</li>
</ol>
```

* `<ol>` → liste numérotée

Les listes sont essentielles pour :

* Menus de navigation
* Fonctionnalités
* Contenu structuré

---

## 8. Tables

Les tables affichent des données relationnelles structurées.

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

Signification des balises :

* `<table>` → conteneur principal
* `<tr>` → ligne
* `<th>` → cellule d’en-tête
* `<td>` → cellule de données
* `<caption>` → description de la table

---

## 9. Formulaires — Collecter des Données

Les formulaires permettent d’envoyer des données à un serveur.

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

Éléments courants :

* `<input>` → champ simple
* `<textarea>` → zone de texte
* `<select>` → liste déroulante
* `<button>` → bouton d’action

---

## 10. Attributs `class` et `id`

Utilisés pour cibler des éléments en CSS ou JavaScript.

```html
<div id="header"></div>
<div class="card"></div>
```

* `id`

  * Doit être unique dans la page

* `class`

  * Peut être réutilisée plusieurs fois

---

## 11. Intégration de Contenu Externe

### Iframe

```html
<iframe src="https://example.com"></iframe>
```

---

### Vidéo

```html
<video src="video.mp4" controls width="400"></video>
```

Attributs courants :

* `controls`
* `autoplay`
* `loop`
* dimensions (`width`, `height`)

---

## Exemple Final — Page Web Minimale

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

## Concept Fondamental à Retenir

HTML ne concerne pas la présentation.
Il décrit la structure et la signification du contenu.

* Les titres définissent la hiérarchie
* Les sections organisent les idées
* Les articles représentent du contenu autonome
* Les formulaires capturent les données utilisateur

CSS améliore la présentation.
JavaScript ajoute le comportement.
HTML fournit le modèle structurel qui rend l’ensemble cohérent et fiable.

Comprendre cette séparation est essentiel pour travailler proprement avec les frameworks modernes et construire des interfaces maintenables à grande échelle.
