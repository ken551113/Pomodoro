<template>
  <div class="ringtones">
    <RingtoneRadioList title="work" :rings="ringOptions" :currentSelect="workRing" @changeSelect="changeWorkRing"></RingtoneRadioList>
    <RingtoneRadioList title="break" :rings="ringOptions" :currentSelect="breakRing" @changeSelect="changeBreakRing"></RingtoneRadioList>
  </div>
</template>

<script>
import RingtoneRadioList from "../../components/RingtoneRadioList";

export default {
  data() {
    return {
      workRing: "none",
      breakRing: "none",
      ringOptions: [
        { value: "none" },
        { value: "default" },
        { value: "alarm" },
        { value: "alert" },
        { value: "beep" },
        { value: "bell" },
        { value: "bird" },
        { value: "bugle" },
        { value: "digital" },
        { value: "drop" },
        { value: "horn" },
        { value: "music" },
        { value: "ring" },
        { value: "warning" },
        { value: "whistle" }
      ]
    };
  },
  components: {
    RingtoneRadioList,
  },
  methods:{
    changeWorkRing(currentSelect){
      this.workRing = currentSelect;
    },    
    changeBreakRing(currentSelect){
      this.breakRing = currentSelect;
    }
  }
};
</script>


<style lang="scss" scoped>

</style>
