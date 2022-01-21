<template>
  <div class="details">
    <img
      ref="img"
      :src="require('../assets/imgs/' + todayWea.wea_img + '.png')"
      alt=""
    />
    <p>温度:{{ todayWea.tem_day }}℃/{{ todayWea.tem_night }}℃</p>
    <br />
    <p>天气:{{ todayWea.wea }}</p>
    <br />
    <p>风向:{{ todayWea.win }}</p>
    <br />
    <p>风力:{{ todayWea.win_speed }}</p>
    <br />
    <p>日期:{{ todayWea.date }}</p>
  </div>
</template>

<script>
export default {
  props: {
    todayWea: {
      type: Object,
      required: true,
    },
    wea_img: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      url: "",
    };
  },
  Update() {
    // this.$refs.img.src=this.src
    this.url = "11";
    // console.log(this.src);
  },
};
</script>

<style lang="less" scoped>
.details {
  margin-top: -3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-size: 1.5rem;
  }
}
</style>