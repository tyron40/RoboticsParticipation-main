<template>
    <form>
      <h2 v-if="isFormUntouched">Please select who is completing these waivers to start:</h2>
        <section v-if="isFormUntouched">
          <div class="action-container">
            <button @click.prevent="selectAmParentGuardian" class="primary-action">I am the Parent / Guardian of a Participant</button>
            <button @click.prevent="selectAmOver18Participant" class="secondary-action">I am a Participant who is 18 years old or older</button>
            
          </div>
        </section>
        <section v-if="!isFormUntouched">
          <MainWaiverParentGuardian v-if="isParentGuardian && step === 1" @next="handleGoToCovid19Waiver" />
          <MainWaiverOver18Participant v-if="isOver18Participant && step === 1" @next="handleGoToCovid19Waiver" />
          <Covid19WaiverContainer :isLoading="isLoading" v-if="step === 2" @next="handleGoToThankYou"/>
          <ThankYou v-if="step === 3"/>
          <SomethingWentWrong v-if="step === 4"/>
        </section>
    </form>
    
</template>

<script>
import MainWaiverParentGuardian from './MainWaiverParentGuardian.vue'
import MainWaiverOver18Participant from './MainWaiverOver18Participant.vue'
import Covid19WaiverContainer from './Covid19WaiverContainer.vue'
import ThankYou from './ThankYou.vue'
import SomethingWentWrong from './SomethingWentWrong.vue'
import callSheetAPI from '@/utils/api';
export default {
  components: {
    Covid19WaiverContainer,
    MainWaiverParentGuardian,
    MainWaiverOver18Participant,
    ThankYou,
    SomethingWentWrong
},
  name: 'WaiversContainer',
  props: {
    msg: String
  },
  data(){
    return {
      isParentGuardian: false, // initialized to false
      isOver18Participant: false, // initialized to false 
      mainWaiverData:{},
      covid19WaiverData: {},
      step: 1,
      isLoading: false,
    }
  },
  computed: {
    isFormUntouched() {
      return this.isParentGuardian == false &&  this.isOver18Participant == false;
    }
  },
  methods: {
    selectAmParentGuardian() {
      this.isParentGuardian = true;
    },
    selectAmOver18Participant() {
      this.isOver18Participant = true;
    },
    handleGoToCovid19Waiver(data) {
      this.mainWaiverData = data;
      this.step++;
    },
    handleGoToThankYou(data) {
      this.covid19WainWaiverData = data;
      this.isLoading = true;
      let dataToSend = {
        ...this.mainWaiverData,
        ...this.covid19WainWaiverData
      };
      let xhr = callSheetAPI(dataToSend);
      let self = this;
      xhr.onreadystatechange = function(){
          if(xhr.readyState === 4 && xhr.status === 200){
            //success
            self.step++;
          }else if(xhr.status !== 200){
            //failure
            self.step +=2;
          }
        }
    }
  }
}
</script>
<style scoped>
h2 {
  margin: 2em 0 0;
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form-inputs-container {
  max-width: 30em;
}
div.input-container {
  margin: 1em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.name-input {
  width: 30em;
}
.action-container {
  display: flex;
  justify-content: space-between;
}
</style>
