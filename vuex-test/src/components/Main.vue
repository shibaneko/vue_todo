<template>
  <div>
    <span>{{ text }}</span>
    <div class="taskDeck">
      <item :tasks="mainTasks" taskName="constantFile.TASKS_NAME_MAIN"></item>
    </div>
    <ul v-if="mainTasks.length">
      <li v-for="mainTask in mainTasks" :key="mainTask.id">
        {{ mainTask.title }}
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import Item from './Item.vue';
import * as constantFile from '../store/constantFile';
export default {
  components: {
    Item,
  },
  data() {
    return {
      text: 'MAIN',
    };
  },
  created() {
    this.getStateData({
      name: constantFile.TASKS_NAME_MAIN,
    });
  },
  computed: {
    ...mapState({
      mainTasks: state => state.mainTasks,
    }),
  },
  methods: {
    ...mapActions(['getStateData']),
  },
};
</script>
<style lang="scss" scoped>
div {
  span {
    color: teal;
    font-size: 48px;
  }
}
.taskDeck {
  width: calc(100% - 40px);
  margin: 0 20px;
  margin-top: 30px;
}
</style>