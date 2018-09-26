<template>
    <div class="insertSubentry">
        <div class="contentBox clear">
            <div class="BuildingBox fl">
                <div class="Buildings">
                    <el-checkbox-group v-model="checkedBuildings" @change="handleCheckedCitiesChange">
                        <el-checkbox v-for="(item,index) in BuildingOption" :label="item.id" :key="index">{{item.bName}}</el-checkbox>
                    </el-checkbox-group>
                </div>
            </div>
        </div>
        <div slot="footer" class="dialog-footer">
            <div style="display: inline-block">
                <el-button type="primary">确定</el-button>
                <el-button @click="isHide">取 消</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import EnergyForm from '../../../components/form/EnergyForm'

    export default {
        data() {
            return {
                checkAll:false,
                cancelAll:false,
                checkedBuildings:[1,6],
                BuildingOption:[],
                BuildingOptionall:[],
            }
        },
        created(){
            this.BuildingOption = [
                {id:1, bName:"厦门大厦"}, {id:2, bName:"深圳大厦"}, {id:3, bName:"万科"}, {id:4, bName:"乔丹大厦"}, {id:5, bName:"前海湾大厦"}, {id:6, bName:"大门大厦"},
                {id:7, bName:"特步研究中心大厦特步研究中心大厦特步研究中心大厦特步研究中心大厦特步研究中心大厦"}, {id:8, bName:"龙华大厦"}, {id:9, bName:"观澜大厦"}, {id:10, bName:"观澜大厦"},
                {id:11, bName:"观澜大厦"}, {id:12, bName:"观澜大厦"}, {id:13, bName:"观澜大厦"}, {id:14, bName:"观澜大厦"}, {id:15, bName:"观澜大厦"},{id:15, bName:"观澜大厦"},{id:15, bName:"观澜大厦"},
                {id:15, bName:"观澜大厦"},{id:15, bName:"观澜大厦"}
            ]


        },
        mounted(){
            this.getOption();
        },
        methods: {
            getOption(){
                let it=this;
                it.BuildingOption.forEach(function (obj,index) {
                    it.BuildingOptionall.push(obj.id);
                })
            },
            addAction(ruleForm) {
            },
            isHide() {
                this.$emit('isHide', false);
            },
            handleCheckedCitiesChange(value) {
                let checkedCount = value.length;
                console.log(checkedCount);
                console.log(this.BuildingOptionall.length);
                this.checkAll = checkedCount === this.BuildingOptionall.length;
                /*this.isIndeterminate = checkedCount > 0 && checkedCount < this.BuildingOption.length;*/
            },
            handleCheckAllChange(val) {
                console.log(val);
                this.cancelAll= !val;
                this.checkedBuildings = val ? this.BuildingOptionall :[];
               /* this.isIndeterminate = false;*/
            },
            handleCancelAllAllChange(val){
                this.checkAll= !val;
                this.checkedBuildings = val ? [] :[];
            }

        }
    };
</script>
<style scoped>

</style>
<style>
    .insertSubentry .contentBox{

    }
    .insertSubentry .contentBox .BuildingTit{
        color: #188FBF;
        font-size: 14px;
        font-weight: bold;
        padding: 7px 10px 0 0;
    }
    .insertSubentry .contentBox .BuildingBox{
        width: 100%;
        height: 379px;
        border: 1px #E4E7EF solid;
    }
    .insertSubentry .contentBox .BuildingBox .clickChoics{
        background: #e9f0f2;
        height: 34px;
        padding-left: 20px;
        line-height: 34px;
    }

    .insertSubentry .contentBox .BuildingBox .Buildings{
        width: 100%;
        height: 100%;
        background: #f7fbfc;
        overflow: auto;
    }
    .insertSubentry .contentBox .BuildingBox .Buildings .el-checkbox-group{
        padding-left: 20px;
    }

    .insertSubentry .contentBox .BuildingBox .Buildings .el-checkbox-group .el-checkbox{
        display: block;
        margin: 0;
    }
    .insertSubentry .contentBox .BuildingBox .el-checkbox__inner{
        border: 1px #838383 solid;
        background: transparent;
    }
    .insertSubentry .covered .el-checkbox__inner,.insertSubentry .contentBox .SubentryBox .el-checkbox__inner{
        border: 1px #838383 solid;
        background: transparent;
    }
    .insertSubentry .covered .el-checkbox__inner::after,.insertSubentry .contentBox .el-checkbox__inner::after{
        border-color:#358BBD;
    }
    .insertSubentry .covered .el-checkbox__input.is-checked+.el-checkbox__label,.insertSubentry .contentBox .el-checkbox__input.is-checked+.el-checkbox__label{
        color: #606266;
    }
</style>
