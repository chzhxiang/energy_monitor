<style scoped>
.quota_date .el-input {
    width: 120px !important;
    border-radius: 12px !important;
}

.chatrs {
    width: 100%;
    height: 400px;
    background: #fff;
}

.top {
    padding-left: 40px;
    font-size: 16px;
    font-family: MicrosoftYaHei;
    color: rgba(34, 116, 164, 1);
    background: rgba(245, 249, 249, 1);
    line-height: 36px;
}

.quotatype {
    height: 22px;
    line-height: 24px;
    margin-right: 40px;
}

.quotatype .qu_btns {
    width: 118px;
    overflow: hidden;
    border: 1px solid #A1A1A1;
    border-radius: 12px;
}

.quotatype .qu_btns .qu_btn {
    width: 59px;
    height: 22px;
    line-height: 22px;
    text-align: center;
}

.quota_date {
    height: 22px;
    line-height: 23px;
}



.qtselect {
    background: rgba(53, 139, 189, 1);
    color: #ffffff;
}

.middle {
    padding-bottom: 18px;
}



.organization .el-col {
    text-align: center;
    line-height: 40px;
}

.Section_title {
    line-height: 40px;
    font-size: 16px;
    text-align: center;
    color: #3a3a3a;
    font-family: 'MicrosoftYaHei';
}

.query {
    width: 69px;
    line-height: 24px;
    border-radius: 12px;
    background: rgba(24, 129, 191, 1);
    font-size: 14px;
    color: #fff;
    text-align: left;
    padding-left: 10px;
    margin-left: 60px;
}

.content_box {
    color: #838383;
}

.export {
    width: 96px;
    height: 22px;
    border-radius: 12px;
    border: 1px solid #a1a1a1;
    line-height: 23px;
    position: absolute;
    right: 40px;
    top: 0px;
    text-align: center;
}

.SectionDetail {
    margin-top: 40px;
}

.SectionDetail .secpgb {
    width: 35%;
    height: 600px;
    border-right: 1px solid #E1E1E1;
    padding-left: 30px;
    padding-right: 60px;
}

.sectable {
    margin-left: 30px;
}

</style>
<style>
.quota_date .el-input__inner {
    border-radius: 12px;
}

</style>
<template>
    <div style="width: 100%;height: 100%">
        <button v-if="!showSeting" class="topSetingBt"  type="text" @click="showSeting = true"><i class="el-icon-edit-outline"></i>定额设置</button>
        <button v-if="showSeting" class="topSetingBt" type="text" @click="showSeting = false"><i class="el-icon-edit-outline"></i>返回</button>
        <div style="width:100%;height: 100%" v-if="showSeting">
            <QuotaSeting></QuotaSeting>
        </div>
        <div v-if="!showSeting" style="width: 100%">
            <el-row :gutter="10">
                <el-col :span="4">
                    <div class="top">
                        组织结构
                    </div>
                    <div class="organization content_box pdt18">
                        <el-tree :data="treeitems" show-checkbox :check-on-click-node="true" :default-expanded-keys="[2]" :default-checked-keys="[5]" default-expand-all node-key="id" ref="tree" highlight-current :props="defaultProps" @check-change="handleCheckChange" @node-click="setCheckedKeys">
                        </el-tree>
                    </div>
                </el-col>
                <el-col :span='20'>
                    <div class="top">
                        科室定额详情
                    </div>
                    <div class="quotaDeatil content_box pdt18">
                        <div class="middle ub" style="padding-left:40px; ">
                            <div class="quotatype ub">
                                <div class="quota_name">
                                    定额类型：
                                </div>
                                <div class="qu_btns ub">
                                    <div class="qu_btn quota_left " :class="{qtselect:quota == 1}" @click="getQuota($event)" data-active="1">
                                        年定额
                                    </div>
                                    <div class="qu_btn quota_right" :class="{qtselect:quota == 2}" @click="getQuota($event)" data-active="2">
                                        月定额
                                    </div>
                                </div>
                            </div>
                            <div class="quota_date">
                                日期：
                                <el-date-picker v-model="value1" type="month" placeholder="选择月" size="mini">
                                </el-date-picker>
                            </div>
                            <div class="query el-icon-search">
                                查询
                            </div>
                            <div class="export el-icon-upload2 ub-pe">
                                导出定额
                            </div>
                        </div>
                        <div class="Section_title">
                            2018年10月 各科室电定额（kWh）
                        </div>
                        <div class="SectionDetail ub">
                            <div class="secpgb">
                                <vprogressbar></vprogressbar>
                            </div>
                            <div class="sectable">
                                <vtable></vtable>
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
import vprogressbar from '../../../components/common/progressbar.vue';
import vtable from '../../../components/common/sectionTable.vue';
import QuotaSeting from './quotaSeting.vue';
import api from '../../../axios/api.js';

export default {
    methods: {
        getCheckedNodes() {
            console.log(this.$refs.tree.getCheckedNodes());
        },
        getCheckedKeys() {
            console.log(this.$refs.tree.getCheckedKeys());
        },
        handleCheckChange(data) {
            console.log(data);
        },
        setCheckedKeys(data) {
            let keys = this.$refs.tree.getCheckedKeys();
            keys.push(data.id);
            this.$refs.tree.setCheckedKeys(keys);
        },
        gettreeitems() {
            api.ajax('/treeitems/list').then(res => {
                console.log(res);
                this.treeitems = res;
            })
        },
        getquota() {
            api.ajax('/sectionQuota/list').then(res => {
                console.log(res);
                this.option = res;
                console.log(this.option)
            })
        },
        getQuota(e) {
            this.quota = e.target.getAttribute('data-active');
        }

    },

    data() {
        return {
            showSeting:false,
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
    components: {
        vprogressbar,
        vtable,
        QuotaSeting
    },
    created() {
        this.gettreeitems();
        this.getquota();
    }
}

</script>
