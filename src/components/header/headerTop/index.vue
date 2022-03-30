<script>
export default {
  name: "header-cpn",
};
</script>
<template>
  <div id="header-section" class="header-style-01 bgc01">
    <div class="header-top">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-lg-6">
            <div class="header-top-left d-none d-md-block d-lg-block">
              <ul class="d-flex justify-content-around">
                <li>歡迎來到 GRANDTAG</li>
                <li>傳真：105 546 777-231</li>
                <li>手機號碼：105 546 777-231</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3">
            <div
              class="
                header-top-right
                nav-right-content
                d-flex
                align-items-center
                d-none
              "
            >
              <i class="fa fa-phone"></i>
              <i class="fa fa-twitter"></i>
              <i class="fa fa-weixin"></i>
              <i class="fa fa-facebook-square"></i>
              <i class="fa fa-instagram"></i>
              <button>安阿牛</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style lang='less'>
.header-top {
  padding: 6px 0;
  color: var(--main-color-five);
  .header-top-left {
    ul {
      li {
        padding-right: 20px;
        text-transform: uppercase;
        font-size: 12px;
      }
    }
  }

  .header-top-right {
    i {
      padding-right: 1rem;
      &:after {
        width: 1.5rem;
      }
      &:last-of-type {
        padding-right: 1rem;
      }
      cursor: pointer;
    }
  }
}
</style>