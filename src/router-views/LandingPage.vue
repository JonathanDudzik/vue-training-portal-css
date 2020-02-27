<template>
  <section>
    <!-- Begin Vue transition wrapper component  -->
    <transition name="fade" mode="out-in">
      <!-- Begin modal component -->
      <ModalContainer v-if="$store.state.showModal === true"/>
      <!-- End modal component -->

      <!-- Begin Main page -->
      <main class="landing-page-container" v-if="$store.state.showModal === false">
        <HeaderContainer/>
        <StateDisplay/>
        <ContentSelector
          class="card"
          v-bind:class="'card' + '-' + section.index"
          v-for="section in $store.state.courseTemplate"
          v-bind:currentSection="section"
          v-bind:key="section.index">
        </ContentSelector>
      </main>
      <!-- End Main page -->

    </transition>
    <!-- End Vue transition wrapper component  -->

  </section>
</template>

<script>
import ModalContainer from '@/components/ModalContainer'
import HeaderContainer from '@/components/HeaderContainer'
import StateDisplay from '@/components/StateDisplay'
import ContentSelector from '@/components/ContentSelector'

export default {
  components: {
    "ModalContainer": ModalContainer,
    "HeaderContainer": HeaderContainer,
    "StateDisplay": StateDisplay,
    "ContentSelector": ContentSelector,
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.landing-page-container {
  /* background-color: #eee; */
  width: 90vw;
  padding: 1.5rem;
  margin: 3rem auto;  
  
  /* grid styles */
  display: grid;
  grid-template-rows: 1fr;
  grid-auto-rows: 22rem;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-row-gap: 3rem;
  grid-column-gap: 3rem;
}
</style>