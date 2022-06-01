	<template>
  <Player playsinline ref="player" @vPlaybackReady="onPlaybackReady">
    <Video poster="https://media.vimejs.com/poster.png">
          <source
            data-src="https://media.vimejs.com/720p.mp4"
            type="video/mp4"
          />
    </Video>
    <!-- <Youtube videoId="DyTCOwB0DVw" /> -->
    <DefaultUi>
      <TapSidesToSeek />
    </DefaultUi>
  </Player>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Player, Video, DefaultUi, Youtube } from '@vime/vue-next';
// Default theme.
import '@vime/core/themes/default.css';
import TapSidesToSeek from './TapSidesToSeek.vue';
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
    const player = ref<HTMLVmPlayerElement | null>(null);
    return { player };
  },
  methods: {
    onPlaybackReady() {
    },
  },
});
</script>

