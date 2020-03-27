<template functional>
  <div class="my-2 preview-code">
    <div class="block p-6 font-sans text-center border rounded">
      <slot name="preview" />
    </div>
    <div :class="`language-${props.lang} editor block`">
      <slot name="editor" />
    </div>
  </div>
</template>
