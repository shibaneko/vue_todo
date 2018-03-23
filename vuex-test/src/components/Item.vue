<template>
  <li>
    <span v-bind:class="{ 'is-do': item.is_do }" @click="doneTask(item)">{{ item.title }}</span>
    <input type="button" @click="deleteTask(item)" value="×">
  </li>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  props: ['item'],
  methods: {
    ...mapActions([
      'doneTask',
      'deleteTask'
    ]),
  },
};
</script>
<style>
li>span {
  cursor: pointer;
}
li>span.is-do {
  text-decoration: line-through;
}
</style>