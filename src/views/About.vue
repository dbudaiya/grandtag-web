<template>
  <div>
    <h2>{{ $t('title') }}</h2>
    <n-button @click="eventChangeLang('en')">英文</n-button>
    <n-button @click="eventChangeLang('zh-CN')">中文</n-button>

    <div v-for="(item, index) in users" :key="item">
      <span>{{ item['name'] }}</span>
      <span>{{ item['qq'] }}</span>
      <span>{{ item['mtime'] }}</span>
      <span>{{ item['stars'] }}</span>
      <span>{{ item['add'] }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import '../mock/index.ts'
import { defineComponent, onMounted, ref } from "vue";
import axios from "axios"
import { useI18n } from "vue-i18n";

export default defineComponent({
  setup() {
    let users = ref([])
    let currentLocale = ref('')   //初始化
    const { locale } = useI18n();

    onMounted(() => {
      let lg = window.localStorage.getItem('locale') || locale.value;
      currentLocale.value = lg

      axios.get(`/api/getUsers`).then(res => {
        users.value = res.data.data
      }).catch(err => {
        console.log(err)
      })
    })
    const handler = () => {
      // 需要确保已经在 setup 中执行了 window.$message = message
      window.$message.success(
        'Cause you walked hand in hand With another man in my place'
      )
    }
    const eventChangeLang = (lang: string) => {
      if (lang == 'en') {
        locale.value = lang
        window.localStorage.setItem("locale", lang);

      } else {
        locale.value = lang
        window.localStorage.setItem("locale", lang);

      }
    }

    return {
      users,
      eventChangeLang,
      handler
    }
  }
})
</script>
