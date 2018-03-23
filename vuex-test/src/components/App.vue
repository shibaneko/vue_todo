<template>
  <div id="app" class="wrapper">
    <div class="contents">
      <Header></Header>
      <Navigation></Navigation>
      <div class="taskDeck">
        <item :items="items"></item>
      </div>
      <Forms></Forms>
      <Footer></Footer>
      <transition name="fade">
        <modal v-if="showFlag"></modal>
      </transition>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import Item from './Item.vue';
import Modal from './modal.vue';
import Header from './header.vue';
import Footer from './footer.vue';
import Navigation from './navigation.vue';
import Forms from './forms.vue';
export default {
  name: 'app',
  components: {
    Item,
    Modal,
    Header,
    Footer,
    Navigation,
    Forms,
  },
  computed: {
    ...mapState({
      items: state => state.items
    }),
    ...mapState('modal', {
      showFlag: state => state.showFlag,
    }),
  },
  methods: {
    ...mapActions('modal', [
      'showModal'
    ]),
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

    .taskDeck {
      width: calc(100% - 40px);
      margin: 0 20px;
      margin-top: 30px;
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.35s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>