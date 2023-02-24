<template>
    <form ref="form" @submit="handleSubmitEvent">
      <h2>Waiver and Release of Liability</h2>
      <section class="form-inputs-container">
        <div class="input-container">
            <label for="main-waiver-participant-name">Participant Name (required)</label>
            <input type ="text" v-model.trim="participantName"
                    required 
                    id="main-waiver-participant-name"
                    name="main-waiver-participant-name" />
        </div>
        <div class="input-container">
            <label for="main-waiver-parent-guardian-name">Parent/Guardian name (required)</label>
            <input type="text" v-model.trim="parentGuardianName"
            required
                    id="main-waiver-parent-guardian-name"
                    name="main-waiver-parent-guardian-name" />
        </div>
        <div class="input-container">
            <label for="main-waiver-participant-date-of-birth">Participant date of birth (required)</label>
            <input type="date" v-model.trim="dob"
            required
                    id="main-waiver-participant-date-of-birth"
                    name="main-waiver-participant-date-of-birth" />
        </div>
        <div class="input-container">
            <label for="main-waiver-parent-guardian-email">Parent/Guardian email (required)</label>
            <input type="text" v-model.trim="signerEmail"
            required
                    id="main-waiver-parent-guardian-email"
                    name="main-waiver-parent-guardian-email" />
        </div>
        <div class="input-container">
            <label for="main-waiver-emergency-contact-name">Emergency contact name (required)</label>
            <input type="text" v-model.trim="emergencyContactName"
            required
                    id="main-waiver-emergency-contact-name"
                    name="main-waiver-emergency-contact-name" />
        </div>
        <div class="input-container">
            <label for="main-waiver-emergency-contact-phone">Emergency contact phone (required)</label>
            <input type="text" v-model.trim="emergencyPhone"
            required
                    id="main-waiver-emergency-contact-phone"
                    name="main-waiver-emergency-contact-phone" />
        </div>
        <MainWaiverAgreement></MainWaiverAgreement>
        
        <div class="checkbox-container">
           <input type="checkbox" v-model="isWaiverAgreedTo"
           required
                    id="main-waiver-agree-to-waiver"
                    name="main-waiver-agree-to-waiver" />
            <label for="main-waiver-agree-to-waiver">
              <strong>
                The Parent/Guardian of a Participant under 18 years of age has read this document and understands that this Waiver and Release of Liability includes a waiver of the right to make injury claims that is intended to be legally binding. By checking this box, the Parent/Guardian of a Participant under 18 years of age agrees to this Waiver and Release of Liability (required)
              </strong>
            </label>
        </div>
        <button :disabled="disableBtn" type="submit" class="primary-action">
          {{ disableBtn ? 'Please Wait...'  : 'Agree and Submit' }}
        </button>
        
        
      </section>
    </form>
</template>
<script>
import MainWaiverAgreement from './MainWaiverAgreement.vue'
export default {
  components: {
    MainWaiverAgreement
  },
  name: 'MainWaiverParentGuardian',
  emits: ['next'],
  data(){
    return {
      participantName: '',
      parentGuardianName: '',
      dob: '',
      signerEmail: '',
      isWaiverAgreedTo: false,
      emergencyContactName: '',
      emergencyPhone: '',
      disableBtn: false, 
    }
  },
  methods: {
    handleSubmitEvent(e) {
      this.disableBtn = true;
      e.preventDefault();
      let data = {
        participantName: this.participantName,
        parentGuardianName: this.parentGuardianName,
        dob: this.dob,
        signerEmail: this.signerEmail,
        isWaiverAgreedTo: this.isWaiverAgreedTo,
        emergencyContactName: this.emergencyContactName,
        emergencyPhone: this.emergencyPhone,
      };
      this.$emit('next', data);
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
  max-width: 50em;
}
div.input-container {
  margin: 1em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
div.checkbox-container {
  display: flex;
  text-align: left;
  align-items: flex-start;
}
</style>
