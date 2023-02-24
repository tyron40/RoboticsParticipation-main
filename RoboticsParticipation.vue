<template>
  <div class="robotics-welcome">
    <h1>{{ msg }}</h1>
      <section  class="pseudo-navigation">
        <button @click="showSignWaiver" class="tab-action" :class="shouldShowSignWaiver ? 'tab-action--active' : ''">Complete Waiver</button>
        <button @click="showSignIn" class="tab-action" :class="shouldShowSignIn ? 'tab-action--active' : ''">Sign In</button>
        <button @click="showSignOut" class="tab-action" :class="shouldShowSignOut ? 'tab-action--active' : ''">Sign Out</button>
      </section>
      <WaiversContainer v-if="shouldShowSignWaiver" :key="waiverKey"/>
      <SignIn v-if="shouldShowSignIn" :key="signInKey" />
      <SignOut v-if="shouldShowSignOut" :key="signOutKey" />
  </div>
</template>

<script>
import SignIn from './SignIn.vue'
import SignOut from './SignOut.vue'
import WaiversContainer from './WaiversContainer.vue'
export default {
  components: {
    SignIn,
    SignOut,
    WaiversContainer
  },
  name: 'RoboticsParticipation',
  props: {
    msg: String
  },
  data(){
    return {
      // initialized to true - i.e. show by default
      shouldShowSignIn: true,
      // initialized to false
      shouldShowSignOut: false,
      // initialized to false
      shouldShowSignWaiver: false,
      waiverKey: 1,
      signInKey: 1,
      signOutKey: 1
    }
  },
  methods: {
    showSignOut() {
      this.signOutKey += 1;
      this.shouldShowSignIn = false;
      this.shouldShowSignOut = true;
      this.shouldShowSignWaiver = false;
    },
    showSignIn() {
      this.signInKey += 1;
      this.shouldShowSignIn = true;
      this.shouldShowSignOut = false;
      this.shouldShowSignWaiver = false;
    },
    showSignWaiver() {
      // incrementing the key allows a clean "refresh" of the component if we click the tab to (re)show that particular component
      // in the case of the waiver form, this can allow a user to reset to an earlier state (e.g. to select parent / guardian instead of over-18 participant)
      // this may mean that a user may fail to submit the full form, but that was already a risk (both in the app and on paper)
      this.waiverKey += 1;
      this.shouldShowSignIn = false;
      this.shouldShowSignOut = false;
      this.shouldShowSignWaiver = true;
    }
  }
}

</script>

<style>
.pseudo-navigation {
  display: flex;
  justify-content: space-evenly;
  box-shadow: 0 -0.05em 0 0 #c7d0d9 inset;
}
.tab-action {
  cursor: pointer;
  box-shadow: 0 -0.025em 0 0 #c7d0d9 inset;
  width: 10em;
  background: #fff;
  color: #000;
  font-size: 1.5em;
  padding: 0.25em;
  border: transparent;
}
.tab-action:hover {
  width: 10em;
  box-shadow: 0 -0.2em 0 0 #303584 inset;
  opacity: 1;
  background: #f6f7f8;
}
.tab-action--active {
  width: 10em;
  box-shadow: 0 -0.2em 0 0 #303584 inset;
  opacity: 1;
  background: #f6f7f8;
}
.primary-action {
  cursor: pointer;
  background: #fff;
  color: #303584;
  border: 2px solid #303584;
  height: 3em;
  font-size: 1em;
  margin: 0.2em;
}
.primary-action:hover {
  background: #303584;
  color: #fff;
}
.secondary-action {
  cursor: pointer;
  background: #fff;
  color: #038489;
  border: 2px solid #038489;
  height: 3em;
  font-size: 1em;
  margin: 0.2em;
}
.secondary-action:hover {
  background: #038489;
  color: #fff;
  border: 2px solid #038489;
}
.primary-action.disabled-action,
.secondary-action.disabled-action {
  font-style: oblique;
  color: #54687c;
  border: 2px solid #54687c;
  cursor: not-allowed;
}
.primary-action.disabled-action:hover,
.secondary-action.disabled-action:hover {
  background: #fff;
  color: #54687c;
  cursor: not-allowed;
}
</style>
