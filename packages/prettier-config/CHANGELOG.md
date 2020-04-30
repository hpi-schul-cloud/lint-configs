# 1.0.0 - Initial Stable Release

**Breaking**

- changed `singleQuote` from `false` to `true` to be more compliant with the eslint rules we use. For Repos that contain a lot of html code, we still recommend using `false` to be more consistent between your js and the html (which required double quotes for attributes).

# 0.2.0

**Breaking**

change `htmlWhitespaceSensitivity` from `strict` to `css` to prevent ugly HTML formatting like
```html
<div
>Text<
  div>
```
instead of
```html
<div>
  Text
<div>
```