<template>
  <div>
    <span>{{ tasks.length }}</span>
    <ul v-if="tasks.length">
      <transition-group name="slide" v-if="isTask">
        <li v-for="task in tasks" :key="task.id" class="taskCardWrap" @click="showEditModal(task.id)"  v-bind:class="{ 'is-do': task.is_do }">
          <span>{{ task.title }}</span>
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
  props: ['tasks'],
  computed: {
    ...mapGetters([
      'isTask',
    ]),
  },
  methods: {
    ...mapActions([
      'doneTask',
      'deleteTask',
      'editTask',
    ]),
    ...mapActions('editModal', [
      'showEditModal',
    ]),
  },
};
</script>
<style lang="scss" scoped>
ul {
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    background-color: rgb(220, 220, 220);

    &.is-do {
      background-color: rgba(100,100,100,0.75);
    }

    & > span {
      cursor: pointer;
    }
    &.is-do > span {
      text-decoration: line-through;
    }
  }
}

.taskCardWrap {
  display: inline-block;
  width: 160px;
  height: 160px;
  background-color: white;
  margin: 0 10px 20px 10px;
  box-shadow: 8px 8px rgb(100, 100, 100);
  overflow: hidden;

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