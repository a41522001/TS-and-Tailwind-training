<template>
  <AddAndEditNote v-model="newNote" placeholder="Add your note..." ref="textarea">
    <template #button>
      <button @click="addNote" :disabled="newNote == ''"
        class="text-white text-xl rounded-md bg-emerald-400 hover:bg-emerald-800 px-4 py-2">
        Add New Note
      </button>
    </template>
  </AddAndEditNote>
  <div class="mt-5">
    <Notes 
      v-for="note in notes" 
      :key="note.id"
      :note="note" 
      class="mb-5">
    </Notes>
  </div>
</template>

<script setup lang="ts">
  import { ref, reactive } from "vue";
  import Notes from "@/components/Note.vue";
  import AddAndEditNote from "@/components/AddAndEditNote.vue";
  import { useNoteStore } from "@/stores/noteStore";
  import { storeToRefs } from "pinia";
  import { type Note } from "@/model/index";
  const noteStore = useNoteStore();
  const { notes } = storeToRefs(noteStore);
  const newNote = ref<string>("");
  const textarea = ref();
  const addNote = (): void => {
    if(newNote.value === "") return;
    const id: number = new Date().getTime();
    const note: Note = {
      id,
      content: newNote.value
    }
    noteStore.addNote(note);
    newNote.value = "";
    textarea.value.textareaFocus();
  }
</script>