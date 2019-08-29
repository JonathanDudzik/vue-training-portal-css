<template>
    <div>
        <section class="my-side-menu" ref="navMenuBody">
            <nav tabindex="0">
                <p class="menu-label">Contents</p>
                <ul class="menu-list">
                    <li><router-link to="/">Start Here</router-link></li>
                    <li><router-link to="/about" class="is-active">Curriculum Vitae</router-link></li>
                    <li><router-link to="/principles">Design Principles</router-link></li>
                    <li><router-link to="/projects">Projects</router-link></li>
                </ul>
                <div class="container my-side-menu-control">
                    <p @click="toggleSideMenu" class="is-size-1" v-html="sideMenuControlIcon">{{  }}</p>
                </div>
            </nav>

        </section>
    </div>
</template>

<script>
    import TweenMax from 'gsap/src/minified/TweenMax.min.js'

    export default {

        data: function () {
            return {
                hidden: true,
                sideMenuControlIcon: "&#10093;"
            }
        },

        methods: {
            toggleSideMenu: function(e) {
                this.hidden = !this.hidden;
                const { navMenuBody } = this.$refs
                if(this.hidden == false) {
                    this.sideMenuControlIcon = "&#10092;"
                    TweenMax.to(navMenuBody, .5, { ease: Power2.easeOut, left: ".5%"}).play();
                }
                if(this.hidden == true) {
                    this.sideMenuControlIcon = "&#10093;"
                    TweenMax.to(navMenuBody, .5, { ease: Power2.easeOut, left: "-30%"}).play()
                }
            }
        } 
    } 

</script>

<style lang="scss" scoped>
    // Colors
    $light-grey: #ecf0f3;

    // My utility styles
    .my-side-menu {
        position: absolute;
        top: 25%;
        left: -30%;
        width: 30%;
        background-color: $light-grey;
        border-radius: 3px;
        z-index: 1;
    }

    .my-side-menu-control {
        position: absolute;
        top: 30%;
        left: 105%;
    }
</style>