	<template>
  <div id="app">
    <div id="container">
      <Player playsinline ref="player" @vPlaybackReady="onPlaybackReady">
        <!-- <Video poster="https://media.vimejs.com/poster.png">
          <source
            data-src="https://media.vimejs.com/720p.mp4"
            type="video/mp4"
          />
        </Video>-->

        <Youtube videoId="DyTCOwB0DVw" />
        <DefaultUi>
          <!-- Custom UI component. -->
          <TapSidesToSeek />
        </DefaultUi>
      </Player>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Player, Video, DefaultUi, Youtube } from '@vime/vue-next';
// Default theme.
import '@vime/core/themes/default.css';
// Optional light theme (extends default).
// import '@vime/core/themes/light.css';
// Custom UI Component.
import TapSidesToSeek from './as.vue';
export default defineComponent({
  name: 'App',
  components: {
    Player,
    Video,
    DefaultUi,
    TapSidesToSeek,
    Youtube
  },
  setup() {
    // Obtain a ref if you need to call any methods.
    const player = ref<HTMLVmPlayerElement | null>(null);
    return { player };
  },
  methods: {
    onPlaybackReady() {
      // ...
    },
  },
});
</script>
