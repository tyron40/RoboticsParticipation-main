<template>
  <form @submit="handleSubmitEvent">
    <h2>COVID-19 Policy</h2>
    <section class="form-inputs-container">
    <h3>Masks</h3>
    <ul>
      <li>Requirement for masks will be dictated by CDC (United States Centers for Disease Control and Prevention) recommendations, FIRST (For Inspiration and Recognition in Science and Technology) policy, local policy, and museum policy, deferring to whichever requirement is most strict</li>
      <li>In cases when masks are required</li>
      <ul>
        <li>Masks are required to be worn by all people (ages over 3) at all times</li>
        <li>N95/KN95/KF94 masks are recommended</li>
      </ul>
      <li>Masks should be tightly woven and well-fitting — they must fit—and stay—over your nose and mouth, with no gaps on the sides, top or bottom</li>
      <li>Masks must not have exhalation valves or vents</li>
      <li>Staff and mentors may require you to replace your mask with another at their discretion</li>
      <li>Things that do NOT qualify as adequate protection:</li>
      <ul>
        <li>Face shields alone (can be worn for added protection above and beyond mask)</li>
        <li>Bandanas/scarves</li>
        <li>Ski masks/balaclavas</li>
        <li>Neck gaiters</li>
        <li>Masks with visible holes, including mesh or lace</li>
        </ul>
        <li>If wearing a cloth mask, consider double masking</li>
        <figure>
          <img src="./../assets/better-fitting-mask-info.png" 
                id="masking-instructions__recommendations-image" 
                alt="An infographic describing ways to have a better fit and extra protection with cloth and disposable masks" 
                aria-describedby="masking-instructions__recommendations-image-description"
                class="image-fit">
                <figcaption class="sr-only" id="masking-instructions__recommendations-image-description">
                  An infographic that says 'ways to have a better fit and extra protection with cloth and disposable masks: wear two masks (disposable mask worn underneath and cloth mask on top), combine either a cloth mask or disposable mask with a fitter or brace, knot and tuck ear loops of a 3-ply mask where they join the edge of the mask - for disposable procedure masks, fold and tuck the unneeded material under the edges (for instructions see https://youtu.be/GzTAZDsNBe0), use masks that attach behind the neck and head with either elastic bands or ties (instead of ear loops)'. The infographic also shows good examples of mask wearing (disposable mask under cloth mask, and alternatively a cloth mask with a fitter). Finally, the infographic shows knotting the ear loops of masks for a better fit, folding and tucking in unneeded material for a better fit, and then checking for a close fit
                </figcaption>
        </figure>

        <li>Even in cases when masks are not required, <strong><mark>disposable masks will be available on request</mark></strong></li>
      </ul>
      <h3>Vaccines</h3>
      <ul>
        <li>Everyone who is eligible should be fully vaccinated <strong>including booster</strong> dose at the time they are eligible for booster in order to participate in person</li>
        <figure>
          <img src="./../assets/different-vaccination-types.png" 
                id="vaccines__types-image" 
                alt="An infographic describing Covid-19 booster shot recommendations"
                aria-describedby="vaccines__types-image-description"
                class="image-fit">
                <figcaption class="sr-only" id="vaccines__types-image-description">Moderna 5 months after second dose; Pfizer 5 months after second dose; Johnson & Johnson 2 months after single dose. Get boosted</figcaption>
        </figure>
        <li>ALL attendees/participants are required to be fully vaccinated and, if eligible, boosted 2 weeks or longer before attending a meeting/event in person</li>
        <li>If you have been in contact with someone who has tested positive to COVID-19 (regardless of your vaccination status), prior to attending your next meeting/event you must</li>
        <ul>
          <li>Have 2 negative OTC tests <strong>OR</strong></li>
          <li>Have 1 negative PCR test <strong>OR</strong></li>
          <li>Not attend in person for at least 10 days from contact</li>
        </ul>
        <li><strong><mark>If you are unable to be vaccinated,</mark></strong> you must have a negative test from within 3 days prior to attending an in-person meeting/event</li>
      </ul>
      <h3>Food/drink</h3>
      <ul>
        <li>Recommend eating/drinking outside or in the FoodWorks area</li>
        <li><strong>In cases when masks are required</strong></li>
        <ul>
          <li>Can eat/drink <strong>outside</strong>, must be 6 ft apar</li>
          <li>Can eat/drink inside in <strong>FoodWorks</strong> area, 6 ft apart, in a group of no more than 6 robotics folks</li>
          <li>Can eat/drink outside, must be 6 ft apar</li>
          <li>Can eat/drink inside in FoodWorks area, 6 ft apart, in a group of no more than 6 robotics folks</li>
        </ul>
      </ul>
      <h3>Contact tracing</h3>
      <ul>
        <li>Must sign in to meeting/event</li>
        <li>Must be officially signed up with contact info in FIRST Dashboard and/or have contact info registered with the team</li>
        <li>If you've attended a robotics meeting/event and had a positive COVID-19 test following that meeting/event, notify engineering@kaleideum.org so that contacts can be informed that they have had a positive contact (names of those with a positive test will not be shared by mentors/staff unless someone requests their own name be shared; only notification that someone was in contact with a person who had a positive COVID-19 test result)</li>
      </ul>
      <h3>Additional Information</h3>
      <ul>
        <li>Sanitizer and cleaning supplies will be available</li>
        <li>Information regarding healthy practices will be posted</li>
        <li>Physical distancing of 6 ft or more between attendees is encouraged where possible</li>
        <li>Stay home if you:</li>
        <ul>
          <li>Have tested positive for COVID-19 within 72 hours</li>
          <li>Are awaiting COVID-19 test results due to symptoms or exposure</li>
          <li>Are feeling unwell or have symptoms</li>
          <li>Are a known contact of someone who has tested positive or had symptoms of COVID-19 within the last 14 days, unless you are fully vaccinated and boosted</li>
        </ul>
        <li>Fully remote meetings may resume depending on various statistics – statistics will be shared if a meeting is made fully remote</li>
      </ul>
      <p>*This policy may be updated at the discretion of staff/mentors at any time, and will be posted if/when it is updated</p>
      <p>** If support with acquiring COVID-19 tests is needed, please contact a staff member/mentor for assistance</p>
      <div class="waiver__input-container">
        <input type="checkbox" v-model="agreeToCovid19Waiver"
        required
                id="agree-to-covid19-waiver"
                name="agree-to-covid19-waiver"/>
            <label for="agree-to-covid19-waiver"><strong>I agree to abide by this full policy (or I agree as a parent/guardian on behalf of a child participant)</strong></label>
      </div>
      <div class="waiver__input-container">
        <input type="radio"
                v-model="vaccinationStatus"
                required
                value="vaccinated"
                id="attest-to-fully-vaccinated"
                name="vaccination-status"/>
            <label for="attest-to-fully-vaccinated"><strong>I have been fully vaccinated, and boosted if eligible (or I attest as a parent/guardian that my child participant has been fully vaccinated and boosted)</strong></label>
      </div>
      <div class="waiver__input-container">
        <input type="radio"
                v-model="vaccinationStatus"
                required
                value="agrees-to-test"
                id="attest-to-testing-requirements"
                name="vaccination-status"/>
            <label for="attest-to-testing-requirements"><strong>I have not been both fully vaccinated, and boosted if eligible, at this time, and agree to abide by testing requirements (or I attest as a parent/guardian that my child participant has not been both fully vaccinated and boosted at this time, and agree to abide by testing requirements)</strong></label>
      </div>    
      <button :disabled="isLoading" type="submit" class="primary-action" :class="isLoading ? 'disabled-action' : ''">
        {{ isLoading ? 'Please Wait...'  : 'Agree and Submit' }}
      </button>
    </section>
  </form>

</template>

<script>
export default {
   mounted() {
    window.scrollTo(0, 0);
  },
  name: 'Covid19WaiverContainer',
  props: {
    isLoading: Boolean
  },
  emits: ['next'],
  data(){
    return {
      agreeToCovid19Waiver: false,
      vaccinationStatus: '',
    }
  },
  methods: {
    handleSubmitEvent(e) {
      e.preventDefault();
      let data = {
        agreeToCovid19Waiver: this.agreeToCovid19Waiver,
        vaccinationStatus: this.vaccinationStatus,
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
h3 {
  text-align: left;
}
p {
  text-align: left;
  font-weight: bold;
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form-inputs-container {
  max-width: 50em;
}
div.waiver__input-container {
  margin-bottom: 0.5em;
  display: flex;
  align-items: flex-start;
  text-align: left;
}
.action-container {
  display: flex;
  justify-content: space-between;
}
ul {
  text-align: left;
}
.sr-only:not(:focus):not(:active) {
  clip: rect(0 0 0 0); 
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap; 
  width: 1px;
}
.image-fit {
  max-width: 56vw;
  object-fit: scale-down;
  margin-left: -2.5em;
}
</style>