<template>
  <div v-if="flag" style="color: red">You Should Vote Now</div>
</template>
<script setup>
import { computed } from "vue";
const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
});
const flag = computed(() => {
  return props.user.age >= 18;
});
</script>
