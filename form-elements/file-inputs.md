# File Inputs

## Default

```html live
<input type="file">
```

## Custom Style

```vue live
<template>
  <label class="flex items-center">
    <div class="px-8 py-2 mr-2 text-sm font-medium bg-gray-300 rounded-sm cursor-pointer focus:bg-gray-500 focus:outline-none">
      Select File
    </div>
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

## Custom Style for Direct Upload, with preview

> Adaptation of [Shrine's guide](https://github.com/shrinerb/shrine/wiki/Adding-Direct-App-Uploads) for Direct Upload, using [Uppy](https://github.com/transloadit/uppy)

```vue live
<template>
  <div class="flex flex-col items-center">
    <label ref="container" class="flex flex-col items-center">
      <div class="flex items-center justify-center w-20 h-20 mb-2 text-xl text-gray-500 border border-dashed rounded select-none">
        <img :src="previewSrc" v-if="previewSrc" class="object-cover w-full h-full">
        <template v-else>+</template>
      </div>
      <input
        type="hidden"
        :name="inputName"
        :value="fileData"
      >
    </label>
  </div>
</template>

<script>
import 'uppy/dist/uppy.min.css';
import '@uppy/file-input/dist/style.css'
import {
  Core as createUppyUploader,
  FileInput,
  ThumbnailGenerator,
  XHRUpload,
} from 'uppy';

export default {
  props: {
    inputName: { type: String, default: '' },
  },
  data() {
    return {
      fileData: null,
      previewSrc: null,
    };
  },
  mounted() {
    const container = this.$refs.container;

    const uppy = createUppyUploader({
      autoProceed: true,
    })
      .use(FileInput, { target: container, locale: { strings: { chooseFiles: "Select File" } } })
      .use(ThumbnailGenerator, { thumbnailHeight: 600 })
      .use(XHRUpload, { endpoint: '/upload' });

    uppy.on('upload-success', (file, response) => {
      const uploadedFileData = response.body.data;
      this.fileData = JSON.stringify(uploadedFileData);
    });

    uppy.on('thumbnail:generated', (file, preview) => {
      this.previewSrc = preview;
    });
  },
};
</script>
```
```css
.uppy-FileInput-btn {
  @apply px-8 py-2 text-sm font-medium bg-gray-300 rounded-sm cursor-pointer text-gray-700 border-0;
}
.uppy-FileInput-btn:focus {
  @apply bg-gray-500 outline-none;
}
.uppy-FileInput-btn:hover {
  @apply bg-gray-300 text-gray-700;
}
```
