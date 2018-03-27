<template>
  <div id="app" class="wrapper">
    <div class="contents">
      <Header></Header>
      <Navigation></Navigation>
      <router-view></router-view>
      <Footer></Footer>
        <modal v-if="showFlag"></modal>
      </transition>
      <transition name="fade">
        <editModal v-if="showEditFlag"></editModal>
      </transition>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import Home from './Home.vue';
import Modal from './Modal.vue';
import Header from './Header.vue';
import Footer from './Footer.vue';
import Navigation from './Navigation.vue';
import EditModal from './EditModal.vue';
import * as constantFile from '../store/constantFile';

export default {
  components: {
    Home,
    Modal,
    Header,
    Footer,
    Navigation,
    EditModal,
  },
  created() {
    this.getStateData({
      name: constantFile.LISTS_NAV,
    });
  },
  computed: {
    ...mapState('modal', {
      showFlag: state => state.showFlag,
    }),
    ...mapState('editModal', {
      showEditFlag: state => state.showEditFlag,
    }),
  },
  methods: {
    ...mapActions(['getStateData']),
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100%;
  background-color: white;

  .contents {
    width: 960px;
    margin: 0 auto;
    background-color: rgba(200, 200, 120, 0.5);
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.35s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>