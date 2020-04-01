# Form Inputs

## Text

```html live
<input
  type="text"
  class="w-full px-3 py-2 border rounded-md"
  value="Input text"
/>
```

## With Label

```html live
<div class="text-left">
  <label class="block text-xs font-medium">Label</label>
  <input
    type="text"
    class="w-full px-3 py-2 border rounded-md"
    value="Input text"
  />
</div>
```

## With Label and Helper Text

```html live
<div class="text-left">
  <label class="block text-xs font-medium">Label</label>
  <input
    type="text"
    class="w-full px-3 py-2 border rounded-md"
    value="Input text"
  />
  <p class="block text-xs text-gray-500">Help text</p>
</div>
```

## Select Dropdowns

``` html live
<select
  class="w-full px-3 py-2 bg-white bg-right bg-no-repeat border rounded-md appearance-none bg-icon-chevron-down"
>
  <option>Choice 1</option>
  <option>Choice 2</option>
  <option>Choice 3</option>
  <option>Choice 4</option>
</select>
```
```css
.bg-icon-chevron-down {
  background-image: url("data:image/svg+xml,data:image/svg+xml,%3Csvg width='32' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 111.41 1.41l-4.59 4.59a.996.996 0 01-1.41 0L6.7 10.7a.996.996 0 010-1.41c.39-.38 1.03-.39 1.42 0z' fill='%23000' fill-rule='nonzero'/%3E%3C/svg%3E");
}
```

## Radio and Checkboxes

### Checkbox

```html live
<div class="text-left">
  <label class="block">
    <input type="checkbox" class="mr-2" name="check">
    Input Text
  </label>
  <label class="block">
    <input type="checkbox" class="mr-2" name="check" checked>
    Input Text
  </label>
</div>
```

### Radio

```html live
<div class="text-left">
  <label class="block">
    <input type="radio" class="mr-2" name="radio">
    Input Text
  </label>
  <label class="block">
    <input type="radio" class="mr-2" name="radio" checked>
    Input Text
  </label>
</div>
```

## Custom Checkboxes and Radio

First, add the `checked` variant to your `tailwind.config.js`

```javascript
// tailwind.config.js
const defaultConfig = require('tailwindcss/defaultConfig');

module.exports = {
  variants: {
    backgroundColor: [
      ...defaultConfig.variants.backgroundColor,
      'checked',
    ],
    borderColor: [
      ...defaultConfig.variants.borderColor,
      'checked',
    ],
  },
  plugins: [
    // or use https://github.com/benface/tailwindcss-interaction-variants
    plugin(({ addVariant, e }) => {
      addVariant('checked', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => `.${e(`checked${separator}${className}`)}:checked`);
      });
    }),
  ],
}
```

### Custom Checkbox

```html live
<div class="text-left">
  <label class="flex items-center">
    <input
      type="checkbox"
      class="w-4 h-4 mr-2 bg-center bg-no-repeat border-2 rounded-sm appearance-none bg-icon-check focus:outline-none checked:bg-green-400 checked:border-green-400"
    >
    Input Text
  </label>
  <label class="flex items-center">
    <input
      type="checkbox"
      class="w-4 h-4 mr-2 bg-center bg-no-repeat border-2 rounded-sm appearance-none bg-icon-check focus:outline-none checked:bg-green-400 checked:border-green-400"
      checked
    >
    Input Text
  </label>
</div>
```
```css
.bg-icon-check {
  background-image: url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 14 10' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.293 9.293a.996.996 0 01-1.41 0l-3.59-3.59a.996.996 0 111.41-1.41l2.88 2.88 6.88-6.88a.996.996 0 111.41 1.41l-7.58 7.59z' fill='%23FFF' fill-rule='evenodd'/%3E%3C/svg%3E");
}
```

### Custom Radio

```html live
<div class="text-left">
  <label class="flex items-center">
    <input
      type="radio"
      class="relative w-4 h-4 mr-2 bg-white border-4 rounded-full appearance-none focus:outline-none checked:bg-green-400"
      name="radio"
    >
    Input Text
  </label>
  <label class="flex items-center">
    <input
      type="radio"
      class="relative w-4 h-4 mr-2 bg-white border-4 rounded-full appearance-none focus:outline-none checked:bg-green-400"
      name="radio"
      checked
    >
    Input Text
  </label>
</div>
```
