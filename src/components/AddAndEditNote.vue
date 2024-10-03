<template>
  <div class="p-3 bg-emerald-600 rounded-xl">
    <label v-if="props.label" class="text-white text-xl">{{ props.label }}</label>
    <div class="bg-white rounded-md mt-2">
      <textarea v-model="newNote" ref="textarea" :placeholder="props.placeholder" class="w-full resize-none p-3 h-40 rounded-md"></textarea>
    </div>
    <div class="flex justify-end mt-3 mb-1">
      <slot name="button" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  interface Prop {
    placeholder: string,
    label?: string
  }
  const props = defineProps<Prop>()
  const newNote = defineModel<string>("modelValue");
  const textarea = ref<HTMLTextAreaElement>();
  const textareaFocus = (): void => {
    textarea.value?.focus();
  }
  defineExpose({
    textareaFocus
  })
</script>