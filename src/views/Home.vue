<template>
  <div>
    <h1 class="bg-green-500 p-20">xiaopbudai</h1>
    <h2>{{ count }}</h2>
    <button @click="handleClick">安阿牛</button>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();
    const count = computed(() => store.state.home.count);
    const handleClick = () => {
      store.commit('home/add');
    };
    return {
      handleClick,
      count
    };
  }
})
</script>

<style lang="less" scoped>
</style>
