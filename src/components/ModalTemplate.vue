<template>
  <transition name="modal">
    <section class="section modal-mask">
      <div class="container notification content has-text-centered">
        <div class="title is-size-3">
          <slot name="header">
            Default header
          </slot>
        </div>

        <div class="modal-body">
          <slot name="body">
            Default body
          </slot>
        </div>

        <div class="is-clearfix">
          <slot name="footer">
          </slot>
          <button class="button modal-default-button" @click="toggleHelpModal">
            Close
          </button>
        </div>
      </div>
    </section> -->
  </transition>
</template>

<script>
export default {
    methods: {
        toggleHelpModal() {
            this.$store.commit('changeShowHelpModal', !this.$store.state.showHelpModal)
        }
    }
}
</script>

<style lang="scss" scoped>
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .8);
    display: table;
    transition: opacity .3s ease;
  }

  .modal-body {
    margin: 20px 0;
  }

  .modal-default-button {
    float: right;
  }

  /*
  * The following styles are auto-applied to elements with
  * transition="modal" when their visibility is toggled
  * by Vue.js.
  *
  * You can easily play with the modal transition by editing
  * these styles.
  */

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

</style>
