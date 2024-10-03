import { watch, type Ref } from "vue";
export const useWatchCharacter = (value: Ref<string>, maxChars: number = 100): void => {
  watch(value, (newValue) => {
    if(newValue.length >= maxChars) {
      alert(`A string's maximum length is ${maxChars}`);
    }
  })
}