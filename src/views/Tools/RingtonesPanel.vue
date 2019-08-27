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
      this.$store.commit("changeRing",{mode:"work", ring:currentSelect});
    },    
    changeBreakRing(currentSelect){
      this.$store.commit("changeRing",{mode:"break", ring:currentSelect});
    }
  },
  computed:{
    workRing(){
      return this.$store.state.ring.work;
    },
    breakRing(){
      return this.$store.state.ring.break;
    }
  }
};
</script>


<style lang="scss" scoped>

</style>
