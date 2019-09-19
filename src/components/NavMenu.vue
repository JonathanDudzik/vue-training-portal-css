<template>
    <section class="hero is-fullheight">
        <nav class="level my-nav-bar is-mobile is-marginless">
            <div class="level-left">
                <div class="level-item">
                <img src="../assets/logo.png" alt="logo">
                </div>
            </div>
            <div class="level-right is-size-1">
                <div class="level-item">
                <BtnMenuCourse/>
                </div>
            </div>
        </nav>
        <div class="hero-body">
            <div class="container">
                <aside class="menu my-main-menu">
                    <ul class="menu-list">
                        <h1 class="title is-size-2">{{ courseName }}</h1>
                        <h2 class="subtitle is-size-3">Browse the Training Topics</h2>
                        <div class="is-divider"></div>
                        <li 
                            v-for="link in links" 
                            :key="link.name"
                            @click="setActive(link.name)"
                        >
                            <router-link :to="link.path" :class="{'is-active': activeLink == link.name}">{{ link.name }}</router-link>
                        </li>
                    </ul>
                </aside>
            </div>
        </div>
    </section>
</template>

<script>
import BtnMenuCourse from "../components/BtnMenuCourse"
    export default {
        components: {
            "BtnMenuCourse": BtnMenuCourse
        },
        created() {
            // change a name is router.js to change a name on the list
            // considering using filter/map/reduce for routes not desired to be listed
            this.$router.options.routes[3].children.forEach(route => {
                this.links.push({
                    name: route.name,
                    path: '/course/' + route.path, // The 'course' path is also found in router, there should be a better way of doing this... 
                    
                })
            })
        },
        data() {
            return {
                links: [],
                courseName: this.$store.state.shortCourseName,
            }
        },
        computed: {
            activeLink() {
                return this.$store.state.activeMenuLink    
            } 
        },
        methods: {
            setActive(linkName) {
                this.$store.commit('changeActiveMenuLink', linkName)
            }
        }
    } 
</script>

<style lang="scss" scoped>
    .my-nav-bar{
        position: fixed;
        top: 0%;
        width: 100%;
        padding: 10px 30px 10px 30px;
    }
</style>