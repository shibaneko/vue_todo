<template>
  <div>
    <div class="modalBack" @click="hideEditModal"></div>
    <div class="modalContents">
      <div class="editInputArea">
        <div>
          <span>現在の名前: {{ taskName }}</span>
          <span>現在の状況: {{ (is_do)? "完了" : "未完了" }}</span>
        </div>
        <div class="cf">
          <input class="editTaskName" type="text" v-model="newTaskName">
          <button class="editTaskButton" @click="setTaskName(newTaskName)">変更</button>
        </div>
        <div>
          <button :class="(is_do) ? 'is-complate' : ''" class="complate" @click="setTaskDo(!is_do)">{{ (is_do)? "未完了" : "完了" }}</button>
        </div>
        <div>
          <input class="editApply" @click="hideEditModal" type="button" value="閉" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
export default {
  data() {
    return {
      newTaskName: "",
    };
  },
  created() {
    this.newTaskName = this.taskName;
  },
  computed: {
    ...mapState('editModal', {
      taskName: state => state.taskName,
      is_do: state => state.is_do,
    }),
  },
  methods: {
    ...mapActions('editModal', [
      'hideEditModal',
      'setTaskName',
      'setTaskDo',
    ]),
  },
};
</script>
<style lang="scss" scoped>
.modalBack {
  z-index: 9998;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
}
.modalContents {
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  width: 50%;
  height: 50%;
  background-color: white;
  border-radius: 10px;
  border: solid 2px black;

  .editInputArea {
    display: block;
    margin: 30px auto;
    width: 450px;

    & > * {
      margin-top: 20px;
    }
    & > *:first-child {
      margin-top: 0;
    }

    .cf:before,
    .cf:after {
      content:"";
      display:table;
    }
    .cf:after {
      clear:both;
    }

    input, button {
      box-sizing: border-box;
      border: 3px solid rgb(100, 100, 100);

      &:focus {
        outline: none;
      }
    }

    input.editTaskName {
      float: left;
      width: calc(100% - 50px);
      height: 30px;
      border-radius: 10px 0 0 10px;
      padding-left: 10px;
      padding-right: 10px;
    }
    
    button.editTaskButton {
      float: left;
      width: 50px;
      height: 30px;
      border-left: none;
      border-radius: 0 10px 10px 0;
      background-color: rgb(230, 120, 140);
    }

    button.complate.is-complate {
      background-color: blue;
      color: white;
    }

    button.complate {
      background-color: yellow;
      color: black;
    }

  }
}
</style>