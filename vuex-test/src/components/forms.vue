<template>
  <div class="formsContents">
    <div class="addInputArea">
      <input class="taskName" type="text" v-model="inputTitle">
      <button class="addTaskButton" @click="[submitTask(), reset()]">追加</button>
      <select class="taskName" type="text" v-model="selectType">
        <option v-for="nav in navsData" :key="nav.id" :value="nav.id" >ADDTYPE => [ {{ nav.text }} ]</option>
      </select>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import * as constantFile from '../store/constantFile';
export default {
  data () {
    return {
      inputTitle: "",
      selectType: 1,
    };
  },
  computed: {
    ...mapGetters([
      'navsData'
    ]),
  },
  methods: {
    ...mapActions([
      'resetIsSuccess',
      'addTask',
    ]),
    reset: function() {
      this.inputTitle = "";
    },
    submitTask: function() {
      const seNav = this.navsData.filter(item => item.id === this.selectType);
      const object = {
        title: this.inputTitle,
        type: seNav[0].type,
        nowType: this.$route.name,
      };
      this.addTask(object);
    },
  },
};
</script>
<style lang="scss" scoped>
.formsContents {
  width: calc(100% - 40px);
  margin: 30px 20px 50px 20px;

  .addInputArea {
    width: 100%;

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
      width: calc(100% - 350px);
      height: 30px;
      
    }
    button.addTaskButton {
      float: left;
      width: 50px;
      height: 30px;
    }

    select.taskName {
      float: left;
      width: 300px;
      height: 30px;
      font-size: 20px;
      border: 2px skyblue solid;
      color: white;
      background-color: black;
      
      option {
        width: 100%;
      }
    }
  }
}
</style>