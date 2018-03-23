<template>
  <footer class="footer">
    <div class="footerContents titleText">
      <span>{{ title }}</span>
    </div>
    <div class="footerContents copylight">
      <span>@copylight</span>
    </div>
    <div class="footerContents versionInfomation">
      <span>ver {{ version }} </span>
    </div>
  </footer>
</template>
<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      title: 'FOOTER'
    };
  },
  computed: {
    ...mapState(['version'])
  },
};
</script>
<style lang="scss" scoped>
.footer {
  width: calc(100% - 40px);
  background-color: rgba(180, 110, 160, 0.8);
  position: relative;
  padding: 5px 20px;

  &:before,
  &:after {
    content:"";
    display:table;
  }
  &:after {
    clear:both;
  }

  .footerContents {
    float: left;

    &.titleText {
      width: calc(280px - 20px);

      span {
        font-size: 20px;
        color: white;
      }
    }

    &.copylight {
      width: 400px;
      text-align: center;

      span {
        font-size: 16px;
        color: black;
      }
    }

    &.versionInfomation {
      width: calc(280px - 20px);
      text-align: right;

      span {
        font-size: 12px;
        color: white;
      }
    };
  }
}
</style>