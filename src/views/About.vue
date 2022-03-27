<template>
  <div>
    <h2>About</h2>
    <div v-for="(item, index) in users" :key="item">{{ item['name'] }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import axios from "axios"
import '../mock/index.ts'

export default defineComponent({
  setup() {
    let users = ref([])
    onMounted(() => {
      axios.get(`/api/getUsers`).then(res => {
        users.value = res.data.data
      }).catch(err => {
        console.log(err)
      })
    })

    return { users }
  }
})
</script>

<style scoped>
</style>


