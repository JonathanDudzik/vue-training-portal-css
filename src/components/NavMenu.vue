<template>
<!-- <transition name="fade"> -->
<div class="section">
    <p style="background-color: red;">HELLO WORLD!</p>
    <BtnMenuCourse/>
</div>
    <!-- <aside class="menu my-main-menu">
        <ul class="menu-list">
            <h1 class="is-size-5">Income Eligibility Training</h1>
            <div class="is-divider"></div>
                <li 
                    v-for="link in links" 
                    :key="link.identifier"
                >
                    <p @click="selectContent(link)">{{ link.identifier }}</p>
                </li>
        </ul>
    </aside> -->
<!-- </transition> -->
</template>

<script>
import BtnMenuCourse from "../components/BtnMenuCourse"
    export default {
        components: {
            "BtnMenuCourse": BtnMenuCourse
        },
    //     created: function() {
    //         // change the name in router.js to change a name on the list
    //         // consider using filter/map/reduce for routes not desired to be listed
    //         this.$store.state.navMenuInfo.forEach(info => {
    //             this.links.push({
    //                 identifier: info.identifier,
    //                 dynamicSelector: info.contentSelector
    //             })
    //         })
    //     },
    //     data: function() {
    //         return {
    //             links: [],
    //             courseName: this.$store.state.shortCourseName,
    //         }
    //     },
    //     computed: {
    //         mainMenuOpened() {
    //             return this.$store.state.mainMenuOpen;
    //         }
    //     },
    //     methods: {
    //         selectContent(e) {
    //             this.$store.commit("selectFromStore", e.dynamicSelector);
    //         }
    //     }
    } 
</script>

<style lang="scss" scoped>
    // .my-main-menu {
    //     height: 100%;
    //     background-color: #ecf0f3; // why can I use a global ike $light-grey?
    //     box-shadow: 0 2px 3px rgba(black, 0.1), 0 0 0 1px rgba(black, 0.1);
    //     padding: 10px 20px 10px 20px;
    //     z-index: 2;
    // }
    .fade-enter-active, .fade-leave-active {
    transition: opacity 5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
      opacity: 0;
  }
</style>