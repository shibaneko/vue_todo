<template>
  <div>
    <span>{{ text }}</span>
    <div class="taskDeck">
      <item :tasks="infomationTasks"></item>
    </div>
    <ul v-if="infomationTasks">
      <li v-for="infomationTask in infomationTasks" :key="infomationTask.id">
        {{ infomationTask.title }}
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
      text: 'INFOMATION'
    };
  },
  created() {
    this.getStateData({
      name: constantFile.TASKS_NAME_INFOMATION,
    });
  },
  computed: {
    ...mapState({
      infomationTasks: state => state.infomationTasks,
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
    color: yellow;
    font-size: 48px;
  }
}
.taskDeck {
  width: calc(100% - 40px);
  margin: 0 20px;
  margin-top: 30px;
}
</style>