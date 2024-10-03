<template>
  <div class="bg-white rounded-xl">
    <div class="p-5">
      <p>{{ props.note.content }}</p>
    </div>
    <div class="flex">
      <button @click="editNote" class="grow py-3 text-sky-500 border-t border-e">Edit</button>
      <button @click="delNote" class="grow py-3 text-sky-500 border-t">Delete</button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useRouter } from "vue-router";
  import { useNoteStore } from "@/stores/noteStore";
  import { type Note } from "@/model/index";
  const noteStore = useNoteStore();
  const router = useRouter();
  const props = defineProps<{ note: Note }>();
  const delNote = (): void => {
    const id = props.note.id;
    noteStore.delNote(id);
  }
  const editNote = (): void => {
    router.push(`/edit/${props.note.id}`);
  }
</script>