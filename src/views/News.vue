<template>
  <n-button @click="headle">接口请求1</n-button>
  <n-button @click="headle1">接口请求2</n-button>

  
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { HomeService } from '~/api'

export default defineComponent({
  setup() {
    const headle = async () => {
      const res = await HomeService.getBanner()
      console.log(res)
    }
    const headle1 = async () => {
      const res = await HomeService.getBanner1()
      console.log(res)
    }
    return { headle, headle1, isMenuOpen: ref(false) }
    
  }
})
</script>

<style scoped>
</style>
