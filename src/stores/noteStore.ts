import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import { type Note } from "@/model/index";

export const useNoteStore = defineStore('note', () => {
  const notes: Note[] = reactive([
    {
      id: 1,
      content: "21324564312"
    },
    {
      id: 2,
      content: "55555555555"
    }
  ]);
  const addNote = (note: Note): void => {
    notes.unshift(note);
  }
  const delNote = (id: number): void => {
    const index = notes.findIndex(note => note.id === id);
    notes.splice(index, 1);
  }
  const editNote = (id: number, content: string): void => {
    const note = notes.find(note => note.id === id);
    if(note) {
      note.content = content;
    }
  }
  return { notes, addNote, delNote, editNote }
})
