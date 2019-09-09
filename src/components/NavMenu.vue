<template>
    <aside class="menu my-main-menu">
        <ul class="menu-list">
            <li 
                v-for="link in links" 
                :key="link.name"
            >
                <p> {{ link.name }} </p>
                <p> {{ link.dynamicSelector }} </p>
            </li>
        </ul>
    </aside>
</template>

<script>
    export default {
        created: function() {
            // change the name in router.js to change a name on the list
            // consider using filter/map/reduce for routes not desired to be listed
            this.$store.state.courseContents.navMenuInfo.forEach(name => {
                this.links.push({
                    name: name.identifier,
                    dynamicSelector: name.contentSelector
                })
            })
        },
        data: function() {
            return {
                links: [],
            }
        },
        computed: {
            mainMenuOpened() {
                return this.$store.state.mainMenuOpen;
            }
        },
        methods: {
            closeMenu() {
                this.$store.commit('toggleMenu');
            }
        }
    } 
</script>

<style lang="scss" scoped>
    .my-main-menu {
        position: fixed;
        top: 10%;
        right: 0%;
        width: 20%;
        height: 100%;
        padding: 30px 0;
        background-color: #ecf0f3; // why can I use a global ike $light-grey?
        box-shadow: 0 2px 3px rgba(black, 0.1), 0 0 0 1px rgba(black, 0.1);
        z-index: 2;
    }
</style>