<template>
  <div>
    <h1 class="is-size-1" @click="checkDb">ONE</h1>
    <NavFooter  
      :nextContentIdentifier="contentProps[1].identifier"
      :nextContentSelector="contentProps[1].contentSelector"
    ></NavFooter>
  </div>
</template>

<script>
import NavFooter from '@/components/NavFooter'
// import axios like dynamodb
import calls from '@/services/AxiosCalls'
import db from '@/services/DynamoDbInit'

export default {
  components: {
    NavFooter
  },
  data( ) {
    return {
      testData: [],
      params: {
        TableName : "",
        KeySchema: [
            { AttributeName: "year", KeyType: "HASH"},
            { AttributeName: "title", KeyType: "RANGE" }
        ],
        AttributeDefinitions: [
            { AttributeName: "year", AttributeType: "N" },
            { AttributeName: "title", AttributeType: "S" }
        ],
        ProvisionedThroughput: {
            ReadCapacityUnits: 5,
            WriteCapacityUnits: 5
        }
      }
    }  
  },
  created() {
    db.createTable(this.params, function(err, data) {
        if (err) {
            console.log("Unable to create table: " + "\n" + JSON.stringify(err, undefined, 2));
        } else {
            console.log("Created table: " + "\n" + JSON.stringify(data, undefined, 2));
        }
    })
  },
  computed: {
    contentProps() {
      return this.$store.state.navMenuInfo
    }
  },
  methods: {
    checkDb() {
      console.log(db)
    }
  }
}
</script>

<style lang="scss">

</style>