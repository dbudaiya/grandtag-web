<template>
  <div id="header-section" class="header-style-01">
    <HeaderTop />
    <NavbarArea />
  </div>
</template>

<script>
import HeaderTop from "./headerTop";
import NavbarArea from "./navbarArea";
export default {
  name: "Header",
  components: {
    HeaderTop,
    NavbarArea,
  },
};
</script>