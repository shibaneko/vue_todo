<template>
  <div class="formsContents">
    <div class="addInputArea">
      <input type="text" v-model="inputTitle">
      <button @click="[addTask(inputTitle), reset()]">追加</button>
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
  margin: 30px 20px 50px 40px;
  background-color: white;

  .addInputArea {
    width: 30%;

    &:before,
    &:after {
      content:"";
      display:table;
    }
    &:after {
      clear:both;
    }

    input {
      float: left;
      width: calc(100% - 50px);
      height: 30px;
    }
    button {
      float: left;
      width: 50px;
      height: 30px;
    }
  }

}

</style>