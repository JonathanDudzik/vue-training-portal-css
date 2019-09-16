<template>
  <div>
    <h1 class="is-size-1">ONE</h1>
    <NavFooter  
      :nextContentIdentifier="contentProps[1].identifier"
      :nextContentSelector="contentProps[1].contentSelector"
    ></NavFooter>
  </div>
</template>

<script>
import NavFooter from '@/components/NavFooter'
import axios from 'axios'
import RecordService from '@/services/AxiosCalls'
import statements from '@/services/XapiStatements'

export default {
  components: {
    NavFooter
  },
  data( ) {
    return {}  
  },
  created() {
    // axios.get('https://watershedlrs.com/api/organizations/8761/lrs/statements?statementId=dfb7218c-0fc9-4dfc-9524-d497097de027', {
    //   headers: {'X-Experience-API-Version': "1.0.3", 'Content-Type': "application/json"},
    //   auth: {
    //     username: 'f5f895c9c8022d',
    //     password: 'e8d06eb126925e'
    //   },
    // })
    // .then(response => {
    //   console.log(response)
    // })
    axios({
      method: 'put',
      url: 'https://watershedlrs.com/api/organizations/8761/lrs/statements?statementId=' + statements.statementId,
      data: statements.experienced,
      headers: {'X-Experience-API-Version': "1.0.3", 'Content-Type': "application/json"},
      auth: {
        username: 'f5f895c9c8022d',
        password: 'e8d06eb126925e'
      },
    })
      .then(function (response) {
        console.log(response)
      });
  },
  computed: {
    contentProps() {
      return this.$store.state.navMenuInfo
    }
  },
  methods: {}
}
</script>

<style lang="scss">

</style>