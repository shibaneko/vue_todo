<template>
  <div @click="hideModal">
    <div class="modalBack"></div>
    <div class="modalContents">
      <span>{{ modalTitle }}を追加しました！</span>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
export default {
  computed: {
    ...mapState('modal', {
      modalTitle: state => state.modalTitle,
    }),
  },
  methods: {
    ...mapActions('modal', [
      'hideModal',
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
  height: 5%;
  background-color: white;
  border-radius: 10px;
  border: solid 2px black;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    font-size: 18px;
  }
}
</style>