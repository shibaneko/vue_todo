<template>
  <div>
    <span>{{ text }}</span>
    <div class="taskDeck">
      <item :tasks="homeTasks" @editTask="editHomeTask(item)" @addTask="addHomeTask(title)"></item>
    </div>
    <ul v-if="homeTasks.length">
      <li v-for="homeTask in homeTasks" :key="homeTask.id">
        {{ homeTask.title }}
      </li>
    </ul>
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
      text: 'HOME'
    };
  },
  created() {
    this.getStateData({
      name: constantFile.TASKS_NAME_HOME,
    });
  },
  computed: {
    ...mapState({
      homeTasks: state => state.homeTasks,
    }),
  },
  methods: {
    ...mapActions(['getStateData']),
    ...mapActions('modal', [
      'showModal',
    ]),
    addHomeTask(title) {
      
    },
    editHomeTask(item) {

    },
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