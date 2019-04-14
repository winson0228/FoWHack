<template>
  <div>
    <md-card class="analysis">
      <md-card-header>
        <div class="md-title">Time Analysis</div>
      </md-card-header>
      <md-card-content>
        <div class="pad">
          {{ effectiveMinsMessage }} of Effective Work
          <md-progress-bar
            class="md-primary"
            md-mode="determinate"
            :md-value="results.effectivePercent"
          ></md-progress-bar>
        </div>
        <div class="pad">
          {{ wastedMinsMessage }} of Interrupted Work
          <md-progress-bar
            class="md-accent"
            md-mode="determinate"
            :md-value="results.wastedPercent"
          ></md-progress-bar>
        </div>
        <div class="pad">
          {{ meetingMinsMessage }} of Meetings
          <md-progress-bar class="md-warn" md-mode="determinate" :md-value="results.meetingPercent"></md-progress-bar>
        </div>
      </md-card-content>
      <md-card-actions>
        <md-button @click="optimize">Optimize</md-button>
      </md-card-actions>
    </md-card>
    <div class="schedule">
      <vue-cal
        :hide-view-selector="true"
        :hide-weekends="true"
        :editable-events="false"
        :events="events"
        :time-from="8 * 60"
        :time-to="19*60"
        style="height: 600px"
      ></vue-cal>
    </div>
  </div>
</template>

<script>
import VueCal from "vue-cal";
import "vue-cal/dist/vuecal.css";
import store from "../store";
import Moment from "moment";

export default {
  name: "Schedule",
  components: {
    "vue-cal": VueCal
  },
  computed: {
    wastedMinsMessage() {
      if (this.results.wastedMins > 0) {
        return Moment.duration(this.results.wastedMins, "minutes").humanize();
      }
      return "No minutes";
    },
    effectiveMinsMessage() {
      if (this.results.effectiveMins > 0) {
        return Moment.duration(
          this.results.effectiveMins,
          "minutes"
        ).humanize();
      }
      return "No minutes";
    },
    meetingMinsMessage() {
      if (this.results.meetingMins) {
        return Moment.duration(this.results.meetingMins, "minutes").humanize();
      }
      return "No minutes";
    }
  },
  data: () => ({
    events: [],
    results: {
      effectiveMins: 0,
      wastedMins: 0,
      meetingMins: 0,
      effectivePercent: 0,
      wastedPercent: 0,
      meetingPercent: 0
    },
    resultPercentages: {}
  }),
  mounted() {
    this.events = store.getters.events;
       store.watch((state) => state.events, ([val, obs]) => {
        //    this.events = val;
        console.log(val);
            this.optimize();
       });
    store.watch(
      () => store.getters.events,
      val => {
        console.log(val);
        this.events = val;
      }
    );
    this.displayResults();
  },
  methods: {
    optimize() {
      console.log("optimize");
      this.schedule(this.events);
      this.displayResults();
    },
    displayResults() {
      this.results = this.calculateEffectiveHours(this.events);
    },
    calculateEffectiveHours(events) {
      let bins = {};
      let results = {
        effectiveMins: 0,
        wastedMins: 0,
        meetingMins: 0
      };
      events.forEach(event => {
        let key = new Moment(event.start).format("YYYY-MM-DD");
        if (!(key in bins)) {
          bins[key] = [
            {
              start: key + " 9:00",
              end: key + " 9:00"
            },
            {
              start: key + " 17:00",
              end: key + " 17:00"
            }
          ];
        }
        bins[key].push(event);
      });
      for (let key of Object.keys(bins)) {
        bins[key] = bins[key].sort((a, b) => {
          return (
            new Moment(a.start).format("X") - new Moment(b.start).format("X")
          );
        });

        let endTime = null;
        for (let event of bins[key]) {
          if (endTime) {
            results.meetingMins += Moment.duration(
              new Moment(event.end).diff(new Moment(event.start))
            ).asMinutes();
            let workMins = Moment.duration(
              new Moment(event.start).diff(endTime)
            ).asMinutes();
            if (workMins > 90) {
              results.effectiveMins += workMins;
            } else {
              results.wastedMins += workMins;
            }
          }
          endTime = new Moment(event.end);
        }
      }
      let total =
        results.meetingMins + results.wastedMins + results.effectiveMins;

      results.effectivePercent = (results.effectiveMins / total) * 100;
      results.wastedPercent = (results.wastedMins / total) * 100;
      results.meetingPercent = (results.meetingMins / total) * 100;

      return results;
    },
    schedule(events) {
      let bins = {};
      events.forEach(event => {
        let key = new Moment(event.start).format("YYYY-MM-DD");
        if (event.rangeStart != "") {
          let rangeStart = new Moment(event.rangeStart);
          let rangeEnd = new Moment(event.rangeEnd);
          let diff = Moment.duration(rangeEnd.diff(rangeStart)).asDays();
          let random = Math.floor(Math.random() * (diff - 0 + 1));
          key = rangeStart.add(random, "days").format("YYYY-MM-DD");
        }

        if (!(key in bins)) {
          bins[key] = [
            {
              start: key + " 9:00",
              end: key + " 9:00"
            },
            {
              start: key + " 17:00",
              end: key + " 17:00"
            }
          ];
        }
        bins[key].push(event);
      });

      let interval = 5;
      for (let key of Object.keys(bins)) {
          let preschedule = bins[key].filter(event => !event.rangeStart);
          let schedule = bins[key].filter(event => !!event.rangeStart);

        preschedule = preschedule.sort((a, b) => {
          return (
            new Moment(a.start).format("X") - new Moment(b.start).format("X")
          );
        });

        let i = 0;
        let j = 0;
        let prevEnd = new Moment(preschedule[i].end);

        while( i < preschedule.length && j < schedule.length) {
            let preEvent = preschedule[i];
            let event = schedule[j];
            let preStartTime = new Moment(preEvent.start);
            let startTime = prevEnd.clone().add(interval, "minutes");
            console.log(event.duration);
            let endTime = startTime.clone().add(event.duration, "minutes");
            console.log(startTime.format("YYYY-MM-DD HH:mm"));
            console.log(endTime.format("YYYY-MM-DD HH:mm"));

            if (endTime.isBefore(preStartTime)) {
                event.start = startTime.format("YYYY-MM-DD HH:mm");
                event.end = endTime.format("YYYY-MM-DD HH:mm");
                prevEnd = endTime.clone();
                j += 1;
            } else {
                prevEnd = new Moment(preschedule[i].end);
                i += 1;
            }
        }
      }
      console.log(events);
      return events;
    }
  }
};
</script>

<style>
.analysis {
  margin-bottom: 20px;
  padding-right: 100px;
  padding-left: 100px;
}
.pad {
  padding-bottom: 24px;
}

.schedule {
  margin-right: 16px;
  margin-left: 16px;
}

.md-progress-bar.md-theme-default.md-determinate.md-warn {
  background-color: rgba(244, 194, 13, 0.38);
}

.md-progress-bar.md-theme-default.md-determinate.md-warn .md-progress-bar-fill {
  background-color: #f4c20d;
}

.vuecal__cell.selected {
  z-index: 1;
}
.vuecal__event.sport {
  background-color: rgba(255, 102, 102, 0.9);
  border: 1px solid rgb(235, 82, 82);
  color: #fff;
}
.vuecal__event.leisure {
  background-color: rgba(253, 156, 66, 0.9);
  border: 1px solid rgb(233, 136, 46);
  color: #fff;
}
</style>
