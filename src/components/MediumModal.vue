<template>
    <div class='testClass'>
        <p>{{currentModal}}</p>
        <component v-bind:is="currentModal"></component>
        <button @click="closeModal()">CLOSE MODAL</button>
    </div>
</template>

<script>
import CourseTemplate from '../test/CourseTemplate'
// write a function here to load the name of the comonent!
const name = CourseTemplate.pages.Listen

export default {
    components: {
        'Listen': () => import(`../components/${name}.vue`)
    },
    mounted() {
        console.log(CourseTemplate);
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
            return(CourseTemplate.pages[mediumSelector])
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