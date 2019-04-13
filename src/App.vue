<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <OnboardingModal 
      v-show="!isOnboarded"
      @close="onboardUser"/>
    <NewMeetingModal
      v-show="isNewMeetingModalVisibile"
      @close="closeNewMeetingModal"
    />
    <button
      type="button"
      class="btn"
      @click="openNewMeetingModal"
    >
      Open Modal!
    </button>
    <Schedule/>
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
