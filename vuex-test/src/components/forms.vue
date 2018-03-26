<template>
  <div class="formsContents">
    <div class="addInputArea">
      <input class="taskName" type="text" v-model="inputTitle">
      <button class="addTaskButton" @click="[addTask(inputTitle), reset()]">追加</button>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  data () {
    return {
      inputTitle: "",
    };
  },
  methods: {
    ...mapActions([
      'resetIsSuccess',
      'addTask',
    ]),
    reset: function() {
      this.inputTitle = "";
    },
  },
};
</script>
<style lang="scss" scoped>
.formsContents {
  width: calc(100% - 40px);
  margin: 30px 20px 50px 20px;

  .addInputArea {
    width: 450px;

    &:before,
    &:after {
      content:"";
      display:table;
    }
    &:after {
      clear:both;
    }

    input, button {
      box-sizing: border-box;
      border: 3px solid rgb(100, 100, 100);

      &:focus {
        outline: none;
      }
    }
    input {
      border-radius: 10px 0 0 10px;
      padding-left: 10px;
      padding-right: 10px;
    }
    button {
      border-left: none;
      border-radius: 0 10px 10px 0;
      background-color: rgb(230, 120, 140);
    }

    input.taskName {
      float: left;
      width: calc(100% - 50px);
      height: 30px;
      
    }
    button.addTaskButton {
      float: left;
      width: 50px;
      height: 30px;
    }
  }
}
</style>