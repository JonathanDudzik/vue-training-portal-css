import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navMenuInfo: [
      {
        identifier: "Welcome",
        contentSelector: "ContentOne", //must match name in src/components 
      },
      {
        identifier: "Objectives",
        contentSelector: "ContentTwo",
      },
      {
        identifier: "Regulations",
        contentSelector: "ContentThree",
      },
      {
        identifier: "Exemptions",
        contentSelector: "ContentOne", //must match name in src/components 
      },
      {
        identifier: "Application",
        contentSelector: "ContentTwo",
      },
      {
        identifier: "Income Eligibility",
        contentSelector: "ContentThree",
      },
    ],
    learnerInfo: [
      {
      name: "Default Learner",
      id: "mailto:default@learner.com",
      }
    ],
    shortCourseName: "Child Eligiblity Training",
    shortSectionName: "Welcome",
    selectedContent: "ContentOne",
    mainMenuOpen: true,

  },
  mutations: {
    "selectFromStore"(state, e) {
      state.selectedContent = e;
    }
  }
})
