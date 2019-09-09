import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navMenuInfo: [
      {
        identifier: "Slide 1",
        contentSelector: "ContentOne",
      },
      {
        identifier: "Slide 2",
        contentSelector: "ContentTwo",
      },
      {
        identifier: "Slide 3",
        contentSelector: "ContentThree",
      },
    ],
    selectedContent: "ContentOne",
    mainMenuOpen: true,

  },
  mutations: {
    "selectFromStore"(state, e) {
      state.selectedContent = e;
    }
  }
})
