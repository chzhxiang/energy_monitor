<template>
    <div style="height: 100%">
        <div style="background:#fff;width:300px;height:100%;border: 1px red solid">
            <SideSetingBar></SideSetingBar>
        </div>

    </div>
</template>
<script>
import SideSetingBar from '../../../components/common/sideSetingBar.vue';

export default {
    components: {
        SideSetingBar
    },
    data() {
        return {
            quota: 1,
            treeitems: [],
            defaultProps: {
                children: 'children',
                label: 'labelname'
            },
            value1: '',
            option: ''
        };
    },
    created() {
    },
    methods: {

    },
}

</script>
<style scoped>

</style>
<style>

</style>
