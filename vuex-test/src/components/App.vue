<template>
  <div id="app">
    <!-- <transition>
      <modal v-if="showFlag"></modal>
    <transition> -->
    <transition>
      <div v-if="test">TEST</div>
    </transition>
    <button @click="cFlag">button</button>
    <ul v-if="isTask">
      <div>
        <span>総タスク :<span>{{ items.length }}</span></span>
        <span>完了タスク :<span>{{ completeTask }}</span></span>
        <span>未完了タスク :<span>{{ notCompleteTask }}</span></span>
      </div>
      <item v-for="item in items" :item="item" :key="item.id"></item>
    </ul>
    <div v-else>
      <span>タスクがありません</span>
    </div>
    <div>
      <input type="text" v-model="inputTitle" @keydown.enter="[addTask(inputTitle), reset()]">
      <button @click="[addTask(inputTitle), reset()]">追加</button>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import Item from './Item.vue';
import Modal from './modal.vue';
export default {
  name: 'app',
  components: {
    Item,
    Modal,
  },
  data () {
    return {
      inputTitle: "",
      test: false,
    };
  },
  computed: {
    ...mapState({
      items: state => state.items
    }),
    ...mapState('modal', {
      showFlag: state => state.showFlag
    }),
    ...mapGetters([
      'isTask',
      'completeTask',
      'notCompleteTask',
    ]),
  },
  methods: {
    ...mapActions([
      'resetIsSuccess',
      'addTask'
    ]),
    ...mapActions('modal', [
      'showModal'
    ]),
    reset: function() {
      this.inputTitle = "";
    },
    cFlag: function() {
      this.test = !this.test;
    },
  },
};
</script>
<style>
.v-enter-active, .v-leave-active {
  transition: opacity 0.5s;
}
.v-enter, .v-leave-to {
  opacity: 0;
}
</style>