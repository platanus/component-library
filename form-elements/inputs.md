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

```css
.bg-icon-chevron-down {
  background-image: url('data:image/svg+xml,<svg width="32" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 111.41 1.41l-4.59 4.59a.996.996 0 01-1.41 0L6.7 10.7a.996.996 0 010-1.41c.39-.38 1.03-.39 1.42 0z" fill="#000" fill-rule="nonzero"/></svg>>');
}
```
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

## Radio and Checkboxes

#### Checkbox

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

#### Radio

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
