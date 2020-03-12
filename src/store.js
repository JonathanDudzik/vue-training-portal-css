import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // Course state
    courseName: 'Basic Course Example',
    viewComponentList: ['MainHeader'],
    iconReference: {
      arrow: 'sprite.svg#icon-new',
      check: 'sprite.svg#icon-check',
    },
    
    // Lesson state
    lessonTemplate: [
      {
        title: "Searching for Sasquatches",
        index: 1,
        partArray: [
          {
            partName: "Listen",
            partComponentList: ['MainHeader','Listen'],
            complete: true
          },
          {
            partName: "Listen II",
            partComponentList: ['Listen', 'MainHeader'],
            complete: false
          }
        ]
      },
      {
        title: "The Shooting of Ginger Goodwin",
        index: 2,
        partArray: [
          {
            partName: "Read",
            partComponentList: ['Read'],
            complete: true
          },
          {
            partName: "Read II",
            partComponentList: ['Read'],
            complete: false
          }
        ]
      },
      {
        title: "The Gentleman Bandit",
        index: 3,
        partArray: [
          {
            partName: "Listen and Read",
            partComponentList: ['Read', 'Listen'],
            complete: false
          },
          {
            partName: "Activity",
            partComponentList: ['Read', 'Listen'],
            complete: false
          },
          {
            partName: "Resources",
            partComponentList: ['Read','Interactive'],
            complete: false
          }
        ]
      },
    ]
  }
})
