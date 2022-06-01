<template>
  <Header />
  <router-view></router-view>
  <Footer />
</template>

<script lang="ts">
import { useMessage } from 'naive-ui'
import { defineComponent } from 'vue'
import Header from '~/components/header/index.vue'
import Footer from '~/components/footer/index.vue'


export default defineComponent({
  components: {
    Footer,
    Header
  },
  setup() {
    window.$message = useMessage()
  }
})
</script>

