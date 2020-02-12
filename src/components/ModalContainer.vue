<template>
    <div class="background">
        <component v-bind:is="currentModal"/>
        <button ref="closeModal" @click="closeModal()">CLOSE MODAL</button>
        <button @click="editPoints()">Add one point</button>
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
        },
        dynamicWatched() {
            return this.$store.state.currentPoints
        }
    },
    watch: {
        dynamicWatched() {
            console.log(`Hey! you have ${this.$store.state.currentPoints} points!!`)
        }
    },
    methods: {
        closeModal() {
            this.$store.state.showMediumModal = false
        },
        editPoints(){
            this.$store.state.currentPoints += 1
        }
    },
    mounted(){
        const { closeModal } = this.$refs
        const timeline = new TimelineLite()
        timeline.from(closeModal, 1, { scale: .0, rotation: 90 })
    }
}
</script>

<style>

    .background{
        background-color: rgba(189,115,115,1);
        height: 100%;
        width: 100%;
        z-index: 1000;

        /* grid item styles */
        grid-row: 1 / -1;
        grid-column: 1 / -1;

    }
</style>