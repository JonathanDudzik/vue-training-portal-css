import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    courseName: "Basic Course Example",
    selectedModal: undefined,
    showModal: false, // Default/starting state of showMediumModal MUST be false
    currentPoints: 0,
    courseTemplate: [
      {
        title: "Title One",
        discription: "one",
        index: 1,
        media: [
          {
              name: "Listen",
              icon: "sprite.svg#icon-mic",
              complete: false
          },
          {
              name: "Watch",
              icon: "sprite.svg#icon-video",
              complete: true
          }
        ]
      },
      {
        title: "Title Two",
        discription: "Two",
        index: 2,
        media: [
          {
              name: "Listen",
              icon: "sprite.svg#icon-mic",
              complete: false
          },
          {
              name: "Read",
              icon: "sprite.svg#icon-open-book",
              complete: false
          }
        ]
      },
      {
        title: "",
        discription: "Three",
        index: 3,
        media: [
          {
            name: "Listen",
            icon: "sprite.svg#icon-mic",
            complete: true
          },
          {
            name: "Watch",
            icon: "sprite.svg#icon-video",
            complete: true
          },
          {
            name: "Interactive",
            icon: "sprite.svg#icon-new",
            complete: false
          }
        ]
      },
    ]
  }
})
