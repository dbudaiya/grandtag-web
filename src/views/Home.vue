<template>
  <!-- <h1 class="bg-green-500 p-20">xiaopbudai</h1>
    <h2>{{ count }}</h2>
    <n-icon size="40" color="#0e7a0d">
      <game-controller />
    </n-icon>
  <n-button @click="handleClick">naive-ui</n-button>-->
  <div class="container bg-indigo-400 mx-auto">
    <div class="text-4xl m-4 p-4 text-center">Home页面</div>
  </div>
</template>
<script lang="ts">
import { GameController } from '@vicons/ionicons5'
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
      GameController,
      defineComponent,
      computed,
      useStore,
      store,
      count,
      handleClick,
    };
  },
});
</script>

<style lang="less" scoped>
</style>
