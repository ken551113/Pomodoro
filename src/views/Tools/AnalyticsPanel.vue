<template>
  <div class="analytics">
    <div class="fcous-time">
      <div class="title-bar">FOCUS TIME</div>
      <div class="today-tomato">
        <div class="title">TODAY</div>
        <div class="count">20</div>
        <div class="unit">/TOMATO</div>
      </div>
      <div class="week-tomato">
        <div class="title">WEEK</div>
        <div class="count">108</div>
        <div class="unit">/TOMATO</div>
      </div>
    </div>
    <div class="chart">
      <div class="title-bar">CHART</div>
      <div class="small">
        <line-chart :height="250" :chart-data="datacollection"></line-chart>
      </div>
    </div>
  </div>
</template>

<script>

import LineChart from "../../components/BarChart";

export default {
  components: {
    LineChart
  },
  data() {
    return {
      datacollection: null
    };
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: ['7/1', '7/2', '7/3', '7/4', '7/5', '7/6', '7/7'], 
        datasets: [
          {
            label: 'Tomatos', // x 軸的標籤項目
            data: ['16', '12', '16', '8', '12', '4', '20', '24'], // 位於 y 軸對應的各筆數據 value
            backgroundColor: [
              'white', 'white', 'white', 'white', 'white', 'white', '#FF4384'
            ],
          }
        ]
      };
    }
  }
};
</script>

<style lang="scss" scoped>

.small{
  margin-top: 16.5px;
}
.title-bar {
  width: 100%;
  height: 44px;
  font-size: 24px;
  color: white;
  font-weight: bold;
  background-color: rgba(grey, 0.2);
  line-height: 44px;
  padding-left: 16px;
}
.fcous-time,
.chart {
  width: 445px;
  margin-top: 48px;
}
.today-tomato,
.week-tomato {
  height: 92px;
  display: inline-block;
  margin-top: 16px;

  .title {
    color: white;
    font-size: 16px;
    font-weight: bold;
  }
  .count {
    color: #ff4384;
    font-size: 64px;
    display: inline-block;
    font-weight: bold;
  }
  .unit {
    color: rgba(#ffffff, 0.2);
    font-size: 16px;
    display: inline-block;
    margin-left: 8px;
    font-weight: bold;
  }
}
.today-tomato {
  left: 0px;
}
.week-tomato {
  float: right;
}
</style>
