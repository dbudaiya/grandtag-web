<template>
<div class="container bg-indigo-400 mx-auto">
    <div class="text-4xl m-4 p-4 text-center">就能看开大脚时代峻峰</div>
    <n-button @click="xx(i)" v-for="i in 10">按钮</n-button>
    <div class="p-10"> </div>
  </div>
</template>

<script lang="ts">
import { defineComponent,reactive } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup () {
    const Router = useRouter();
    const xx = (i:number)=>{
      Router.push(`/reward-detail/${i}`)
    }
    return {xx}
  }
})
</script>

<style scoped>

</style>
