<template>
  <div class="header">
    <div class="headerContents titleText">
      <span>{{ title }}</span>
    </div>
    <div class="headerContents taskInfomation">
      <span>総タスク :<span>{{ allTask }}</span></span>
      <span>完了タスク :<span>{{ completeTask }}</span></span>
      <span>未完了タスク :<span>{{ notCompleteTask }}</span></span>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      title: 'HEADER',
    };
  },
  computed: {
    ...mapGetters([
      'allTask',
      'completeTask',
      'notCompleteTask',
    ]),
  },
};
</script>
<style lang="scss" scoped>
.header {
  width: calc(100% - 40px);
  background-color: rgba(130, 180, 120, 0.8);
  position: relative;
  padding: 5px 20px;

  &:before,
  &:after {
    content:"";
    display:table;
  }
  &:after {
    clear:both;
  }

  .headerContents {
    float: left;
  
    &.titleText {
      width: calc(200px - 20px);

      span {
        font-size: 16px;
        color: white;
      }
    }

    &.taskInfomation {
      width: calc(760px - 20px);
      text-align: right;

      span {
        display: inline-block;
        font-size: 16px;
        color: white
      }
    }
  }
}
</style>