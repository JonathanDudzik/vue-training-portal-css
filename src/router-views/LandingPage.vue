<template>
  <section>
    <div class="landing-page-container">
      <HeaderContainer/>
      <ModalContainer v-if="$store.state.showMediumModal === true"/>
      <ContentMenu/>
    </div>
  </section>
</template>

<script>
import HeaderContainer from '@/components/HeaderContainer'
import ModalContainer from '@/components/ModalContainer'
import ContentMenu from '@/components/ContentMenu'

export default {
  components: {
    "HeaderContainer": HeaderContainer,
    "ModalContainer": ModalContainer,
    "ContentMenu": ContentMenu
  }
}
</script>

<style>

  .landing-page-container {
    background-color: #eee;
    width: 90vw;
    height: 85vh;
    margin: 5vh auto;
    
    /* grid styles */
    display: grid;
    grid-template-rows: 1fr 7fr;
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 20px;
    grid-column-gap: 20px;
  }

</style>