<template>
    <div class="grid container-two">
    <section v-bind:style="{backgroundColor: currentSection.color}">
        <h1>{{ currentSection.name }} {{ currentSection.index }}</h1>
        <div v-for="(mediaOption, index) in currentSection.media" v-bind:key="index">
            <button @click="mediumSelector(mediaOption)">{{ mediaOption }}</button>
        </div>
    </section>
    </div>
</template>

<script>
export default {
    props: {
        'currentSection': Object
    },
    methods: {
        mediumSelector(medium) {
            this.$store.state.selectedModal = this.currentSection.media[medium]
            this.$store.state.showMediumModal = true
        }
    }
} 
</script>


<style scoped>

    .card {
        border-radius: 5px;
        height: 15rem;
        width: 15rem;
    }

    .card-One {

    }
    .card-Two {
       
    }
    .card-Three {
       
    }
    .card-Four {
       
    }
    .card-Five {
       
    }
    .card-Six {
       
    }

</style>>