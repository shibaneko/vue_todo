<template>
  <div>
    <ul v-if="items.length">
      <transition-group name="slide" v-if="isTask">
        <li v-for="(item, index) in items" :key="index" class="taskCardWrap">
          <span v-bind:class="{ 'is-do': item.is_do }" @click="doneTask(item)">{{ item.title }}</span>
          <input type="button" @click="deleteTask(item)" value="×">
        </li>
      </transition-group>
    </ul>
    <div v-else>
      <span>タスクがありません</span>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  props: ['items'],
  computed: {
    ...mapGetters([
      'isTask',
    ]),
  },
  methods: {
    ...mapActions([
      'doneTask',
      'deleteTask'
    ]),
  },
};
</script>
<style lang="scss" scoped>
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
li > span {
  cursor: pointer;
}
li > span.is-do {
  text-decoration: line-through;
}

.taskCardWrap {
  display: inline-block;
  width: 160px;
  height: 160px;
  background-color: white;
  margin: 0 10px 20px 10px;
  box-shadow: 8px 8px rgb(100, 100, 100);

  &:nth-child(-n + 5) {
    margin-top: 20px;
  }
  &:nth-child(5n) {
    margin-right: 20px;
  }
  &:nth-child(5n - 4) {
    margin-left: 20px;
  }
}

.slide-enter-active, .slide-leave-active {
  transition: opacity .5s;
  animation: ease-in;
}
.slide-enter, .slide-leave-to {
  opacity: 0;
}
.slide-move {
  transition: transform 5s;
}
</style>