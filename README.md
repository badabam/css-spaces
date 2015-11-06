# CSS Spacing
A simple CSS spacing library for margins, paddings (and more later ...) written in Sass (SCSS)

## Why another css library?
Many libraries do everything: margins, buttons, grid, helpers. CSS Spacing just adds **some classes to add spaces between elements**. Use it with whatever framework or lib you like.

## Install with bower
```shell
$ bower install css-spacing
```

## Usage
Include the spacing.css to your website:

```html
<head>
<!-- other stuff -->
<link rel="stylesheet" href="bower_components/css-spacing/dist/spacing.css">
</head>
```

Add classes to create paddings and margins.

The following header has a <b>m</b>argin-<b>t</b>op with the size of **xl** (which is 64px by default):
```html
<body>
<header class="mt-xl>This is the header.</header>
</body>
```

This elements have no padding:
```html
<body>
<!-- Read "margin-vertical-null margin-horizontal-auto" -->
<nav class="mv-n mh-a">
  <a href="/">Home</a>
</nav>
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

All properties get `!important` as you should only

### How it works

All classes are composed of some simple parts.

#### 1. Property shortcut
`m` – margin

#### 2. Direction
`t` - top
`b` - bottom
`r` – right
`l` - left
`v` - vertical
`h` - horizontal

No direction specified means *all* directions (like in `margin: 8px;`)

#### 3. Delimiter

`-` - normal delimiter
`--` - negative value

Examples:
```css
.mt-xs  { margin-top: 4px }
.mt--xs { margin-top: -4px }
```

#### 4. Size
```
xxs:      2px
xs:       4px
s:        8px
m:       16px
l:       32px
xl:      64px
xxl:    128px
```

#### Possible margin classes

This are just a few examples. You'll get the point. Of course you can use all the others from `xxs` to `xxl` as well.

class  | css value (simplified)
-------|--------------
mt-xs  | margin-top: 2px
mr-xs  | margin-right: 2px
mb-xs  | margin-bottom: 2px
ml-xs  | margin-left: 2px
ml--xs | margin-left: -2px
       |
mh-xs  | margin-left: 2px; margin-right: 2px
mv-xs  | margin-top: 2px; margin-bottom: 2px
mh--xs | margin-left: -2px; margin-right: -2px
       |
ml-a   | margin-left: auto
ml-n   | margin-left: none
       |
m-xs   | margin: 2px
m-n    | margin: none
m-a    | margin: auto
