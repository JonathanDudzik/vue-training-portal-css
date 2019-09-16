import store from '@/store.js'

const statementId = 'dfb7218c-0fc9-4dfc-9524-d497097de023'
const experienced = {
    "id": statementId,
    "actor": {
      "name": store.state.learnerInfo[0].name, // <-- from store.js
      "mbox": store.state.learnerInfo[0].id // <-- from store.js
    },
    "verb": {
      "id": "http://adlnet.gov/expapi/verbs/experienced",
      "display": { "en-US": "experienced" }
    },
    "object": {
      "id": "http://example.com/course/solo-hang-gliding",
      "definition": {
        "name": { "en-US": "Solo Hang Gliding" }
      }
    }
  }

  export default {
      experienced,
      statementId
  }