import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shortCourseName: "Child Eligiblity Training",
    currentRoute: '',
    nextRoute: '',
    prevRoute: '',
    activeMenuLink: '',
    showHelpModal: false,
  },
  mutations: {
    changeCurrentRoute (state, value) {
      state.currentRoute = value
    },
    changeNextRoute (state, value) {
      state.nextRoute = value
    },
    changePrevRoute (state, value) {
      state.prevRoute = value
    },
    changeActiveMenuLink (state, value) {
      state.activeMenuLink = value
    },
    changeShowHelpModal (state, value) {
      state.showHelpModal = value
    }
  }
})
