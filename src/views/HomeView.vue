<script setup>
import CalenderWeek from '../components/CalenderWeek.vue'
import CalenderEntry from '../components/CalenderEntry.vue'
// import {reactive} from 'vue'
// import {store}from '../stores/index'
// const StoreState = store.state
// const newNumber = reactive(0)
// const PushNumber = (value)=>{
//   store.pushNumber(value)

// }
</script>

<template>
  <main class="container mx-auto">
    <CalenderWeek />
    <CalenderEntry />
  </main>
</template>
<style >
html,
body,
#app {
  height: 100%;
}

#app {
  background: #6e6e6e;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-align-items: center;
  justify-content: center;
  -webkit-justify-content: center;
}
</style>
