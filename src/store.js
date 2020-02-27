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
        media: {
            Listen: {
                name: "Listen",
                icon: "sprite.svg#icon-mic",
                complete: false
            },
            Watch: {
                name: "Watch",
                icon: "sprite.svg#icon-video",
                complete: true
            }
        }
      },
      {
        title: "Title Two",
        discription: "Two",
        index: 2,
        media: {
            Listen: {
                name: "Listen",
                icon: "sprite.svg#icon-mic",
                complete: false
            },
            Read: {
                name: "Read",
                icon: "sprite.svg#icon-open-book",
                complete: false
            }
        }
      },
      {
        title: "",
        discription: "Three",
        index: 3,
        media: {
            Listen: {
                name: "Listen",
                icon: "sprite.svg#icon-mic",
                complete: true
            },
            Watch: {
                name: "Watch",
                icon: "sprite.svg#icon-video",
                complete: true
            },
            Interactive: {
                name: "Interactive",
                icon: "sprite.svg#icon-new",
                complete: false
            }
        }
      },
      {
        title: "",
        discription: "Four",
        index: 4,
        media: {
            Listen: {
                name: "Listen",
                icon: "sprite.svg#icon-open-book",
                complete: false
            },
            Read: {
                name: "Read",
                icon: "sprite.svg#icon-video",
                complete: false
            }
        }
      },
      {
        title: "",
        discription: "Five",
        index: 5,
        media: {
            Listen: {
                name: "Listen",
                icon: "sprite.svg#icon-open-book",
                complete: false
            },
            Read: {
                name: "Read",
                icon: "sprite.svg#icon-video",
                complete: false
            }
        }
      },
      {
        title: "",
        discription: "Six",
        index: 6,
        media: {
            Listen: {
                name: "Listen",
                icon: "sprite.svg#icon-open-book",
                complete: false
            },
            Read: {
                name: "Read",
                icon: "sprite.svg#icon-video",
                complete: false
            }
        }
      },
      {
        title: "",
        discription: "Seven",
        index: 7,
        media: {
            Listen: {
                name: "Listen",
                icon: "sprite.svg#icon-open-book",
                complete: false
            },
            Read: {
                name: "Read",
                icon: "sprite.svg#icon-video",
                complete: false
            }
        }
      },
      {
        title: "",
        discription: "Eight",
        index: 8,
        media: {
            Listen: {
                name: "Listen",
                icon: "sprite.svg#icon-open-book",
                complete: false
            },
            Read: {
                name: "Read",
                icon: "sprite.svg#icon-video",
                complete: false
            }
        }
      },
      {
        title: "",
        discription: "Nine",
        index: 9,
        media: {
            Listen: {
                name: "Listen",
                icon: "sprite.svg#icon-open-book",
                complete: false
            },
            Read: {
                name: "Read",
                icon: "sprite.svg#icon-video",
                complete: false
            }
        }
      }
    ]
  }
})
