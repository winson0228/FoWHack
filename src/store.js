    
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default store = new Vuex.Store({
    state: {
      events: []
    },
    mutations: {
      addEvent(state, event) {
        state.events.push(event);
      }
    }
  })