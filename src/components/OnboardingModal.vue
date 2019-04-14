<script src="//unpkg.com/element-ui@2.7.2/lib/index.js"></script>
<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container flex-row">
          <div class="modal-header">
            <h2 name="header">Preferences</h2>
          </div>
          <div class="modal-body">
            <md-steppers v-if="!completedPreferences" :md-active-step.sync="active" md-linear>
              <md-step id="first" :md-done.sync="first">
                <div class="item-spacing">
                  Let’s get you set up.
                  <p>We’ll ask for some quick questions so we can ensure we are scheduling meetings at a time that makes you the most productive you can be.</p>
                </div>
                <md-button class="md-raised md-primary" @click="setDone('first', 'second')">Continue</md-button>
              </md-step>
              <md-step id="second" :md-done.sync="second">
                <div class="item-spacing">
                  <h4>What are your core working hours?</h4>
                  <el-time-select
                    placeholder="Start time"
                    v-model="startTime"
                    :picker-options="{
      step: '00:15'
    }"
                  ></el-time-select>
                  <el-time-select
                    placeholder="End time"
                    v-model="endTime"
                    :picker-options="{
      step: '00:15',
      minTime: startTime
    }"
                  ></el-time-select>
                                    We’ll avoid scheduling meetings outside of these hours altogether.

                </div>
                <md-button class="md-raised md-primary" @click="setDone('second', 'third')">Continue</md-button>
              </md-step>
              <md-step id="third" :md-done.sync="third">
                <div class="item-spacing">
                  <h4>Do you prefer to cluster your meetings together, or spread them out over the week?</h4>
                  <md-radio v-model="radio" name="onboardPrefClustered" value="clustered">Clustered</md-radio>
                  <md-radio v-model="radio" name="onboardPrefBuffered" value="buffered">Buffered</md-radio>
                  <div v-if="radio === 'buffered'">
                    <md-field>
                      <label>Minute Intervals</label>
                      <md-select v-model="bufferedIntervals">
                        How would you like to space out between your meetings? 
                        <md-option value="15">15 Min</md-option>
                        <md-option value="30">30 Min</md-option>
                        <md-option value="45">45 Min</md-option>
                        <md-option value="60">1 Hr</md-option>
                        <md-option value="75">1 Hr 15 Min</md-option>
                        <md-option value="90">1 Hr 30 Min</md-option>
                        <md-option value="105">1 Hr 45 Min</md-option>
                        <md-option value="120">2 Hr</md-option>
                      </md-select>
                    </md-field>
                  </div>
                </div>
                <md-button class="md-raised md-primary" @click="setDone('third', 'forth')">Continue</md-button>
              </md-step>
              <md-step id="forth" :md-done.sync="forth">
                <div class="item-spacing">
                  <h4>What days of the week are you most available for meetings?</h4>
                  <md-field>
                    <label>Select your day...</label>
                    <md-select v-model="selectedPreferredDay" multiple>
                      <md-option value="1">Monday</md-option>
                      <md-option value="2">Tuesday</md-option>
                      <md-option value="3">Wednesday</md-option>
                      <md-option value="4">Thursday</md-option>
                      <md-option value="5">Friday</md-option>
                      <md-option value="6">Saturday</md-option>
                      <md-option value="7">Sunday</md-option>
                    </md-select>
                    We’ll try our best to schedule  meetings in these days for you. 
                  </md-field>
                </div>
                <md-button class="md-raised md-primary" @click="setDone('forth', 'fifth')">Continue</md-button>
              </md-step>
              <md-step id="fifth" :md-done.sync="fifth">
                <div class="item-spacing">
                  <h4>What days are you the least available for meetings?</h4>
                  <md-field>
                    <label>Select your day...</label>
                    <md-select v-model="selectedAvoidDay" multiple>
                      <md-option value="1">Monday</md-option>
                      <md-option value="2">Tuesday</md-option>
                      <md-option value="3">Wednesday</md-option>
                      <md-option value="4">Thursday</md-option>
                      <md-option value="5">Friday</md-option>
                      <md-option value="6">Saturday</md-option>
                      <md-option value="7">Sunday</md-option>
                    </md-select>
                    We’ll try our best to avoid scheduling meetings in these days for you.
                  </md-field>
                </div>
                <md-button class="md-raised md-primary" @click="setDone('fifth', 'sixth')">Continue</md-button>
              </md-step>
              <md-step id="sixth" :md-done.sync="sixth">
                <div class="item-spacing" required>
                  <h4>Do you have a preference if your meetings are in the morning, or afternoon?</h4>
                  <md-radio
                    v-model="radio"
                    name="onboardPrefMorningAfternoon"
                    value="morning"
                  >Morning</md-radio>
                  <md-radio
                    v-model="radio"
                    name="onboardPrefMorningAfternoon"
                    value="afternoon"
                  >Afternoon</md-radio>
                </div>
                <md-button class="md-raised md-primary" @click="setComplete()">Done</md-button>
              </md-step>
            </md-steppers>
          </div>
          <div v-if="completedPreferences" class="modal-footer">
            <md-button class="md-dense md-raised md-primary margin-reset" @click="$emit('close')">OK</md-button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>


<script>
import Vue from "vue";
import elementUI from "element-ui";
Vue.use(elementUI);

export default {
  name: "Modal",
  props: {},
  methods: {
    close() {
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
    sixth: false
  }),
  computed: {
    onboardAvoidDay: {
      get() {
        return this.$material.locale.onboardAvoidDay;
      },
      set(val) {
        this.$material.locale.onboardAvoidDay = val;
      }
    },
    onboardPreferredDay: {
      get() {
        return this.$material.locale.onboardPreferredDay;
      },
      set(val) {
        this.$material.locale.onboardPreferredDay = val;
      }
    },
    bufferedIntervals: {
      get() {
        return this.$material.locale.bufferedIntervals;
      },
      set(val) {
        this.$material.locale.bufferedIntervals = val;
      }
    }
  }
};
</script>

<style scoped>
@import url("//unpkg.com/element-ui@2.7.2/lib/theme-chalk/index.css");

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
  width: 560px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
  text-align: left !important;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 24px 0;
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
  margin-top: 16px;
  margin-bottom: 16px;
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