<script src="//unpkg.com/element-ui@2.7.2/lib/index.js"></script>
<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container flex-row">
          <div class="modal-header">
            <h2 name="header">Let’s get you set up</h2>
          </div>
          <div class="modal-body">
            <md-steppers v-if="!completedPreferences" :md-active-step.sync="active" md-linear>
              <md-step id="first" :md-done.sync="first">
                <div class="item-spacing">
                  <h3>
                    <p>We’ll ask for some quick questions so we can ensure we are scheduling meetings at a time that makes you the most productive you can be.</p>
                  </h3>
                  <div>
                    <div class="text-align-left pos-relative">
                      <img src="../assets/undraw_booking_33fn.png" class="bg-illustrations">
                      <md-button
                        class="md-raised md-primary md-button-right flex-justify-end img-position pos-absolute"
                        @click="setDone('first', 'second')"
                      >Continue</md-button>
                    </div>
                  </div>
                </div>
              </md-step>
              <md-step id="second" :md-done.sync="second">
                <div class="item-spacing">
                  <h3>What are your core working hours?</h3>
                  <el-time-select
                    placeholder="Start time"
                    v-model="event.workingHoursStart"
                    :picker-options="{
                      start: '00:00',
      end: '23:30',
    }"
                  ></el-time-select>
                  <p>
                    <el-time-select
                      placeholder="End time"
                      v-model="event.workingHoursEnd"
                      :picker-options="{
                        start: '00:00',
      end: '23:30',
      minTime: startTime
    }"
                    ></el-time-select>
                  </p>
                  <p>We’ll avoid scheduling meetings outside of these hours altogether.</p>
                  <div class="text-align-left pos-relative">
                    <img src="../assets/undraw_schedule_pnbk.png" class="bg-illustrations">
                    <md-button
                    class="md-raised md-primary flex-justify-end img-position pos-absolute"
                    @click="setDone('second', 'third')"
                  >Continue</md-button>
                  </div>
                </div>
              </md-step>
              <md-step id="third" :md-done.sync="third">
                <div class="item-spacing">
                  <h3>Do you prefer to group your meetings together on a specific day, or spread them out over the week?</h3>
                  <md-radio
                    v-model="event.buffering"
                    name="onboardPrefClustered"
                    value="clustered"
                  >Clustered</md-radio>
                  <md-radio
                    v-model="event.buffering"
                    name="onboardPrefBuffered"
                    value="buffered"
                  >Buffered</md-radio>
                  <div v-if="event.buffering === 'buffered'">
                    <md-field>
                      <label>Minute Intervals</label>
                      <md-select v-model="event.bufferInterval">
                        <md-option value="15">15 Minutes</md-option>
                        <md-option value="30">30 Minutes</md-option>
                        <md-option value="45">45 Minutes</md-option>
                        <md-option value="60">1 Hour</md-option>
                        <md-option value="75">1 Hour 15 Minutes</md-option>
                        <md-option value="90">1 Hour 30 Minutes</md-option>
                        <md-option value="105">1 Hour 45 Minutes</md-option>
                        <md-option value="120">2 Hours</md-option>
                      </md-select>
                    </md-field>
                    <p>How would you like to space out between your meetings?</p>
                  </div>
                  <div class="text-align-left pos-relative">
                    <img src="../assets/undraw_preferences_uuo2.png" class="bg-illustrations">
                    <md-button
                    class="md-raised md-primary img-position pos-absolute"
                    @click="setDone('third', 'forth')"
                  >Continue</md-button>
                  </div>
                </div>
              </md-step>
              <md-step id="forth" :md-done.sync="forth">
                <div class="item-spacing">
                  <h3>What days of the week are you most available for meetings?</h3>
                  <md-field>
                    <label>Select your day...</label>
                    <md-select v-model="event.selectedPreferredDays" multiple>
                      <md-option value="1">Monday</md-option>
                      <md-option value="2">Tuesday</md-option>
                      <md-option value="3">Wednesday</md-option>
                      <md-option value="4">Thursday</md-option>
                      <md-option value="5">Friday</md-option>
                      <md-option value="6">Saturday</md-option>
                      <md-option value="7">Sunday</md-option>
                    </md-select>
                  </md-field>
                  <p>We’ll try our best to schedule meetings in these days for you.</p>
                   <div class="text-align-left pos-relative">
                    <img src="../assets/undraw_digital_nomad_9kgl.png" class="bg-illustrations">
                    <md-button
                    class="md-raised md-primary img-position pos-absolute"
                    @click="setDone('forth', 'fifth')"
                  >Continue</md-button>
                  </div>
                </div>
              </md-step>
              <md-step id="fifth" :md-done.sync="fifth">
                <div class="item-spacing">
                  <h3>What days are you the least available for meetings?</h3>
                  <md-field>
                    <label>Select your day...</label>
                    <md-select v-model="event.selectedAvoidDays" multiple>
                      <md-option value="1">Monday</md-option>
                      <md-option value="2">Tuesday</md-option>
                      <md-option value="3">Wednesday</md-option>
                      <md-option value="4">Thursday</md-option>
                      <md-option value="5">Friday</md-option>
                      <md-option value="6">Saturday</md-option>
                      <md-option value="7">Sunday</md-option>
                    </md-select>
                  </md-field>
                  <p>We’ll try our best to avoid scheduling meetings in these days for you.</p>
                  <div class="text-align-left pos-relative">
                    <img src="../assets/undraw_organize_resume_utk5.png" class="bg-illustrations">
                    <md-button
                    class="md-raised md-primary img-position pos-absolute"
                    @click="setDone('fifth', 'sixth')"
                  >Continue</md-button>
                  </div>
                </div>
              </md-step>
              <md-step id="sixth" :md-done.sync="sixth">
                <div class="item-spacing" required>
                  <h3>Do you have a preference if your meetings are in the morning, or afternoon?</h3>
                  <md-radio
                    v-model="event.onboardSelectedAMPM"
                    name="onboardPrefMorningAfternoon"
                    value="am"
                  >Morning</md-radio>
                  <md-radio
                    v-model="event.onboardSelectedAMPM"
                    name="onboardPrefMorningAfternoon"
                    value="pm"
                  >Afternoon</md-radio>
                  <div class="text-align-left pos-relative">
                    <img
                      src="../assets/undraw_morning_essentials_9fw8.png"
                      class="bg-illustrations"
                    >
                    <md-button class="md-raised md-primary img-position pos-absolute" @click="setComplete()">Continue</md-button>
                  </div>
                </div>
              </md-step>
            </md-steppers>
          </div>
          <div v-if="completedPreferences" class="item-spacing modal-footer">
            <h2>Thanks!</h2>
            <div class="text-align-center">
              <img src="../assets/undraw_order_confirmed_1m3v.png" class="bg-illustrations">
            </div>
            <h3>We'll schedule meetings based on your preferences.</h3>
            <div class="text-align-right">
              <md-button
                class="md-dense md-raised md-primary margin-reset"
                @click="$emit('close')"
              >Done</md-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>


