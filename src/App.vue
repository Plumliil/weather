<template>
  <div id="index" ref="app">
    <!-- <img ref="img" src="" alt="" /> -->
    <header-bar>
      <template #left>
        <strong>{{ todayWea.date }}</strong>
      </template>
      <template #conter>
        <city-search @changeCity="changeCity"></city-search>
      </template>
      <template #right>
        <strong>{{ currentCity }}</strong>
      </template>
    </header-bar>
    <change-day :days="days" @getToday="getToday"></change-day>
    <Details ref="detail" :todayWea="todayWea" ></Details>
  </div>
</template>

<script>
let mbw = document.documentElement.clientWidth;
let mbh = document.documentElement.clientHeight;
import HeaderBar from "./components/HeaderBar.vue";
import ChangeDay from "./components/ChangeDay.vue";
import Details from "./components/Details.vue";
import CitySearch from "./components/CitySearch.vue";
export default {
  created() {
    let city = sessionStorage.getItem("address");
    let reg = /(?<=[市?|省?])\S*(?=市)/;
    city = city.match(reg)[0];
    this.getData(city);
  },
  mounted() {
    this.$refs.app.style.width = mbw + "px";
    this.$refs.app.style.height = mbh + "px";
  },
  components: { HeaderBar, ChangeDay, Details, CitySearch },
  name: "App",
  data() {
    return {
      days: [],
      todayWea: {},
      wea_img: "",
      currentCity: "",
      // city: "",
    };
  },
  beforeUpdate() {},
  updated() {},
  methods: {
    async getData(city) {
      this.currentCity = city;
      const daysData = await this.$http.get("/7rtq/?city=" + city);
      this.days = daysData.data.data;
      this.days.forEach((item) => {
        item.date = item.date.slice(8, 10);
      });
      // this.todayWea = this.days[0];
      this.todayWea = daysData.data.data[0];
      this.setBGI(this.todayWea.wea_img);
      console.log(this.todayWea.wea_img);
    },
    getToday(todayWea) {
      this.todayWea = todayWea;
      this.setBGI(todayWea.wea_img);
      // console.log(todayWea.);
    },
    setBGI(wea) {
      switch (wea) {
        case "qing":
          this.$refs.app.style.background =
            "linear-gradient(rgb(41, 128, 185), rgb(109, 213, 250), rgb(255, 255, 255))";
          break;
        case "yin":
          this.$refs.app.style.background =
            "linear-gradient(rgb(48, 67, 82), rgb(215, 210, 204))";
          break;
        case "xue":
          this.$refs.app.style.background =
            "linear-gradient(rgb(236, 233, 230), rgb(255, 255, 255))";
          break;
        case "yu":
          this.$refs.app.style.background =
            "linear-gradient(rgb(19, 106, 138), rgb(38, 120, 113))";
          break;
        case "wu":
          this.$refs.app.style.background =
            "linear-gradient(rgb(117, 127, 154), rgb(215, 221, 232))";
          break;
        default:
          break;
      }
    },
    changeCity(v) {
      // changeCity
      console.log(v);
      this.getData(v);
    },
  },
};
</script>

<style lang="less">
#index {
  transition: background 1s;
  overflow: hidden;
  width: 100%;
  height: 844px;
  background: #a6d0e4;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  // margin-top: ;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
