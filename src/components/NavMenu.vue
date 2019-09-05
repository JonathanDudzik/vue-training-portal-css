<template>
    <div>
        <transition name="fade">
            <aside v-show="mainMenuOpened" class="menu my-main-menu">
                <ul class="menu-list">
                    <li 
                        v-for="link in links" 
                        @click="setActive(link.name)"
                        :key="link.name"
                    >
                        <router-link 
                            :to="link.path" 
                            :class="{'is-active': activeLink == link.name}"
                        >
                            <p>{{ link.name }}</p>
                        </router-link>
                    </li>
                </ul>
            </aside>
        </transition>
    </div>
</template>

<script>
    export default {
        created: function() {
            // change a name is router.js to change a name on the list
            // considering using filter/map/reduce for routes not desired to be listed
            this.$router.options.routes.forEach(route => {
                this.links.push({
                    name: route.name,
                    path: route.path
                })
            })
        },
        data: function() {
            return {
                links: [],
                activeLink: "Get Started"
            }
        },
        computed: {
            mainMenuOpened() {
                return this.$store.state.mainMenuOpen;
            }
        },
        methods: {
            setActive(linkName) {
                this.activeLink = linkName
            }
        }
    } 
</script>

<style lang="scss" scoped>
    .my-main-menu {
        position: fixed;
        right: 0%;
        width: 20%;
        height: 100%;
        padding: 30px 0;
        background-color: #ecf0f3; // why can I use a global ike $light-grey?
        box-shadow: 0 2px 3px rgba(black, 0.1), 0 0 0 1px rgba(black, 0.1);
        z-index: 2;
    }
    .fade-enter-active, .fade-leave-active {
        transition: all .5s ease;
    }
    .fade-enter, .fade-leave-to {
        right: -50%;
    }
</style>