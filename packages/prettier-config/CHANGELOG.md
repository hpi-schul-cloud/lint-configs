# 1.0.0 - Initial Stable Release

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