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
  <DelDialog v-model="dialog.delDialog" :id="id"/>
</template>

<script setup lang="ts">
  import { ref, reactive } from "vue";
  import { useRouter } from "vue-router";
  import { type Note } from "@/model/index";
  import DelDialog from "./DelDialog.vue";
  const router = useRouter();
  interface Props {
    note: Note;
  }
  type Dialog = {
    delDialog: boolean;
  }
  const props = defineProps<Props>();
  const dialog: Dialog = reactive({
    delDialog: false,
  })
  const id = ref<number>(-1);
  const delNote = (): void => {
    dialog.delDialog = true;
    id.value = props.note.id;
  }
  const editNote = (): void => {
    router.push(`/edit/${props.note.id}`);
  }
</script>