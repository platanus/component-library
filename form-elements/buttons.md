# Buttons

## Basic Buttons

### Small

```html live
<button class="px-4 py-1 text-sm font-medium bg-gray-300 cursor-pointer focus:bg-gray-500 focus:outline-none">BUTTON</button>
```

### Default

```html live
<button class="px-8 py-2 text-sm font-medium bg-gray-300 cursor-pointer focus:bg-gray-500 focus:outline-none">BUTTON</button>
```

### Large

```html live
<button class="px-8 py-4 text-sm font-medium bg-gray-300 cursor-pointer focus:bg-gray-500 focus:outline-none">BUTTON</button>
```

## Button Bars

```html live
<div class="flex justify-center">
  <button class="flex-grow px-4 py-1 text-sm font-medium bg-gray-300 border border-r-0 cursor-pointer focus:bg-gray-500 focus:outline-none">1</button>
  <button class="flex-grow px-4 py-1 text-sm font-medium bg-white border border-r-0 cursor-pointer focus:bg-gray-500 focus:outline-none">2</button>
  <button class="flex-grow px-4 py-1 text-sm font-medium bg-white border border-r-0 cursor-pointer focus:bg-gray-500 focus:outline-none">3</button>
  <button class="flex-grow px-4 py-1 text-sm font-medium bg-white border border-r-0 cursor-pointer focus:bg-gray-500 focus:outline-none">4</button>
  <button class="flex-grow px-4 py-1 text-sm font-medium bg-white border cursor-pointer focus:bg-gray-500 focus:outline-none">5</button>
</div>
```

```html live
<div class="flex justify-center">
  <button class="flex-grow px-4 py-1 text-sm font-medium bg-gray-300 border border-r-0 cursor-pointer focus:bg-gray-500 focus:outline-none">LEFT</button>
  <button class="flex-grow px-4 py-1 text-sm font-medium bg-white border border-r-0 cursor-pointer focus:bg-gray-500 focus:outline-none">CENTER</button>
  <button class="flex-grow px-4 py-1 text-sm font-medium bg-white border cursor-pointer focus:bg-gray-500 focus:outline-none">RIGHT</button>
</div>
```

## Buttons with Icons

### Left
```html live
<button class="px-4 py-2 text-sm font-medium bg-gray-300 cursor-pointer focus:bg-gray-500 focus:outline-none">
  <svg class="inline-block mr-1" width="20" height="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M-12-11h113v40H-12z" fill="#EEE"/><path d="M-2-3h24v24H-2z"/><path d="M17.66.99c-2.64-1.8-5.9-.96-7.66 1.1C8.24.03 4.98-.82 2.34.99.94 1.95.06 3.57 0 5.28c-.14 3.88 3.3 6.99 8.55 11.76l.1.09c.76.69 1.93.69 2.69-.01l.11-.1C16.7 12.26 20.13 9.15 20 5.27c-.06-1.7-.94-3.32-2.34-4.28zM10.1 15.55l-.1.1-.1-.1C5.14 11.24 2 8.39 2 5.5 2 3.5 3.5 2 5.5 2c1.54 0 3.04.99 3.57 2.36h1.87C11.46 2.99 12.96 2 14.5 2c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" fill="#000"/></g></svg>
  BUTTON
</button>
```

### Right
```html live
<button class="px-4 py-2 text-sm font-medium bg-gray-300 cursor-pointer focus:bg-gray-500 focus:outline-none">
  BUTTON
  <svg class="inline-block ml-2" width="12" height="7" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M-85-17H28v40H-85z" fill="#EEE"/><text transform="translate(-73 -16)" fill="#383B41" font-family="Rubik-Medium, Rubik" font-size="14" font-weight="400"><tspan x="0" y="15.281">BUTTON</tspan></text><path d="M2.12.29L6 4.17 9.88.29a.996.996 0 111.41 1.41L6.7 6.29a.996.996 0 01-1.41 0L.7 1.7A.996.996 0 01.7.29c.39-.38 1.03-.39 1.42 0z" fill="#000"/></g></svg>
</button>
```

### Left and Right
```html live
<button class="px-4 py-2 text-sm font-medium bg-gray-300 cursor-pointer focus:bg-gray-500 focus:outline-none">
  <svg class="inline-block mr-1" width="20" height="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M-12-11h113v40H-12z" fill="#EEE"/><path d="M-2-3h24v24H-2z"/><path d="M17.66.99c-2.64-1.8-5.9-.96-7.66 1.1C8.24.03 4.98-.82 2.34.99.94 1.95.06 3.57 0 5.28c-.14 3.88 3.3 6.99 8.55 11.76l.1.09c.76.69 1.93.69 2.69-.01l.11-.1C16.7 12.26 20.13 9.15 20 5.27c-.06-1.7-.94-3.32-2.34-4.28zM10.1 15.55l-.1.1-.1-.1C5.14 11.24 2 8.39 2 5.5 2 3.5 3.5 2 5.5 2c1.54 0 3.04.99 3.57 2.36h1.87C11.46 2.99 12.96 2 14.5 2c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" fill="#000"/></g></svg>
  BUTTON
  <svg class="inline-block ml-2" width="12" height="7" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M-85-17H28v40H-85z" fill="#EEE"/><text transform="translate(-73 -16)" fill="#383B41" font-family="Rubik-Medium, Rubik" font-size="14" font-weight="400"><tspan x="0" y="15.281">BUTTON</tspan></text><path d="M2.12.29L6 4.17 9.88.29a.996.996 0 111.41 1.41L6.7 6.29a.996.996 0 01-1.41 0L.7 1.7A.996.996 0 01.7.29c.39-.38 1.03-.39 1.42 0z" fill="#000"/></g></svg>
</button>
```

### Only Icon
```html live
<button class="px-3 py-2 text-sm font-medium bg-gray-300 cursor-pointer focus:bg-gray-500 focus:outline-none">
  <svg class="inline-block" width="12" height="7" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M-85-17H28v40H-85z" fill="#EEE"/><text transform="translate(-73 -16)" fill="#383B41" font-family="Rubik-Medium, Rubik" font-size="14" font-weight="400"><tspan x="0" y="15.281">BUTTON</tspan></text><path d="M2.12.29L6 4.17 9.88.29a.996.996 0 111.41 1.41L6.7 6.29a.996.996 0 01-1.41 0L.7 1.7A.996.996 0 01.7.29c.39-.38 1.03-.39 1.42 0z" fill="#000"/></g></svg>
</button>
```
