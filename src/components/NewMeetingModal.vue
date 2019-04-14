<template>
  <transition name="modal-fade">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              <h2>
                Schedule a New Meeting
              </h2>
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              <md-field>
                <label>Title</label>
                <md-input v-model="event.title"></md-input>
              </md-field>

              <md-field>
                <label>Description</label>
                <md-textarea v-model="event.content"></md-textarea>
              </md-field>
              
              <md-field>
                <label>Duration</label>
                <md-select v-model="event.duration" v-on:md-selected="calcCost">
                  <md-option :value="15">15 Min</md-option>
                  <md-option :value="30">30 Min</md-option>
                  <md-option :value="45">45 Min</md-option>
                  <md-option :value="60">1 Hr</md-option>
                  <md-option :value="75">1 Hr 15 Min</md-option>
                  <md-option :value="90">1 Hr 30 Min</md-option>
                  <md-option :value="105">1 Hr 45 Min</md-option>
                  <md-option :value="120">2 Hr</md-option>
                </md-select>
              </md-field>

              <md-field>
                <label>Priority</label>
                <md-select v-model="event.priority">
                  <md-option :value="1">Normal</md-option>
                  <md-option :value="2">Important</md-option>
                  <md-option :value="3">Nuclear</md-option>
                </md-select>
              </md-field>

              <md-datepicker v-model="event.rangeStart">
                <label>Schedule Range Start</label>
              </md-datepicker>
              <md-datepicker v-model="event.rangeEnd">
                <label>Schedule Range End</label>
              </md-datepicker>

              <md-field>
                <multiselect
                  v-model="selectedPeople" 
                  :options="peopleOptions" 
                  :multiple="true"
                  :searchable="true"
                  :clear-on-select="true"
                  :close-on-select="true"
                  :show-no-results="false"
                  placeholder="Add people to your meeting..."
                  :hide-selected="true"
                  @select="addCost"
                  @remove="removeCost"
                >
                </multiselect>
              </md-field>

            <!-- <md-field>
              <div>
                <md-chips v-model="selectedPeople"></md-chips>
              </div>
              <md-autocomplete 
                :md-options="peopleOptions"
                v-on:md-selected="selectPerson"
              >
              <label>Add people to your meeting...</label>
              </md-autocomplete>
            </md-field> -->

            </slot>
          </div>

          <md-progress-bar md-mode="determinate" :md-value="currentPercent"></md-progress-bar>
          <h6>
            {{manHours}} Man Hours
          </h6>

  
          <div class="modal-footer">
            <slot name="footer">
              <md-button class="md-dense md-raised md-primary margin-reset" @click="close">
                Cancel
              </md-button>
              <md-button class="md-dense md-raised md-primary margin-reset" @click="save">
                OK
              </md-button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>


<script>
import Multiselect from 'vue-multiselect'
import store from '../store'

export default {
  name: 'NewMeetingModal',
  components: {
    Multiselect
  },
  props: {
  },
  data: () => ({
    maxPercent: 0,
    currentPercent: 0,
    selectedPeople: [],
    countSelected: 0,
    manHours: 0,
    peopleOptions: ['Aleksiy', 'Winson', 'Shay', 'Ireti', 'Elaine'],
    event: {
      rangeEnd: "",
      rangeStart: "",
      contention: "",
      duration: 0,
      priority: 0,
      title: "",
    }
 }),
  methods: {
    save() {
      this.addEvent();
      this.close();
    },
    close() {
      this.event = {
        rangeEnd: "",
        rangeStart: "",
        contention: "",
        duration: 0,
        priority: 0,
        title: "",
      };
      this.$emit('close');

    },
    addCost() {
      this.countSelected++;
      this.calcCost();
    },
    removeCost() {
      this.countSelected--;
      this.calcCost();

    },
    calcCost() {
      this.manHours = Math.ceil(this.countSelected * this.event.duration / 60)
      this.currentPercent = this.manHours / 12 * 100;
    
    },
    addEvent() {
      store.commit('addEvent', this.event);
    }
  }
}
</script>

<style scoped>

.modal-mask {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 600px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
  text-align: left !important;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>