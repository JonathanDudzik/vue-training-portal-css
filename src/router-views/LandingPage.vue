<template>
  <section>
    <div class="landing-page-container">
      <transition name="fade">
        <ModalContainer v-if="$store.state.showMediumModal === true"/>
      </transition>
      <HeaderContainer/>
      <StateDisplay/>
      <ContentMenu/>
    </div>
  </section>
</template>

<script>
import ModalContainer from '@/components/ModalContainer'
import HeaderContainer from '@/components/HeaderContainer'
import StateDisplay from '@/components/StateDisplay'
import ContentMenu from '@/components/ContentMenu'

export default {
  components: {
    "ModalContainer": ModalContainer,
    "HeaderContainer": HeaderContainer,
    "StateDisplay": StateDisplay,
    "ContentMenu": ContentMenu
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
    background-color: #eee;
    width: 85vw;
    margin: 5vh auto;
    
    /* grid styles */
    display: grid;
    grid-template-rows: 1fr 7fr;
    grid-template-columns: 3fr 1fr;
    grid-row-gap: 20px;
    grid-column-gap: 20px;
  }

</style>