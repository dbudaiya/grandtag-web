<template>
  <div class="container bg-yellow-200 max-auto">
      详情页面

      <div>
        {{$route.params.id}}
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    

    return {}
  }
})
</script>

<style scoped>

</style>
