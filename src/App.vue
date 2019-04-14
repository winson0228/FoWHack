<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <OnboardingModal 
      v-show="!isOnboarded"
      @close="onboardUser"/>
    <NewMeetingModal
      v-show="isNewMeetingModalVisibile"
      @close="closeNewMeetingModal"
    />
    <div>  
      <Schedule/>
    </div>
    <md-button class="md-dense md-raised md-primary margin-reset"  @click="openNewMeetingModal">
      New Meeting
    </md-button>
  </div>
</template>

<script>
import Schedule from './components/Schedule.vue'
import NewMeetingModal from './components/NewMeetingModal.vue'
import OnboardingModal from './components/OnboardingModal.vue'


export default {
  name: 'app',
  components: {
    Schedule,
    NewMeetingModal,
    OnboardingModal
  },
  data: () => ({
      isNewMeetingModalVisibile: false,
      isOnboardingModalVisible: false,
      isOnboarded: false
  }),
  methods: {
    openNewMeetingModal() {
      this.isNewMeetingModalVisibile = true;
    }, 
    closeNewMeetingModal() {
      this.isNewMeetingModalVisibile = false;
    },
    onboardUser() {
      this.isOnboarded = true;
    }
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style>
.align-right {
  flex: 1 1 auto;
}


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-right: 100px;
  margin-left: 100px;
}
</style>
