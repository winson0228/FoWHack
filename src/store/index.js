    
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
          duration: 30,
          end: "2019-04-09 10:30",
          priority: 0,
          rangeEnd: "2019-04-09",
          rangeStart: "2019-04-09",
          start: "2019-04-09 10:00",
          title: "Graph Daily",
          class: "sport"
        },
        {
          content: "",
          duration: 30,
          end: "2019-04-10 10:30",
          priority: 0,
          rangeEnd: "2019-04-10",
          rangeStart: "2019-04-10",
          start: "2019-04-10 10:00",
          title: "Graph Daily",
          class: "sport"
        },
        {
          content: "",
          duration: 30,
          end: "2019-04-11 10:30",
          priority: 0,
          rangeEnd: "2019-04-11",
          rangeStart: "2019-04-11",
          start: "2019-04-11 10:00",
          title: "Graph Daily",
          class: "sport"
        },
        {
          content: "",
          duration: 30,
          end: "2019-04-12 10:30",
          priority: 0,
          rangeEnd: "2019-04-12",
          rangeStart: "2019-04-12",
          start: "2019-04-12 10:00",
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
        },
        {
          content: "",
          duration: 60,
          end: "2019-04-09 12:00",
          priority: 0,
          rangeEnd: "",
          rangeStart: "",
          start: "2019-04-09 11:30",
          title: "Lunch",
          class: "leisure"
        },
        {
          content: "",
          duration: 60,
          end: "2019-04-10 12:30",
          priority: 0,
          rangeEnd: "",
          rangeStart: "",
          start: "2019-04-10 12:00",
          title: "Lunch",
          class: "leisure"
        },
        {
          content: "",
          duration: 60,
          end: "2019-04-11 13:30",
          priority: 0,
          rangeEnd: "",
          rangeStart: "",
          start: "2019-04-11 13:00",
          title: "Lunch",
          class: "leisure"
        },
        {
          content: "",
          duration: 60,
          end: "2019-04-12 13:00",
          priority: 0,
          rangeEnd: "",
          rangeStart: "",
          start: "2019-04-12 12:30",
          title: "Lunch",
          class: "leisure"
        },
        {
          content: "",
          duration: 30,
          end: "2019-04-09 9:30",
          priority: 0,
          rangeEnd: "2019-04-09",
          rangeStart: "2019-04-09",
          start: "2019-04-09 9:00",
          title: "Marketplace Daily",
          class: "sport"
        },
        {
          content: "",
          duration: 30,
          end: "2019-04-10 9:30",
          priority: 0,
          rangeEnd: "2019-04-10",
          rangeStart: "2019-04-10",
          start: "2019-04-10 9:00",
          title: "Marketplace Daily",
          class: "sport"
        },
        {
          content: "",
          duration: 30,
          end: "2019-04-11 9:30",
          priority: 0,
          rangeEnd: "2019-04-11",
          rangeStart: "2019-04-11",
          start: "2019-04-11 9:00",
          title: "Marketplace Daily",
          class: "sport"
        },
        {
          content: "",
          duration: 30,
          end: "2019-04-12 9:30",
          priority: 0,
          rangeEnd: "2019-04-12",
          rangeStart: "2019-04-12",
          start: "2019-04-12 9:00",
          title: "Marketplace Daily",
          class: "sport"
        },
        {
          content: "",
          duration: 30,
          end: "2019-04-10 14:00",
          priority: 0,
          rangeEnd: "2019-04-08",
          rangeStart: "2019-04-12",
          start: "2019-04-10 13:30",
          title: "API Discussion",
          class: "sport"
        },
        {
          content: "",
          duration: 60,
          end: "2019-04-11 13:00",
          priority: 0,
          rangeEnd: "2019-04-08",
          rangeStart: "2019-04-12",
          start: "2019-04-11 12:00",
          title: "1x1 Placeholder",
          class: "sport"
        },
        {
          content: "",
          duration: 30,
          end: "2019-04-11 16:30",
          priority: 0,
          rangeEnd: "2019-04-08",
          rangeStart: "2019-04-12",
          start: "2019-04-11 15:30",
          title: "ML Talent Weekly",
          class: "sport"
        },
        {
          content: "",
          duration: 30,
          end: "2019-04-12 11:00",
          priority: 0,
          rangeEnd: "2019-04-08",
          rangeStart: "2019-04-12",
          start: "2019-04-12 10:30",
          title: "ML Bi-Weekly",
          class: "sport"
        },
        {
          content: "",
          duration: 30,
          end: "2019-04-12 12:30",
          priority: 0,
          rangeEnd: "2019-04-08",
          rangeStart: "2019-04-12",
          start: "2019-04-12 11:00",
          title: "1x1 with Aleksiy",
          class: "sport"
        },
        {
          content: "",
          duration: 30,
          end: "2019-04-12 14:00",
          priority: 0,
          rangeEnd: "2019-04-08",
          rangeStart: "2019-04-12",
          start: "2019-04-12 13:00",
          title: "Skills API Discussion",
          class: "sport"
        },
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