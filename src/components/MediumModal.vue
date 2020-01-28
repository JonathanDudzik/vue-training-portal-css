<template>
    <div class='testClass'>
        <p>{{currentModal}}</p>
        <component v-bind:is="currentModal"></component>
        <button @click="closeModal()">CLOSE MODAL</button>
    </div>
</template>

<script>
import CourseTemplate from '../test/CourseTemplate'

export default {
    components: Object.keys(CourseTemplate.pages).reduce((accumulator, currentVal) => { return Object.assign(accumulator, { [currentVal]: () => import(`../components/${currentVal}.vue`) }) }, {}),
    mounted() {
        console.log(this.$options.components)
        // const testObject = {   
        //     components: 
        //     Object.keys(CourseTemplate.pages)
        //     .reduce(
        //         // Begin callback function
        //         (accumulator, currentVal) => { return Object.assign(accumulator, { [currentVal]: () => import(CourseTemplate.pages[currentVal]) }) },
        //         // Begin initial value
        //         {}
        //     )
        // }
        // console.log(testObject)
    },
    data() {
        return {
        CourseTemplate: CourseTemplate
        }
    },
    computed: {
        // Grab the right medium to render in the modal. This function must know the state of the current section. It then must know the state of the curren medium 
        currentModal: function() {
            const sectionSelector = this.$store.state.selectedSection
            const mediumSelector = this.$store.state.selectedMedium
            return(CourseTemplate.pages[mediumSelector].toString())
        }
    },
    methods: {
        closeModal() {
            this.$store.state.showMediumModal = false
        }
    }
}
</script>

<style>
.testClass {
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: aquamarine;
    height: 30%;
    width: 30%;
}
</style>