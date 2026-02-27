# CSS Fundamentals — Practical Guide

CSS (**Cascading Style Sheets**) est le langage standard utilisé pour styliser et mettre en page les pages web.
Il contrôle la présentation visuelle du contenu HTML.

* HTML définit la structure
* JavaScript définit le comportement
* CSS définit la présentation

CSS fonctionne en sélectionnant des éléments HTML et en leur appliquant des règles de style.

---

## 1. Syntaxe de Base en CSS

Une règle CSS est composée :

* d’un **sélecteur**
* d’un ou plusieurs **déclarations**
* chaque déclaration contient une **propriété** et une **valeur**

### Exemple — `style.css`

```css
h1 {
    color: blue;
    font-size: 24px;
}
```

### Décomposition

* `h1`
  Sélecteur (cible les éléments `<h1>`)

* `color`
  Propriété (ce que l’on modifie)

* `blue`
  Valeur (comment on le modifie)

* `{}`
  Contient les déclarations

Chaque déclaration se termine par un point-virgule `;`.

---

## 2. Manières d’Ajouter du CSS

### CSS Externe (Recommandé)

Méthode recommandée pour les projets réels.

```html
<head>
    <link rel="stylesheet" href="style.css">
</head>
```

Avantages :

* Séparation des responsabilités
* Réutilisable sur plusieurs pages
* Maintenance plus simple
* Architecture plus propre

---

### CSS Interne

Utilisé pour styliser une seule page.

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

### CSS Inline (À éviter en production)

```html
<p style="color:red;">Hello</p>
```

Le style inline nuit à :

* La scalabilité
* La maintenabilité
* La lisibilité du code

---

## 3. Sélecteurs CSS

Les sélecteurs déterminent quels éléments sont stylisés.

Types courants :

* Sélecteur d’élément
  Exemple : `p`
  Cible tous les `<p>`

* Sélecteur d’ID
  Exemple : `#title`
  Cible un élément unique

* Sélecteur de classe
  Exemple : `.card`
  Cible plusieurs éléments

* Sélecteur universel
  Exemple : `*`
  Cible tous les éléments

* Sélecteur groupé
  Exemple : `div, p`
  Cible plusieurs types d’éléments

Exemple :

```css
.card {
    background: white;
}
```

---

## 4. Couleurs en CSS

Exemples :

```css
color: rgb(255, 0, 0);
color: #ff0000;
color: rgba(255, 0, 0, 0.5);
```

Formats courants :

* Couleurs nommées (`red`, `blue`, etc.)
* RGB
* HEX
* RGBA (avec transparence)

---

## 5. Le Box Model

Chaque élément HTML est rendu comme une boîte rectangulaire composée de :

1. Content (contenu)
2. Padding (espacement interne)
3. Border (bordure)
4. Margin (espacement externe)

### Exemple

```css
div {
    width: 300px;
    padding: 10px;
    border: 5px solid gray;
    margin: 20px;
}
```

Maîtriser le box model est essentiel pour contrôler la mise en page.

---

## 6. La Propriété `display`

Contrôle le comportement d’un élément dans le flux du document.

Valeurs courantes :

```css
display: block;
display: inline;
display: inline-block;
display: none;
```

Exemple :

```css
span {
    display: block;
}
```

---

## 7. Unités CSS

### Unités Absolues

* `px`
* `cm`
* `pt`

### Unités Relatives (Recommandées)

* `%`
* `em`
* `rem`
* `vw`
* `vh`

Les unités relatives s’adaptent mieux au responsive design.

---

## 8. Positionnement

Permet de contrôler le placement d’un élément.

Valeurs possibles :

```css
position: static;
position: relative;
position: absolute;
position: fixed;
position: sticky;
```

Exemple :

```css
.box {
    position: absolute;
    top: 20px;
    left: 50px;
}
```

Le positionnement modifie la manière dont l’élément interagit avec le flux normal du document.

---

## 9. Gestion des Couches — `z-index`

Détermine l’ordre d’empilement des éléments.

```css
z-index: 10;
```

* Valeur plus élevée → au-dessus
* Valeur plus faible → en dessous

---

## 10. Backgrounds

Exemple :

```css
body {
    background-image: url("bg.jpg");
    background-size: cover;
}
```

Propriétés fréquentes :

* `background-color`
* `background-image`
* `background-size`
* `background-position`
* `background-repeat`

---

## 11. Flexbox — Système de Layout Moderne

Flexbox simplifie la création de layouts responsives.

### Créer un conteneur Flex

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

### Alignement

```css
justify-content: center;
align-items: center;
flex-wrap: wrap;
```

Flexbox est préféré aux floats pour les layouts modernes.

---

## 12. Media Queries — Responsive Design

Permettent d’adapter le design selon la taille de l’écran.

```css
@media (max-width: 480px) {
    body {
        background-color: lightgreen;
    }
}
```

Essentiel pour le développement mobile-first.

---

## 13. Transitions

Ajoutent des changements visuels fluides.

```css
button {
    transition: background-color 0.3s ease;
}
```

---

## 14. Transform

Permet de déplacer, faire pivoter ou redimensionner un élément.

```css
transform: translate(50px, 0);
transform: rotate(20deg);
transform: scale(1.5);
```

---

## 15. Animations

Permettent des animations sans JavaScript.

### Étape 1 — Définir les Keyframes

```css
@keyframes example {
    from { background-color: red; }
    to { background-color: yellow; }
}
```

---

### Étape 2 — Appliquer l’Animation

```css
div {
    animation: example 4s infinite;
}
```

---

## Exemple Final — Mini Page Stylisée

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

## Concept Fondamental à Retenir

CSS ne définit pas la structure.
Il définit l’apparence.

* Sélectionner des éléments
* Appliquer des styles
* Contrôler la mise en page
* Adapter aux différentes tailles d’écran

HTML définit la signification.
CSS définit l’apparence.
JavaScript définit le comportement.

Comprendre cette séparation est essentiel pour construire des applications web évolutives et maintenables.
