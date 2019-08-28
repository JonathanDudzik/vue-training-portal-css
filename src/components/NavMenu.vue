<template>
    <div>
        <section>
            <nav class="my-side-menu" tabindex="0" ref="navMenuBody">
                <p class="menu-label">Contents</p>
                <ul class="menu-list">
                    <li><router-link to="/">Start Here</router-link></li>
                    <li><router-link to="/about" class="is-active">Curriculum Vitae</router-link></li>
                    <li><router-link to="/principles">Design Principles</router-link></li>
                    <li><router-link to="/projects">Projects</router-link></li>
                </ul>
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
            }
        },

        mounted() { 
            const { navMenuBody, navMenuTab } = this.$refs
            const objects = [navMenuBody, navMenuTab];    
            TweenMax.to(objects, 3, { left: "20%", top: "10%" }) 
        } 
    } 

</script>

<style lang="scss" scoped>
    // Colors
    $light-grey: #ecf0f3;

    // My utility styles
    .my-side-menu {
        position: absolute;
        top: 20%;
        left: -100%;
        background-color: $light-grey;
        border-radius: 3px;
        z-index: 1;
    }
</style>