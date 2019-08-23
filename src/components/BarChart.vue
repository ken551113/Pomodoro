<script>
import { Bar, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;
Chart.defaults.global.defaultFontColor = 'white';
Chart.defaults.global.defaultFontSize = 16;
Chart.defaults.global.tooltips = false;
export default {
  extends: Bar,
  mixins: [reactiveProp],
  //props: ["options"],
  data() {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: false,
  
        legend: {
            display: false,

        },
        
        scales: {
          yAxes: [
            {
              gridLines: {
                color: "white",
                display: false
              },
              ticks: {
                beginAtZero: true,
                stepSize: 4 // 設定 y 軸的數字級距
              }
            }
          ],
          xAxes: [
            {
              barPercentage: 0.6,
              gridLines: {
                color: "white",
                display: false
              }
            }
          ]
        }
      }
    };
  },
  mounted() {
    // this.chartData 在 mixin 創建.
    // 如果你需要替換 options , 請創建本地的 options 對象
    this.renderChart(this.chartData, this.options);
  }
};
</script>

<style>
</style>