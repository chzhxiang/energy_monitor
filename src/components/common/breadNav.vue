<template>
    <div class="Breadnav">
        <div class="el-icon-d-arrow-right ub-f1 Breadnavicon fl">
        </div>
        <div class="ub-f1 pr">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>{{metas}}</el-breadcrumb-item>
                <el-breadcrumb-item>{{meta}}</el-breadcrumb-item>
            </el-breadcrumb>
    
            <div class="slot-right" v-if="slotRight.show">
                <i class="icon" :class="slotRight.icon"></i>
                <span @click="slotRightClick">
                    {{ slotRight.text }}
                </span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            meta: this.$store.state.sidebarItem.meta.title,
            metas: this.$store.state.sidebarItem.metas,
            
            slotRight: null
        }
    },
    inject:['breadNavRightSlot'],//提供给 breadnav slotright使用
    created() {
        this.slotRight = this.breadNavRightSlot;
    },
    mounted(){
    },
    computed: {
        getmeta() {
            return this.$store.state.sidebarItem.meta.title;
        }
    },
    methods: {
        slotRightClick(){
            this.slotRight && this.slotRight.click && this.slotRight.click();
        },
        setmeta() {
            let items = this.$store.state.sidebarItem.items;
            for (var i = items.length - 1; i >= 0; i--) {
                if (items[i].subs) {
                    let item = items[i].subs;
                    for (var j = item.length - 1; j >= 0; j--) {
                        if (item[j].title == this.$store.state.sidebarItem.meta.title) {
                            this.metas = items[i].title;
                            this.$store.state.sidebarItem.metas = items[i].title;
                        } else {

                        }

                    }
                }

            }
        }
    },
    watch: {
        getmeta() {
            this.meta = this.$store.state.sidebarItem.meta.title;
            this.setmeta();
        }
    }
}

</script>
<style scoped lang="scss">
.Breadnav {
    width: 100%;
    height: 36px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 1px 0px 1px rgba(216, 227, 233, 0.31);
}

.Breadnavicon {
    margin: 10px;
}

.el-breadcrumb {
    line-height: 36px;
}


.slot-right{
    font-size: 12px;
    color: #fff;
    padding: 0 10px;
    line-height: 28px;
    height: 28px;
    right: 20px;
    top: 3px;
    position: absolute;
    border-radius: 28px;
    background: #1881BF;
    cursor: pointer;
    
    .icon{
        float: left;
        width: 14px;
        height: 14px;
        background: red;
        margin: 7px 7px 0 0;
    }
}
</style>
