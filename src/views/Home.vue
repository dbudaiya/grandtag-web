<template>
  <div>
    <h1 class="bg-green-500 p-20">xiaopbudai</h1>
    <h2>{{ count }}</h2>
    <n-icon size="40" color="#0e7a0d">
      <game-controller />
    </n-icon>
    <n-button @click="handleClick">naive-ui</n-button>

    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/w-iLl7MwmsI?controls=0"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>
<script lang="ts">
import { GameController } from '@vicons/ionicons5'
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  components: {
    GameController,
  },
  setup() {
    const store = useStore();
    const count = computed(() => store.state.home.count);
    const handleClick = () => {
      store.commit('home/add');
    };
    return {
      handleClick,
      count,
      GameController
    };
  }
})
</script>

<style lang="less" scoped>
</style>
