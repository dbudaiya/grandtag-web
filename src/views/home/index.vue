<template>
  <div class="bg-yellow-400">
    <div class="container bg-indigo-400 mx-auto">
      <div class="text-4xl m-4 p-4 text-center">Home页面</div>
      <n-button @click="eventPlayVideo">来吧</n-button>
      <n-modal v-model:show="isPlayVideo" size="huge">
        <div class="w-1/2">
          <PopVideo />
        </div>
      </n-modal>
    </div>
  </div>
  <div class="min-h-full grid grid-cols-1 gap-5">
    <div class="theme-lignt p-10 bg-base">
      <h2 class="mb-6 text-3xl font-semibold text-left text-primary">最近文章</h2>
      <ul class="space-y-10">
        <li>
          <a>
            <article
              class="relative flex items-center transition-transform transform group hover:-translate-x-2"
            >
              <div
                class="flex flex-col flex-grow py-8 space-y-4 text-base rounded px-8 shadow-md bg-off-base"
              >
                <div class="flex flex-row justify-between">
                  <span>userName</span>
                  <span class="space-x-1">
                    <span
                      class="bg-base px-2 py-1 rounded hover:bg-secondary hover:text-primary cursor-pointer"
                    >react</span>
                    <span
                      class="bg-base px-2 py-1 rounded hover:bg-secondary hover:text-primary cursor-pointer"
                    >hooks</span>
                  </span>
                </div>
                <div class="flex flex-row justify-between">
                  <h3 class="text-xl font-bold">useEffect 完整指南</h3>
                  <span class="text-muted">2020-06-08</span>
                </div>
                <p
                  class="max-w-3xl leading-8 text-muted"
                >你用Hooks写了一些组件，甚或写了一个小型应用。你可能很满意，使用它的API很舒服并且在这个过程中获得了一些小技巧。</p>
              </div>
            </article>
          </a>
        </li>
        <li>
          <a>
            <article
              class="relative flex items-center transition-transform transform group hover:-translate-x-2"
            >
              <div
                class="flex flex-col flex-grow py-8 space-y-4 text-base rounded px-8 shadow-md bg-off-base"
              >
                <div class="flex flex-row justify-between">
                  <span>userName</span>
                  <span class="space-x-1">
                    <span
                      class="bg-base px-2 py-1 rounded hover:bg-secondary hover:text-primary cursor-pointer"
                    >css</span>
                    <span
                      class="bg-base px-2 py-1 rounded hover:bg-secondary hover:text-primary cursor-pointer"
                    >tailwind</span>
                  </span>
                </div>
                <div class="flex flex-row justify-between">
                  <h3 class="text-xl font-bold">使用 CSS variables 和Tailwind css实现主题换肤</h3>
                  <span class="text-muted">2020-06-08</span>
                </div>
                <p class="max-w-3xl leading-8 text-muted">根据Tailwind Labs的[换肤视频]，手动实践。</p>
              </div>
            </article>
          </a>
        </li>
      </ul>
    </div>
    <div class="theme-dark p-10 bg-base">
      <h2 class="mb-6 text-3xl font-semibold text-left text-primary">最近文章</h2>
      <ul class="space-y-10">
        <li>
          <a>
            <article
              class="relative flex items-center transition-transform transform group hover:-translate-x-2"
            >
              <div
                class="flex flex-col flex-grow py-8 space-y-4 text-base rounded px-8 shadow-md bg-off-base"
              >
                <div class="flex flex-row justify-between">
                  <span>userName</span>
                  <span class="space-x-1">
                    <span
                      class="bg-base px-2 py-1 rounded hover:bg-secondary hover:text-primary cursor-pointer"
                    >react</span>
                    <span
                      class="bg-base px-2 py-1 rounded hover:bg-secondary hover:text-primary cursor-pointer"
                    >hooks</span>
                  </span>
                </div>
                <div class="flex flex-row justify-between">
                  <h3 class="text-xl font-bold">useEffect 完整指南</h3>
                  <span class="text-muted">2020-06-08</span>
                </div>
                <p
                  class="max-w-3xl leading-8 text-muted"
                >你用Hooks写了一些组件，甚或写了一个小型应用。你可能很满意，使用它的API很舒服并且在这个过程中获得了一些小技巧。</p>
              </div>
            </article>
          </a>
        </li>
        <li>
          <a>
            <article
              class="relative flex items-center transition-transform transform group hover:-translate-x-2"
            >
              <div
                class="flex flex-col flex-grow py-8 space-y-4 text-base rounded px-8 shadow-md bg-off-base"
              >
                <div class="flex flex-row justify-between">
                  <span>userName</span>
                  <span class="space-x-1">
                    <span
                      class="bg-base px-2 py-1 rounded hover:bg-secondary hover:text-primary cursor-pointer"
                    >css</span>
                    <span
                      class="bg-base px-2 py-1 rounded hover:bg-secondary hover:text-primary cursor-pointer"
                    >tailwind</span>
                  </span>
                </div>
                <div class="flex flex-row justify-between">
                  <h3 class="text-xl font-bold">使用 CSS variables 和Tailwind css实现主题换肤</h3>
                  <span class="text-muted">2020-06-08</span>
                </div>
                <p class="max-w-3xl leading-8 text-muted">根据Tailwind Labs的[换肤视频]，手动实践。</p>
              </div>
            </article>
          </a>
        </li>
      </ul>
    </div>
    <div class="theme-solar p-10 bg-base">
      <h2 class="mb-6 text-3xl font-semibold text-left text-primary">最近文章</h2>
      <ul class="space-y-10">
        <li>
          <a>
            <article
              class="relative flex items-center transition-transform transform group hover:-translate-x-2"
            >
              <div
                class="flex flex-col flex-grow py-8 space-y-4 text-base rounded px-8 shadow-md bg-off-base"
              >
                <div class="flex flex-row justify-between">
                  <span>userName</span>
                  <span class="space-x-1">
                    <span
                      class="bg-base px-2 py-1 rounded hover:bg-secondary hover:text-primary cursor-pointer"
                    >react</span>
                    <span
                      class="bg-base px-2 py-1 rounded hover:bg-secondary hover:text-primary cursor-pointer"
                    >hooks</span>
                  </span>
                </div>
                <div class="flex flex-row justify-between">
                  <h3 class="text-xl font-bold">useEffect 完整指南</h3>
                  <span class="text-muted">2020-06-08</span>
                </div>
                <p
                  class="max-w-3xl leading-8 text-muted"
                >你用Hooks写了一些组件，甚或写了一个小型应用。你可能很满意，使用它的API很舒服并且在这个过程中获得了一些小技巧。</p>
              </div>
            </article>
          </a>
        </li>
        <li>
          <a>
            <article
              class="relative flex items-center transition-transform transform group hover:-translate-x-2"
            >
              <div
                class="flex flex-col flex-grow py-8 space-y-4 text-base rounded px-8 shadow-md bg-off-base"
              >
                <div class="flex flex-row justify-between">
                  <span>userName</span>
                  <span class="space-x-1">
                    <span
                      class="bg-base px-2 py-1 rounded hover:bg-secondary hover:text-primary cursor-pointer"
                    >css</span>
                    <span
                      class="bg-base px-2 py-1 rounded hover:bg-secondary hover:text-primary cursor-pointer"
                    >tailwind</span>
                  </span>
                </div>
                <div class="flex flex-row justify-between">
                  <h3 class="text-xl font-bold">使用 CSS variables 和Tailwind css实现主题换肤</h3>
                  <span class="text-muted">2020-06-08</span>
                </div>
                <p class="max-w-3xl leading-8 text-muted">根据Tailwind Labs的[换肤视频]，手动实践。</p>
              </div>
            </article>
          </a>
        </li>
      </ul>
    </div>
    <div class="theme-evergreen p-10 bg-base">
      <h2 class="mb-6 text-3xl font-semibold text-left text-primary">最近文章</h2>

      <ul class="space-y-10">
        <li>
          <a>
            <article
              class="relative flex items-center transition-transform transform group hover:-translate-x-2"
            >
              <div
                class="flex flex-col flex-grow py-8 space-y-4 text-base rounded px-8 shadow-md bg-off-base"
              >
                <div class="flex flex-row justify-between">
                  <span>userName</span>
                  <span class="space-x-1">
                    <span
                      class="bg-base px-2 py-1 rounded hover:bg-secondary hover:text-primary cursor-pointer"
                    >react</span>
                    <span
                      class="bg-base px-2 py-1 rounded hover:bg-secondary hover:text-primary cursor-pointer"
                    >hooks</span>
                  </span>
                </div>
                <div class="flex flex-row justify-between">
                  <h3 class="text-xl font-bold">useEffect 完整指南</h3>
                  <span class="text-muted">2020-06-08</span>
                </div>
                <p
                  class="max-w-3xl leading-8 text-muted"
                >你用Hooks写了一些组件，甚或写了一个小型应用。你可能很满意，使用它的API很舒服并且在这个过程中获得了一些小技巧。</p>
              </div>
            </article>
          </a>
        </li>
        <li>
          <a>
            <article
              class="relative flex items-center transition-transform transform group hover:-translate-x-2"
            >
              <div
                class="flex flex-col flex-grow py-8 space-y-4 text-base rounded px-8 shadow-md bg-off-base"
              >
                <div class="flex flex-row justify-between">
                  <span>userName</span>
                  <span class="space-x-1">
                    <span
                      class="bg-base px-2 py-1 rounded hover:bg-secondary hover:text-primary cursor-pointer"
                    >css</span>
                    <span
                      class="bg-base px-2 py-1 rounded hover:bg-secondary hover:text-primary cursor-pointer"
                    >tailwind</span>
                  </span>
                </div>
                <div class="flex flex-row justify-between">
                  <h3 class="text-xl font-bold">使用 CSS variables 和Tailwind css实现主题换肤</h3>
                  <span class="text-muted">2020-06-08</span>
                </div>
                <p class="max-w-3xl leading-8 text-muted">根据Tailwind Labs的[换肤视频]，手动实践。</p>
              </div>
            </article>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import PopVideo from '~/components/pop-video/index.vue'

export default defineComponent({
  components: {
    PopVideo,
  },
  setup() {
    const isPlayVideo = ref(false)
    const eventPlayVideo = () => {
      isPlayVideo.value = !isPlayVideo.value;
    }
    console.log(import.meta.env)
    return {
      eventPlayVideo,
      isPlayVideo,
      showModal: ref(false),
      onNegativeClick() {
        isPlayVideo.value = false
      },
      onPositiveClick() {
        isPlayVideo.value = false
      }
    }
  }
})
</script>

<style scoped>
</style>
