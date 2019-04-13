<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
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


export default {
  name: 'app',
  components: {
    Schedule,
    NewMeetingModal
  },
  data () {
    return {
      isNewMeetingModalVisibile: false,
    };
  },
  methods: {
    openNewMeetingModal() {
      this.isNewMeetingModalVisibile = true;
    }, 
    closeNewMeetingModal() {
      this.isNewMeetingModalVisibile = false;
    }
  }
}
</script>

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
