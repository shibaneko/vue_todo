<template>
  <div id="app">
    <transition>
      <modal v-if="test"></modal>
    </transition>
    <ul v-if="isTask">
      <div ]class="['info']">
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
    <button @click="cFlg">TESTSSSSSS</button>
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
      test: false
    };
  },
  computed: {
    ...mapState({
      items: state => state.items
    }),
    ...mapState('modal', {
      showFlag: state => state.showFlag,
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
    cFlg() {
      this.test = !this.test;
    },
  },
};
</script>
<style href="assets/css/style.css"></style>