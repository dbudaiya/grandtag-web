<template>
  <nav class="navbar navbar-area navbar-expand-lg p-0">
    <div
      class="
        container
        nav-container
        d-flex
        justify-content-between
        align-items-center
      "
    >
      <div class="responsive-mobie-menu">
        <div class="logo-wrapper">
          <a href="/index.html" class="logo">
            <img src="../../../assets/img/navbar/logo@2x.png" alt=""
          /></a>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#bizcoxx_main_menu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse" id="bizcoxx_main_menu">
        <ul class="navbar-nav d-flex">
          <li
            class="menu-item-has-children"
            v-for="(item, index) in routes"
            :key="index"
          >
            <router-link tag="a" :to="item.link">{{ item.title }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { routes_info } from "../../../api/mocks/index";
export default {
  name: "navbar",
  data() {
    return {
      routes: routes_info,
    };
  },
};
</script>

<style lang="less" scoped>
.navbar.navbar-area {
  .nav-container {
      padding: .5rem 0;
    .responsive-mobie-menu {
      .logo-wrapper {
        .logo {
          img {
            max-height: 50px;
          }
        }
      }
    }

    .collapse.navbar-collapse {
      justify-content: end;
      .navbar-nav {
        .menu-item-has-children {
          margin: 0 20px;
          a {
            display: inline-block;
            color: var(--main-color-one);
          }
        }
      }
    }
  }
}
</style>