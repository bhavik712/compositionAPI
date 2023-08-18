import { ref, computed } from "vue";
export const usePhrase = () => {
  const phrase = ref("");
  const reversePhrase = computed(() =>
    phrase.value.split("").reverse().join("")
  );

  return { phrase, reversePhrase };
};
