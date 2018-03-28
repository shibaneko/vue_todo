<template>
  <div>
    <span>{{ text }}</span>
    <div class="taskDeck">
      <item :tasks="tasks"></item>
    </div>
    <ul v-if="tasks.length">
      <li v-for="task in tasks" :key="task.id">
        {{ task.title }}
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
      text: 'SUB1',
      type: constantFile.TASKS_NAME_SUB1,
    };
  },
  created() {
    this.getTasksData({
      type: this.type,
    });
  },
  computed: {
    ...mapState({
      tasks: state => state.tasks,
    }),
  },
  methods: {
    ...mapActions(['getTasksData']),
  },
};
</script>
<style lang="scss" scoped>
div {
  span {
    color: lime;
    font-size: 48px;
  }
}
.taskDeck {
  width: calc(100% - 40px);
  margin: 0 20px;
  margin-top: 30px;
}
</style>