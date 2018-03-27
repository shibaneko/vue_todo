<template>
  <div>
    <span>{{ text }}</span>
    <div class="taskDeck">
      <item :tasks="sub1Tasks"></item>
    </div>
    <ul v-if="sub1Tasks.length">
      <li v-for="sub1Task in sub1Tasks" :key="sub1Task.id">
        {{ sub1Task.title }}
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
      text: 'SUB1'
    };
  },
  created() {
    this.getStateData({
      name: constantFile.TASKS_NAME_SUB1,
    });
  },
  computed: {
    ...mapState({
      sub1Tasks: state => state.sub1Tasks,
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