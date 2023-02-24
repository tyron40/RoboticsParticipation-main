<template>
  <ThankYou v-if="submittedSuccessfully"/>
  <SomethingWentWrong v-if="hasSubmissionError"/>
  <form v-if="!submittedSuccessfully && !hasSubmissionError" @submit.prevent="handleGoToThankYou">
        <!-- Form Example (submitting currently does nothing with the data) -->
        <h2>Please Sign out</h2>
        <section class="form-inputs-container">
          <div class="input-container">
            <label for="full-name">Full Name (required; use the name you used for sign in):
            </label>
            <input type="text"
                    required
                    class="name-input"
                    id="full-name"
                    name="full-name"
                    v-model="signOutName" />
          </div>
        </section>
        <button class="primary-action" :disabled="isLoading" :class="isLoading ? 'disabled-action' : ''">{{isLoading ? 'Please Wait...' : 'Submit'}}</button>
      </form>  
</template>

<script>
import ThankYou from './ThankYou.vue'
import SomethingWentWrong from './SomethingWentWrong.vue';
import callSheetAPI from '@/utils/api';
export default {
    name: "SignOut",
    data() {
        return {
            signOutName: '',
            submittedSuccessfully: false,
            hasSubmissionError: false,
            isLoading: false,
            formGoogleSheetName: 'visits',
        };
    },
    components: { ThankYou, SomethingWentWrong },
    methods: {
    handleGoToThankYou() {
      this.isLoading = true;
      let dataToSend = {
        participantName: this.signOutName,
        action: 'Sign Out',
        formGoogleSheetName: this.formGoogleSheetName,
      };
      let xhr = callSheetAPI(dataToSend);
      let self = this;
      xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
          //success
          self.submittedSuccessfully = true;
        }else if(xhr.status !== 200){
          //failure
          self.hasSubmissionError = true;
        }
      };
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
</style>
