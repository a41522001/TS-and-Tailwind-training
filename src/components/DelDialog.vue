<template>
  <div v-if="dialog"
    class="w-full h-dvh bg-black/50 fixed top-0 left-0 flex justify-center items-center">
    <div class="bg-white w-96 h-40 p-6 pb-3 rounded-md flex flex-col">
      <h1 class="text-2xl font-semibold">Delete Note?</h1>
      <div class="mt-auto flex justify-end">
        <button class="bg-red-500 text-white py-2 px-4 rounded-md me-1" @click="dialog = false">Cancel</button>
        <button class="bg-green-600 text-white py-2 px-4 rounded-md" @click="delNote">Confirm</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from "vue";
  import { useNoteStore } from "@/stores/noteStore";
  interface Props {
    modelValue: boolean;
    id: number;
  }
  const noteStore = useNoteStore();
  // 新的v-model方法
  const dialog = defineModel<boolean>();
  const props = defineProps<Props>();
  const delNote = (): void => {
    noteStore.delNote(props.id);
  }
  // 舊的v-model方法
  // const emits = defineEmits(['update:modelValue']);
  // const dialog = computed({
  //   get(): boolean {
  //     return props.modelValue;
  //   },
  //   set(value: boolean) {
  //     emits('update:modelValue', value);
  //   }
  // })

</script>