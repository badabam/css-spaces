# CSS Spaces
A simple CSS spacing library for margins, paddings (and more later ...) written in Sass (SCSS)

## Why another css library?
Many libraries do everything: margins, buttons, grid, helpers. CSS Spaces just adds **some classes to add spaces between elements**. Use it with whatever framework or lib you like.

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
<link rel="stylesheet" href="bower_components/css-spacing/dist/spaces.css">
</head>
```

Add classes to create paddings and margins.

The following header has a <b>m</b>argin-<b>t</b>op with the size of **xl** (which is 64px by default):
```html
<body>
<header class="mt-xl">This is the header.</header>
</body>
```

These elements have no padding:
```html
<body>
<h1 class="p-n">Lorem ipsum</h1>
<h2 class="p-n">Dolor sit</h2>
</body>
```

This navigation is centered:
```html
<body>
<!-- Read "margin-vertical-null margin-horizontal-auto" -->
<nav class="mv-n mh-a">
  <a href="/">Home</a>
</nav>
</body>
```

All properties have `!important` as you should only add those classes, if you definitely want a specific behavior.

### How it works

All classes are composed of some simple parts.

#### 1. Property shortcut
```
m         margin
   -OR-
p         padding
```


#### 2. Direction
```
t         top
b         bottom
r         right
l         left

v         vertical
h         horizontal

(none)    No direction specified means *all* directions (like in `margin: 8px;`)

```

#### 3. Delimiter
```
-         positive value
--        negative value
```
Example:
```css
.mt-xs  { margin-top: 4px }
.mt--xs { margin-top: -4px }
```

#### 4. Size
```
xxs        2px
xs         4px
s          8px
m          16px
l          32px
xl         64px
xxl        128px
```

#### Possible margin classes

This are just a few examples. You'll get the point. Of course you can use all the others from `xxs` to `xxl` as well.

```
mt-xs      margin-top: 2px
mr-xs      margin-right: 2px
mb-xs      margin-bottom: 2px
ml-xs      margin-left: 2px

ml--xs     margin-left: -2px

mh-xs      margin-left: 2px; margin-right: 2px
mv-xs      margin-top: 2px; margin-bottom: 2px

mh--xs     margin-left: -2px; margin-right: -2px

ml-a       margin-left: auto
ml-n       margin-left: none

m-xs       margin: 2px
m-n        margin: none
m-a        margin: auto
```

## Individualize
1. Install Sass (google it).
2. Run `npm install`
3. Change things in `source/` ()
4. Run `gulp` or `gulp deploy`
