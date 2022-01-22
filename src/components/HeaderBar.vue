<template>
  <div class="headerBar">
    <div class="left" name="left">
      <slot name="left">xxx</slot>
    </div>
    <div class="conter" name="conter">
      <slot name="conter">yyyy</slot>
    </div>
    <div class="right" name="right">
      <slot name="right">zzz</slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.headerBar {
  position: absolute;
  top: 0;
  width: 100%;
  height: 3rem;
  // background-color: chocolate;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 3;
  border-bottom: 1px solid black;
  .left,
  .conter,
  .right {
    flex: 1;
    height: 100%;
  }
  .left {
    // background-color: aqua;
  }
  .conter {
    flex: 2;
    // background-color: aquamarine;
  }
  .right {
    // background-color: cadetblue;
  }
}
</style>