<script>
import Vue from "vue";
import elementUI from "element-ui";
import store from "../store";

Vue.use(elementUI);

export default {
  name: "Modal",
  props: {},
  methods: {
    close() {
      this.event = {
        workingHoursStart: "",
        workingHoursEnd: "",
        buffering: "",
        bufferInterval: 0,
        selectedPreferredDays: [],
        selectedAvoidDays: [],
        onboardSelectedAMPM: ""
      };
      this.$emit("close");
    },
    setDone(id, index) {
      this[id] = true;

      if (index) {
        this.active = index;
      }
    },
    setComplete() {
      this.completedPreferences = true;
    },
    setError() {
      this.stepError = "Please fill in the required fields";
    }
  },
  data: () => ({
    radio: false,
    startTime: "",
    endTime: "",
    selectedPreferredDay: [],
    selectedAvoidDay: [],
    dayOptions: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    active: "first",
    completedPreferences: false,
    first: false,
    second: false,
    third: false,
    forth: false,
    fifth: false,
    sixth: false,
    event: {
      workingHoursStart: "",
      workingHoursEnd: "",
      buffering: "",
      bufferInterval: 0,
      selectedPreferredDays: [],
      selectedAvoidDays: [],
      onboardSelectedAMPM: ""
    },
    stepError: null
  }),
  computed: {
    selectedAvoidDays: {
      get() {
        return this.$material.locale.onboardAvoidDay;
      },
      set(val) {
        this.$material.locale.onboardAvoidDay = val;
      }
    },
    selectedPreferredDays: {
      get() {
        return this.$material.locale.onboardPreferredDay;
      },
      set(val) {
        this.$material.locale.onboardPreferredDay = val;
      }
    },
    bufferInterval: {
      get() {
        return this.$material.locale.bufferInterval;
      },
      set(val) {
        this.$material.locale.bufferInterval = val;
      }
    }
  }
};
</script>

<style scoped>
@import url("//unpkg.com/element-ui@2.7.2/lib/theme-chalk/index.css");
@import url("//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons");

.modal-mask {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
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
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
  text-align: left;
  flex-grow: 1;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin-top: 24px;
}

.modal-footer {
  text-align: left;
}

.modal-default-button {
  float: right;
}

.margin-reset {
  margin: 0px;
}

.item-spacing {
  /* margin: 64px 0px; */
  margin-top: 64px;
}

.bg-illustrations {
  height: 70%;
  width: 70%;
}

.pos-relative {
  position: relative;
}

.pos-absolute {
  position: absolute;
}

.text-align-right {
  text-align: right;
}

.text-align-left {
  text-align: left;
}

.img-position {
  right: 0px;
  bottom: 0px;
}
.icon-size {
  height: 16px;
  width: 16px;
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
.mat-horizontal-stepper-header .mat-step-icon,
.mat-horizontal-stepper-header .mat-step-icon-not-touched {
  margin-top: 24px;
  margin-right: 0 !important;
}
.mat-step-label {
  margin-top: 16px;
  width: 100%;
}
</style>