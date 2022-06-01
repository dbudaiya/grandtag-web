<template>
  <router-link v-for="item in RI" :to="item.path" :key="item.path" class="px-12">{{ item.name }}</router-link>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { routes_info } from '~/mock/routes.ts'

export default defineComponent({

  setup() {
    const RI = reactive(routes_info)

    return {
      RI
    }
  }
})
</script>

<style scoped>
</style>
