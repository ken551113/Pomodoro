<template>
  <div class="RingtoneRadioList">
    <div class="title-bar">{{title}}</div>
    <label class="container" v-for="(ring,index) in rings" :key="index">
      {{ring.value}}
      <input
        type="radio"
        :checked="ring.value === currentSelect"
        :id="title+'_'+ring.value"
        :name="title+'_'+ring.value"
        :value="ring.value"
        @change="playAudio"
      />
      <span class="checkmark"></span>
    </label>
  </div>
</template>

<script>
export default {
  name: "RingtoneRadioList",
  props: {
    title: "",
    rings: null,
    currentSelect: ""
  },
  data() {
    return {
      ringValue: null,
      audio: null
    };
  },
  methods: {
    playAudio(e) {
      this.ringValue = e.target.value;
      if (this.ringValue === "none") {
        if(this.audio) this.audio.pause();
        this.audio = null;
      } else { 
        if(this.audio) this.audio.pause();
        this.audio = new Audio(`${process.env.BASE_URL}Ringtones/${this.ringValue}.mp3`);
        this.audio.play();
      }
      this.$emit("changeSelect", this.ringValue);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.RingtoneRadioList {
  width: 445px;
  margin-top: 48px;
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
  margin-bottom: 19px;
  text-transform: uppercase;
}
.container {
  display: inline-block;
  position: relative;
  padding-left: 28px;
  margin-bottom: 21px;
  cursor: pointer;
  font-size: 16px;
  user-select: none;
  color: white;
  height: 24px;
  line-height: 24px;
  width: 33%;
  text-transform: uppercase;
}

/* Hide the browser's default radio button */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 24px;
  width: 24px;
  background-color: #003164;
  border-radius: 50%;
  border: 2px solid white;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ff4384;
}

/* When the radio button is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #ff4384;
  border: 2px solid #ff4384;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.container .checkmark:after {
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #ff4384;
  border: 3px solid #003164;
}
</style>
