<template>
    <div>
        <div class="my-menu-toggler column is-paddingless" @click="controlMenu">
            <span class="is-size-1" v-html="sideMenuControlIcon"></span>
        </div>
        <section v-if="!sideMenuClosed" class="my-full-menu section columns is-vcentered is-mobile" ref="fullMenu">
            <nav class="column is-12">
                <p class="menu-label">Contents</p>
                <ul class="menu-list">
                    <li><router-link to="/">Start Here</router-link></li>
                    <li><router-link to="/about" class="is-active">Curriculum Vitae</router-link></li>
                    <li><router-link to="/principles">Design Principles</router-link></li>
                    <li><router-link to="/projects">Projects</router-link></li>
                </ul>
            </nav>
        </section>
        <section v-if="sideMenuClosed" class="my-side-menu section box is-radiusless is-size-7" ref="sideMenu">
            <p>Chapter 1</p>
            <br>
            <p><a href="#">&#10102;</a><br>Introduction</p>
            <p><a href="#">&#10103;</a><br>Rules</p>
            <p><a href="#">&#10104;</a><br>Story</p>
            <p><a href="#">&#10105;</a><br>Examples</p>
        </section>
    </div>
</template>

<script>
    import TweenMax from 'gsap/src/minified/TweenMax.min.js'

    export default {

        data: function () {
            return {
                sideMenuClosed: true,
                sideMenuControlIcon: "&#10092;"
            }
        },

        methods: {
            controlMenu: function(e) {
                const { fullMenu, sideMenu } = this.$refs
                this.sideMenuClosed = !this.sideMenuClosed;
                if(this.sideMenuClosed == false) {
                    this.sideMenuControlIcon = "&#10093;"
                    TweenMax.to(fullMenu, 3, { right: "-90%" }).play();
                }
                if(this.sideMenuClosed == true) {
                    this.sideMenuControlIcon = "&#10092;"
                    TweenMax.to(fullMenu, 3,  { right: "1%"}).play();
                }
            }
        } 
    } 

</script>

<style lang="scss" scoped>
    // Colors
    $light-grey: #ecf0f3;

    // My utility styles
    .my-full-menu {
        position: absolute;
        top: 0%;
        right: -90%;
        width: 100%;
        height: 100%;
        background-color: $light-grey;
        border-radius: 3px;
        z-index: 8000;
    }

    .my-side-menu {
        position: absolute;
        top: 0%;
        right: 0%;
        width: 8%;
        height: 100%;
        padding-top: 10%;
        background-color: $light-grey;
        z-index: 8000;
    }

    .my-menu-toggler {
        position: absolute;
        top: 1%;
        right: 5%;
        z-index: 9000;
    }
</style>