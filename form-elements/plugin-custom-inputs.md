# Tailwind CSS Custom Forms

[Repository](https://github.com/tailwindcss/custom-forms) - [Documentation](https://tailwindcss-custom-forms.netlify.com/)

Official-ish library that provides custom CSS for form inputs.

```bash
yarn add @tailwindcss/custom-forms -D
```

```javascript
// tailwind.config.js
module.exports = {
  // ...
  plugins: [
    require('@tailwindcss/custom-forms')
  ]
```

## Text

```html live
<input class="block w-full mt-1 form-input" placeholder="Jane Doe">
```

## Select

```html live
<select class="form-select">
  <option>Option 1</option>
  <option>Option 2</option>
  <option>Option 3</option>
  <option>Option 4</option>
  <option>Option 5</option>
</select>
```

## Checkbox
```html live
<label class="block">
  <input type="checkbox" class="text-green-600 form-checkbox" checked>
  Item 1
</label>
<label class="block">
  <input type="checkbox" class="text-green-600 form-checkbox">
  Item 2
</label>
```

## Radio
```html live
<label class="block">
  <input type="radio" class="text-green-600 form-radio"  name="radio" checked>
  Item 1
</label>
<label class="block">
  <input type="radio" class="text-green-600 form-radio" name="radio">
  Item 2
</label>
```
