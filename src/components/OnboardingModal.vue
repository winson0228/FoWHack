<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container flex-row">

          <div class="modal-header">
            <h2 name="header">
              Preferences
            </h2>
          </div>

          <div class="modal-body">
            <div class="item-spacing">Select your time zone and working hours.
              <md-field>
                <label>Select your day...</label>
                <md-select v-model="onboardAvoidDay">
                  <md-option value="1">Monday</md-option>
                  <md-option value="2">Tuesday</md-option>
                  <md-option value="3">Wednesday</md-option>
                  <md-option value="4">Thursday</md-option>
                  <md-option value="5">Friday</md-option>
                  <md-option value="6">Saturday</md-option>
                  <md-option value="7">Sunday</md-option>
                </md-select>
              </md-field>
            </div>
            <div class="item-spacing">Would you like your meetings to be clustered together or buffered?
              <md-radio v-model="radio" name="onboardPrefClustered" value="clustered">Clustered</md-radio>
              <md-radio v-model="radio" name="onboardPrefBuffered" value="buffered">Buffered</md-radio>
              <div v-if="radio === 'buffered'">
                <md-field>
                  <label>Minute Intervals</label>
                  <md-select v-model="bufferedIntervals">
                    <md-option value="5">15 minutes</md-option>
                    <md-option value="10">Tuesday</md-option>
                    <md-option value="15">Wednesday</md-option>
                    <md-option value="20">Thursday</md-option>
                    <md-option value="25">Friday</md-option>
                    <md-option value="30">Saturday</md-option>
                    <md-option value="35">Sunday</md-option>
                    <md-option value="40">Sunday</md-option>
                    <md-option value="45">Sunday</md-option>
                    <md-option value="50">Sunday</md-option>
                    <md-option value="55">Sunday</md-option>
                  </md-select>
                </md-field>
              </div>
            </div>
            <div class="item-spacing">What would be the day(s) that you would want to avoid having meetings?
              <md-field>
                <label>Select your day...</label>
                <md-select v-model="onboardAvoidDay">
                  <md-option value="1">Monday</md-option>
                  <md-option value="2">Tuesday</md-option>
                  <md-option value="3">Wednesday</md-option>
                  <md-option value="4">Thursday</md-option>
                  <md-option value="5">Friday</md-option>
                  <md-option value="6">Saturday</md-option>
                  <md-option value="7">Sunday</md-option>
                </md-select>
              </md-field>
            </div>
            <div class="item-spacing">What would be the day(s) that you are most likely available for meetings?
              <md-field>
                <label>Select your day...</label>
                <md-select v-model="onboardPreferredDay">
                  <md-option value="1">Monday</md-option>
                  <md-option value="2">Tuesday</md-option>
                  <md-option value="3">Wednesday</md-option>
                  <md-option value="4">Thursday</md-option>
                  <md-option value="5">Friday</md-option>
                  <md-option value="6">Saturday</md-option>
                  <md-option value="7">Sunday</md-option>
                </md-select>
              </md-field>
            </div>
            <div class="item-spacing" required>
              Do you prefer your meetings in the morning or afternoon?
              <md-radio v-model="radio" name="onboardPrefMorningAfternoon" value="morning">Morning</md-radio>
              <md-radio v-model="radio" name="onboardPrefMorningAfternoon" value="afternoon">Afternoon</md-radio>
            </div>
          </div>

          <div class="modal-footer">
              <md-button class="md-dense md-raised md-primary margin-reset" @click="$emit('close')">
                OK
              </md-button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>


<script>
export default {
  name: 'Modal',
  props: {
  },
  methods: {
    close() {
      this.$emit('close');
    }
  },
  data: () => ({
      radio: false
  }),
  computed: {
      onboardAvoidDay: {
        get () {
          return this.$material.locale.onboardAvoidDay
        },
        set (val) {
          this.$material.locale.onboardAvoidDay = val
        }
      },
      onboardPreferredDay: {
        get () {
          return this.$material.locale.onboardPreferredDay
        },
        set (val) {
          this.$material.locale.onboardPreferredDay = val
        }
      },
      bufferedIntervals: {
        get () {
          return this.$material.locale.bufferedIntervals
        },
        set (val) {
          this.$material.locale.bufferedIntervals = val
        }
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
  width: 500px;
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