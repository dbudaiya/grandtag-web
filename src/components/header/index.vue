<template>
  <div class="container mx-auto">
    <div class="flex justify-between">
      <div>
        <span>Wellcome to GRANDTAG</span>
        <span>Fax: 105 546 777-231</span>
        <span>Phone: 105 546 777-231</span>
      </div>
      <div>
        <span>Wellcome to GRANDTAG</span>
        <span>Fax: 105 546 777-231</span>
        <span>Phone: 105 546 777-231</span>
      </div>
    </div>
    <Navbar />
  </div>
</template>

<script lang="ts">

import { defineComponent, ref } from 'vue'
import Navbar from './components/navbar.vue'

export default defineComponent({
  components: {
    Navbar
  }

})

</script>

