<script lang="ts">
import { defineComponent, ref } from 'vue'
import { darkTheme, GlobalThemeOverrides, NThemeEditor } from 'naive-ui';
import Content from './Content.vue'

export default defineComponent({
  components: {
    NThemeEditor,
    Content
  },
  setup() {
    const themeOverrides: GlobalThemeOverrides = {
      common: {
        primaryColor: '#FF0000',
        fontWeight: '700'
      },
      Button: {
        textColor: '#FF0000'
      }
    }
    return {
      darkTheme,
      theme: ref(null),
      themeOverrides
    }
  }
})
</script>

<template>
  <n-config-provider :theme="theme" :theme-overrides="themeOverrides">
    <n-theme-editor>
      <n-message-provider>
        <n-button @click="theme = darkTheme">深色</n-button>
        <n-button @click="theme = null">浅色</n-button>
        <Content />
      </n-message-provider>
        <n-global-style />
    </n-theme-editor>
  </n-config-provider>
</template>
