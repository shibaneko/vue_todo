<template>
  <div>
    <span>{{ text }}</span>
    <div class="taskDeck">
      <item :tasks="sub2Tasks"></item>
    </div>
    <ul v-if="sub2Tasks.length">
      <li v-for="sub2Task in sub2Tasks" :key="sub2Task.id">
        {{ sub2Task.title }}
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
      text: 'SUB2'
    };
  },
  created() {
    this.getStateData({
      name: constantFile.TASKS_NAME_SUB2,
    });
  },
  computed: {
    ...mapState({
      sub2Tasks: state => state.sub2Tasks,
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
    color: purple;
    font-size: 48px;
  }
}
.taskDeck {
  width: calc(100% - 40px);
  margin: 0 20px;
  margin-top: 30px;
}
</style>