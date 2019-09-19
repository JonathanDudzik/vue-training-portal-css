<template>
  <div class="container">
    <ModalTemplate>
      <template v-slot:header>Course Navigation Instructions</template>
      <template v-slot:body>
        <section class="section">
          <div>
              <aside>
                  <video class="max-height-half" src="../assets/help.mp4" controls></video>
              </aside>
          </div> 
      </section>
    </template>
    </ModalTemplate>
  </div>
</template>

<script>
import Headphones from 'vue-material-design-icons/Headphones.vue';
import PauseCircleOutline from 'vue-material-design-icons/PauseCircleOutline.vue';
import ModalTemplate from '@/components/ModalTemplate'

export default {
  components: {
    ModalTemplate
  }
}
</script>

<style lang="scss">

</style>