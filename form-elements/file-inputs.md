# File Inputs

## Default

```html live
<input type="file">
```

## Custom Style

```vue live
<template>
  <label class="flex items-center">
    <button class="px-8 py-2 mr-2 text-sm font-medium bg-gray-300 rounded-sm cursor-pointer focus:bg-gray-500 focus:outline-none">
      Select File
    </button>
    <p class="truncate">{{ value ? value.name : 'No file chosen' }}</p>
    <input
      class="hidden"
      type="file"
      @change="onChange"
    >
  </label>
</template>

<script>
export default {
  data() {
    return {
      value: null,
    }
  },
  methods: {
    onChange(e) {
      this.value = e.target.files[0];
    },
  },
};
</script>
```

## Custom Style With Image Preview

```vue live
<template>
  <label class="flex flex-col items-center">
    <div class="flex items-center justify-center w-20 h-20 mb-2 text-xl text-gray-500 border border-dashed rounded select-none">
      <img :src="imagePreviewPath" v-if="imagePreviewPath" class="object-cover w-full h-full">
      <template v-else>+</template>
    </div>
    <div class="px-8 py-2 text-sm font-medium bg-gray-300 rounded-sm cursor-pointer focus:bg-gray-500 focus:outline-none">
      Select File
    </div>
    <input
      class="hidden"
      type="file"
      accept=".png, .jpg, .jpeg, .gif"
      @change="onChange"
    >
  </label>
</template>

<script>
export default {
  data() {
    return {
      value: null,
    }
  },
  computed: {
    imagePreviewPath() {
      return this.value ? window.URL.createObjectURL(this.value) : null;
    }
  },
  methods: {
    onChange(e) {
      this.value = e.target.files[0];
    },
  },
};
</script>
```

## Custom Style With Multiple Images

```vue live
<template>
  <label class="flex flex-col items-center">
    <div class="px-8 py-2 mb-2 text-sm font-medium bg-gray-300 rounded-sm cursor-pointer focus:bg-gray-500 focus:outline-none">
      Select Images
    </div>
    <div class="flex flex-wrap justify-center">
      <div class="flex w-20 h-20 m-1 border border-dashed rounded select-none" v-for="file in files">
        <img :src="file | objectURL" class="object-cover w-full h-full">
      </div>
    </div>
    <input
      class="hidden"
      type="file"
      accept=".png, .jpg, .jpeg, .gif"
      @change="onChange"
      multiple
    >
  </label>
</template>

<script>
export default {
  data() {
    return {
      files: null,
    }
  },
  methods: {
    onChange(e) {
      this.files = e.target.files;
    },
  },
  filters: {
    objectURL(file) {
      return window.URL.createObjectURL(file);
    }
  }
};
</script>
```
