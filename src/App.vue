<template>
  <!-- temporarily  commenting out logo -->
  <!-- <img alt="Kaleideum: Learning Reimagined" src="./assets/logo.png" id="kal-logo"> -->
  <RoboticsParticipation msg="Welcome to Winston-Salem Community Robotics!"/>
</template>

<script>
import RoboticsParticipation from './components/RoboticsParticipation.vue'

export default {
  name: 'App',
  components: {
    RoboticsParticipation: RoboticsParticipation
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5em;
}
#kal-logo {
  max-height: 24em;
}
</style>
