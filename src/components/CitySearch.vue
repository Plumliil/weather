<template>
  <input type="text" placeholder="点我更换其他城市" @input="changeCity" />
</template>

<script>
import { citysName } from "../assets/js/city";
export default {
  emits: ["changeCity"],
  methods: {
    changeCity(e) {
      let flag = citysName.includes(e.target.value);
      // if(!flag) return alert('请输入正确的城市');
      // console.log(flag);
      if (flag) {
        this.$emit("changeCity", e.target.value);
      }
      console.log(e.target.value);
    },
  },
};
</script>

<style scoped>
input {
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  text-align: center;
  background: none;
}
</style>