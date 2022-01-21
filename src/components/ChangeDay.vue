<template>
  <div class="changeDay">
    <div class="top">
      <span
        class="item"
        v-for="(item, index) in days"
        :key="index"
        @click="getToday(index)"
        :class="{ active: currentIndex === index }"
      >
        {{ item.date }}
      </span>
    </div>
    <!-- <div class="bottom">1111</div> -->
  </div>
</template>

<script>
export default {
  props: {
    days: {
      type: Array,
      required: true,
    },
  },
  emits: ["getToday"],
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    getToday(index) {
      this.$emit("getToday", this.days[index]);
      this.currentIndex = index;
    },
  },
};
</script>

<style lang="less" scoped>
.flexCom {
  display: flex;
  justify-content: center;
  align-items: center;
}
.changeDay {
  .flexCom;
  justify-content: space-between;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  background-color: white;
  font-size: 1.4rem;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  width: 100%;
  height: 6rem;
  overflow: hidden;
  // transform: translateY(-12rem);
  .top {
    // flex: 1;
    .flexCom;
    margin-top: 1rem;
    // background-color: tomato;
    .item {
      flex: 1;
      border-bottom: 3px solid transparent;
      // border-bottom: 3px solid red;
      transition: 1s;
      // padding-bottom: 1rem;
    }
      .active {
    border-bottom: 3px solid black;
  }
  }
  // .bottom{
  //   .flexCom;
  //   display: none;
  //   height: 6rem;
  //   // flex: 2;
  //   width: 100%;
  //   background-color: turquoise;
  // }

}
</style>