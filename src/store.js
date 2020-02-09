import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    courseName: "Basic Course Example",
    selectedSection: undefined,
    selectedMedium: undefined,
    selectedModal: undefined,
    showMediumModal: false, // Default/starting state of showMediumModal MUST be false
  }
})
