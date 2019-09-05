<template>
    <div>
        <transition name="fade">
            <section v-show="mainMenuOpened" class="my-main-menu">
                <nav class="section">
                    <div class="container">
                        <dl class="js-badger-accordion">
                            <dt>
                                <button class=" button js-badger-accordion-header">
                                    Header Content
                                </button>
                            </dt>
                            <dd class="badger-accordion__panel js-badger-accordion-panel">
                                <div class="js-badger-accordion-panel-inner">
                                    <p class="menu-label">Contents</p>
                                    <ul class="menu-list">
                                        <li><router-link to="/">Start Here</router-link></li>
                                        <li><router-link to="/about" class="is-active">Curriculum Vitae</router-link></li>
                                        <li><router-link to="/principles">Design Principles</router-link></li>
                                        <li><router-link to="/projects">Projects</router-link></li>
                                    </ul>
                                </div>
                            </dd>
                        </dl>
                    </div>
                </nav>
            </section>
        </transition>
    </div>
</template>

<script>
    import BadgerAccordion from '../../node_modules/badger-accordion/dist/badger-accordion';
    
    export default {
        data: function () {
            return {
                mainMenuControlText: "Main Menu",
            }
        },
        computed: {
            mainMenuOpened () {
                return this.$store.state.mainMenuOpen;
            }
        },
        updated: function () {  
            const accordionDomNode = document.querySelector('.js-badger-accordion');
            const accordion = new BadgerAccordion(accordionDomNode);
        }
    } 
</script>

<style lang="scss" scoped>
    @import "../../node_modules/badger-accordion/dist/badger-accordion.scss";
    // Colors
    $light-grey: #ecf0f3;
    // My utility styles
    .my-main-menu {
        position: fixed;
        right: 0%;
        width: 20%;
        height: 100%;
        background-color: $light-grey;
        z-index: 2;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
        .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>