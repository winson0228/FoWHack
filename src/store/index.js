    
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      events: [
        {
          content: "",
          duration: 30,
          end: "2019-04-08 9:30",
          priority: 0,
          rangeEnd: "2019-04-12",
          rangeStart: "2019-04-08",
          start: "2019-04-08 9:00",
          title: "Marketplace Weekly",
          class: "sport"
        },
        {
          content: "",
          duration: 30,
          end: "2019-04-08 10:30",
          priority: 0,
          rangeEnd: "2019-04-08",
          rangeStart: "2019-04-08",
          start: "2019-04-08 10:00",
          title: "Graph Daily",
          class: "sport"
        },
        {
          content: "",
          duration: 60,
          end: "2019-04-08 12:00",
          priority: 0,
          rangeEnd: "2019-04-12",
          rangeStart: "2019-04-08",
          start: "2019-04-08 11:00",
          title: "Talent Opt",
          class: "sport"
        },
        {
          content: "",
          duration: 30,
          end: "2019-04-08 13:30",
          priority: 0,
          rangeEnd: "2019-04-12",
          rangeStart: "2019-04-08",
          start: "2019-04-08 13:00",
          title: "Planned Meeting",
          class: "sport"
        },
        {
          content: "",
          duration: 120,
          end: "2019-04-08 16:30",
          priority: 0,
          rangeEnd: "2019-04-12",
          rangeStart: "2019-04-08",
          start: "2019-04-08 14:30",
          title: "Engineering Quarterly Meeting",
          class: "sport"
        },
        {
          content: "",
          duration: 60,
          end: "2019-04-08 12:30",
          priority: 0,
          rangeEnd: "",
          rangeStart: "",
          start: "2019-04-08 12:00",
          title: "Lunch",
          class: "leisure"
        }
      ]
    },
    mutations: {
      addEvent(state, event) {
        console.log("Adding new event.");
        console.log(event);
        state.events.push(event);
      }
    },
    getters: {
      events: state => {
        return state.events;
      }
    }
  })