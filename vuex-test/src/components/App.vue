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
import Item from './Item.vue';
import Modal from './modal.vue';
import Header from './header.vue';
import Footer from './footer.vue';
import Navigation from './navigation.vue';
import Forms from './forms.vue';
import editModal from './editModal.vue';
export default {
  components: {
    Item,
    Modal,
    editModal,
    Header,
    Footer,
    Navigation,
    Forms,
  },
  created() {
    this.getTaskData("test");
  },
  computed: {
    ...mapState({
      items: state => state.items,
    }),
    ...mapState('modal', {
      showFlag: state => state.showFlag,
    }),
    ...mapState('editModal', {
      showEditFlag: state => state.showEditFlag,
    }),
  },
  methods: {
    ...mapActions(['getTaskData']),
    ...mapActions('modal', [
      'showModal',
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