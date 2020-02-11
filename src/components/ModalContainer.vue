<template>
    <div class='testClass'>
        <component v-bind:is="currentModal"/>
        <button @click="closeModal()">CLOSE MODAL</button>
    </div>
</template>

<script>
import Help from '@/components/modal-views/Help'
import Settings from '@/components/modal-views/Settings'
import Listen from '@/components/modal-views/Listen'
import Watch from '@/components/modal-views/Watch'
import Read from '@/components/modal-views/Read'
import Interactive from '@/components/modal-views/Interactive'

export default {
    // The below function must iterate through course template mapping array of all media component names to work with
    // components: Object.keys(CourseTemplate[0].media).reduce((accumulator, currentVal) => { return Object.assign(accumulator, { [currentVal]: () => import(`../components/${currentVal}.vue`) }) }, {}),
    components: {
        "Settings": Settings,
        "Help": Help,
        "Listen": Listen,
        "Watch": Watch,
        "Read": Read,
        "Interactive": Interactive,
    },
    computed: {
        currentModal: function() {
            return(this.$store.state.selectedModal.toString())
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