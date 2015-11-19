# CSS Spaces
A simple CSS spacing library for margins, paddings (and more later ...) written in Sass (SCSS)

## Why another css library?
Many libraries try to do everything: sizes, typography, buttons, grid, helpers. CSS Spaces concentrates on one thing only: **some classes to add spaces between elements**. Use it with whatever framework or library you like.

## Install with bower
```shell
$ bower install css-spaces
```

## Install with npm
```shell
$ npm install css-spaces
```

## Usage
Include the spaces.css to your website:

```html
<head>
<!-- other stuff -->
<link rel="stylesheet" href="path/to/spaces.css">
</head>
```

Add classes to create paddings and margins.

The following header has a <b>m</b>argin-<b>t</b>op with the size of **xl**:
```html
<body>
<header class="mt-xl">This is the header.</header>
</body>
```

These elements have no padding:
```html
<body>
<h1 class="p-0">Lorem ipsum</h1>
<h2 class="p-0">Dolor sit</h2>
</body>
```

This navigation is centered:
```html
<body>
<!-- Read "margin-vertical-null margin-horizontal-auto" -->
<nav class="mv-0 mh-a">
  <a href="/">Home</a>
</nav>
</body>
```

All properties have `!important` as you should only add those classes, if you definitely want a specific behavior.

Sizes are defined in `px`.

## How it works
All classes are composed of some simple parts.

### 1. Property shortcut
```
m         margin
   -OR-
p         padding
```


### 2. Direction
```
t         top
b         bottom
r         right
l         left

v         vertical
h         horizontal

(none)    No direction specified means *all* directions (like in `margin: 8px;`)

```

### 3. Delimiter
```
-         positive value
--        negative value
```
Example:
```css
.mt-xs  { margin-top: 16px }
.mt--xs { margin-top: 16px }
```

### 4. Size
```
a          auto
0          0
xxxs       4px
xxs        8px
xs         16px
s          24px
m          36px
l          48px
xl         72px
xxl        96px
xxxl       144px
```

### Possible classes (normal syntax)

The following example just uses one size: s (24px). There is also `xxxs - xxxl` and `0` and `a` (which is auto).

Margin classes (they start with **m**) can have positive and negative values, padding classes (replace the leading **m** with a **p**) just have positive values.

```
mt-s      margin-top: 24px
mr-s      margin-right: 24px
mb-s      margin-bottom: 24px
ml-s      margin-left: 24px

mh-s      margin-left: 24px; margin-right: 24px
mv-s      margin-top: 24px; margin-bottom: 24px

m-s       margin: 24px

mt--s      margin-top: -24px
mr--s      margin-right: -24px
mb--s      margin-bottom: -24px
ml--s      margin-left: -24px

mh--s      margin-left: -24px; margin-right: -24px
mv--s      margin-top: -24px; margin-bottom: -24px

m--s       margin: -24px

// there is also 'auto'
mt-a       margin-top: auto
mr-a       margin-right: auto
mb-a       margin-bottom: auto
ml-a       margin-left: auto

mh-a       margin-left: auto; margin-right: auto
mv-a       margin-top: auto; margin-bottom: auto

m-a        margin: auto

// padding classes would be like this:
pt-s       padding-top: 24px;
pr-s       padding-right: 24px;
// etc.
```

### We also support the (not so cool) Bootstrap 4 syntax
```
m-t-0       margin-top: 0
m-t         margin-top: 1rem // no-name means "sm (small)"
m-t-md      margin-top: 1.5rem
m-t-lg      margin-top: 3rem

m-a-lg      margin: 3rem // a means "all"
```
We added negative margins as well (they are missing in Bootstrap 4). Due to the weird syntax for small (no suffix instead of the logical `-sm`), the syntax for negative values is as follows.

```
m-neg        margin: -1rem
m-t-xs-neg   margin-top: -0.5rem
m-t-neg      margin-top: -1.0rem
m-t-md-neg   margin-top: -1.5rem
m-t-lg-neg   margin-top: -3rem

```

## Individualize
1. Install Sass (google it).
2. Run `npm install`
3. Change things in `source/` ()
4. Run `gulp` or `gulp deploy`
