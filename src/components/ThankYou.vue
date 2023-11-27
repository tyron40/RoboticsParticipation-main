<template>
    <h2>Thank you!</h2>
    <h3>Your information has been submitted successfully.</h3>
    <h4>Redirecting to previous page in {{countDown}} second(s)...</h4>
</template>

<script>
export default {
  emits: ["return_to_prev"],
  data () {
    return {
      countDown: 15
    }
  },
  created(){
    this.countDownTimer() 
  },
  methods: {
    countDownTimer() {
      if (this.countDown > 0) {
        setTimeout(() => {
            this.countDown -= 1
            this.countDownTimer()
        }, 1000)
      } else if (this.countDown === 0) {
        this.$emit('return_to_prev')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  font-size: 2em;
  font-style: italic;
}
h3 {
  font-size: 1.5em;
  font-style: italic;
}
</style>