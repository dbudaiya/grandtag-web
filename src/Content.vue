<template>
  <n-space>
    <router-link to="/news">News || </router-link>
    <router-link to="/home">Home ||</router-link>
    <router-link to="/video">Video ||</router-link>
    <router-link to="/about">About  || </router-link>
    <router-view></router-view>
  </n-space>
</template>

<script lang="ts">
import { useMessage } from 'naive-ui'
import { defineComponent } from 'vue'
import SY from '@/components/header/index.vue'

export default defineComponent({
  components: {
    SY,
  },
  setup() {
    window.$message = useMessage()
  }
})
</script>

