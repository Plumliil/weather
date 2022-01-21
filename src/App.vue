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
    <Details ref="detail" :todayWea="todayWea" :wea_img="wea_img"></Details>
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
        item.date = item.date.slice(5, 10);
      });
      this.todayWea = this.days[0];
    },
    getToday(todayWea) {
      this.todayWea = todayWea;
      this.setBGI(todayWea);
    },
    setBGI(wea) {
      this.wea_img = `../assets/imgs/${wea.wea_img}.png`;
      this.$refs.app.style.backgroundColor = "pink";
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
  overflow: hidden;
  width: 100%;
  height: 844px;
  background-color: aquamarine;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: ;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
