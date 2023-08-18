<template>
  <div>
    <p>{{ num }}</p>
    <p>{{ name }}</p>
    <p>{{ age }}</p>
    <input type="text" v-model="phrase" />
    <p>{{ reversePhrase }}</p>
    <button type="button" @click="increment">Increase</button>
    <button type="button" @click="age--">Decrease Age</button>
    <button type="button" @click="age++">Increase Age</button>
    <alert-message :user="user"></alert-message>
  </div>
</template>

<script setup>
import { ref, reactive, toRefs, onBeforeUnmount, onMounted } from "vue";
import AlertMessage from "./alert-message.vue";
import { usePhrase } from "./hooks/phrase";
onBeforeUnmount(() => {
  console.log("a");
  localStorage.setItem("time", new Date().toString());
});
onMounted(() => {
  console.log("onMounted()");
});
let num = ref(0);

function increment() {
  num.value++;
}
const user = reactive({
  name: "Bhavik",
  age: 21,
});

setTimeout(() => {
  user.age = 22;
}, 3000);

const { phrase, reversePhrase } = usePhrase();
const { name, age } = toRefs(user);
// watch(phrase, () => {
//   reversePhrase.value = phrase.value.split("").reverse().join("");
// });
</script>
