<template>
  <div>
    <span>{{ text }}</span>
    <div class="taskDeck">
      <item :tasks="tasks"></item>
    </div>
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
      text: 'INFOMATION',
      type: constantFile.TASKS_NAME_INFOMATION,
    };
  },
  computed: {
    ...mapState({
      tasks: state => state.tasks,
    }),
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