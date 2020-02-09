<template>
    <section>
      <div>
        <ul>
            <h1>I am the {{ currentSection.name }} section!</h1>
            <div v-for="(mediaOption, index) in currentSection.media" v-bind:key="index">
                <button @click="mediumSelector(mediaOption)">{{ mediaOption }} in the {{ currentSection.name }} section</button>
            </div>
        </ul>
      </div>
    </section>
</template>

<script>
export default {
    props: {
        'currentSection': Object
    },
    data() {
        return {
            CourseTemplate: this.$CourseTemplate
        }
    },
    methods: {
        mediumSelector(medium) {
            this.$store.state.selectedModal = this.currentSection.media[medium]
            this.$store.state.showMediumModal = true
            console.log(this.$store.state.selectedModal)
        }
    }
} 
</script>