<template>
  <div>
    <span>{{ text }}</span>
    <div class="taskDeck">
      <item :tasks="tasks"></item>
    </div>
    <Forms></Forms>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import Item from './Item.vue';
import Forms from './Forms.vue';
import * as constantFile from '../store/constantFile';
export default {
  components: {
    Item,
    Forms,
  },
  data() {
    return {
      text: 'HOME',
      type: constantFile.TASKS_NAME_HOME,
    };
  },
  computed: {
    ...mapState({
      tasks: state => state.tasks,
      allTasks: state => state.allTasks,
    }),
  },
  methods: {
    ...mapActions('modal', [
      'showModal',
    ]),
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