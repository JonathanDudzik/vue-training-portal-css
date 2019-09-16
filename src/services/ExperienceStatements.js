import store from '@/store.js'
import uuidGen from 'uuid/v1'

const statementId = uuidGen()
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
      "id": "http://example.com/course/" + statementId,
      "definition": {
        "name": { "en-US": store.state.selectedContent }
      }
    }
  }

  export default {
      experienced,
      statementId
  }