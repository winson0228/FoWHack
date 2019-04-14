<template>
  <div id="app">
    <md-app>
      <md-app-toolbar class="md-primary">
        <span class="md-title">Meeter</span>
          <span class="fill-space"></span>
         <md-button class="md-dense md-raised md-primary margin-reset"  @click="openNewMeetingModal">
          New Meeting
        </md-button>
      </md-app-toolbar>

      <md-app-content>
        <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
        <OnboardingModal 
          v-show="!isOnboarded"
          @close="onboardUser"/>
        <NewMeetingModal
          v-show="isNewMeetingModalVisibile"
          @close="closeNewMeetingModal"
        />
        <div class="schedule">  
          <Schedule/>
        </div>
    
        </md-app-content>
    </md-app>
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
.fill-space {
  flex: 1 1 auto;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.multiselect__tags {
  border: none;
}

.multiselect__tag {
  background: #448aff;
}

.multiselect__option--highlight {
  background: #448aff;
}

.multiselect__option--highlight:after {
  background: #448aff;
}

</style>
