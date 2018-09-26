<template>
    <div class="wrapper">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
        <div class="content-box" :class="{'content-collapse':collapse}">
            <v-nav></v-nav>
            <div class="content">
                <transition name="move" mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>
        </div>
    </div>
</template>
<script>
import vHead from './Header.vue';
import vSidebar from './sidebar.vue';
// import vTags from './Tags.vue';
import vNav from './breadnav.vue';
import bus from './bus';
export default {
    data() {
        return {
            collapse: false
        }
    },
    provide: {
        //暂时用于breadnav -右侧自定义按钮配置参数
        breadNavRightSlot: {
            text: "",
            click: null,
            show: false,
            icon: ""
        }
    },
    components: {
        vHead,
        vSidebar,
        vNav
    },
    created() {
        bus.$on('collapse', msg => {
            this.collapse = msg;
        })
    }
}

</script>
