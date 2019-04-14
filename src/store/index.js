    
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      events: []
    },
    mutations: {
      addEvent(state, event) {
        console.log("Adding new event.");
        console.log(event);
        state.events.push(event);
      }
    }
  })