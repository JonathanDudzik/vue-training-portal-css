import Vue from 'vue'
import Vuex from 'vuex'

// begin importing components used in the Course
import NavBar from "./components/NavBar"
import NavMenu from "./components/NavMenu"
import NavFooter from "./components/NavFooter"
import ContentOne from "./components/ContentOne"
import ContentTwo from "./components/ContentTwo"
import ContentThree from "./components/ContentThree"


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    courseContents: {
      componentObjects: {
        "NavBar": NavBar,
        "NavMenu": NavMenu,
        "NavFooter": NavFooter,
        "ContentOne": ContentOne,
        "ContentTwo": ContentTwo,
        "ContentThree": ContentThree,
      },
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
      ]

    },
    selectedContent: "ContentThree",
    mainMenuOpen: true,

  },
  mutations: {
    toggleMenu (state) {
      state.mainMenuOpen = !state.mainMenuOpen;
    }
    // Alternatively: toggleMenu: state => !mainMenuOpen
  }
})
