<template>
  <AddAndEditNote v-model="newNote" placeholder="Edit your note" label="Edit Note">
    <template #button>
      <button @click="prePage" class="text-white text-xl rounded-md bg-red-500 hover:bg-red-800 px-4 py-2 me-2">Cancel</button>
      <button @click="editNote" :disabled="newNote === ''" 
        class="text-white text-xl rounded-md bg-emerald-400 hover:bg-emerald-800 px-4 py-2">
        Confirm
      </button>
    </template>
  </AddAndEditNote>
</template>

<script setup lang="ts">
  import { ref, onMounted } from "vue";
  import { useRoute, useRouter } from "vue-router";
  import { useNoteStore } from "@/stores/noteStore";
  import { storeToRefs } from "pinia";
  import { type Note } from "@/model/index";
  import AddAndEditNote from "@/components/AddAndEditNote.vue";
  const noteStore = useNoteStore();
  const { notes } = storeToRefs(noteStore);
  const route = useRoute();
  const router = useRouter();
  const newNote = ref<string>("");
  const noteId = ref<number>();
  const editNote = (): void => {
    noteStore.editNote(noteId.value!, newNote.value);
    router.back();
  }
  const prePage = (): void => {
    router.back();
  }
  onMounted(() => {
    const id: number = Number(route.params.id);
    const note: Note = notes.value.find(note => note.id === id)!;
    newNote.value = note.content!;
    noteId.value = note.id!;
  })
</script>