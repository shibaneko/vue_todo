<template>
  <div class="navigation">
    <ul v-if="navs.length">
      <li v-for="nav in navs" :key="nav.id">
        <span>{{ nav.text }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      title: 'NAVIGATION',
    };
  },
  computed: {
    ...mapState({
      navs: state => state.navs
    }),
  },
};
</script>
<style lang="scss" scoped>
.navigation {
  width: 100%;
  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;
    margin-top: 30px;
  }
  ul li {
    display: inline-block;
    width: 100px;
    height: 100px;
    background-color: rgba(100, 120, 230, 0.7);
    border-radius: 20px;
    margin-left: 10px;

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      font-size: 14px;
    }

    &:first-child {
      margin-left: 0;
    }
  }
}
</style>