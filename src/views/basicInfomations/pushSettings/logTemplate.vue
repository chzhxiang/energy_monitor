<template>
    <div class="alexpression">
        <div class="clear">
            <div style="width: 100%;">
                <el-tabs v-model="tabsName" type="card" @tab-click="handleClick">
                    <el-tab-pane v-for="(tab,i) in this.inTabsData" :key="i"
                                 :label="tab.name"
                                 :name="tab.name">
                        <div class="transferUl">
                            <div class="fl">
                                <div class="transferUltit">分项</div>
                                <ul>
                                    <li v-for="(jtem,j) in tab.resList" :class="{act:inTabsIndex[i] == j}"
                                        @click="addExpression(jtem,i,j)">
                                        <span>{{jtem.name}}</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="fl m-box">
                                <span @click="addText(i)">文字</span>
                                <i class="el-icon-d-arrow-right"></i>
                            </div>
                            <div class="fl r-box">
                                <div class="r-boxtit">报告详情</div>
                                <div class="r-boxcont">
                                    <template v-for="(item,index) in reportData[i].itemVal">
                                        <template v-if="item.type == 'text'">
                                            <span style="min-width:20px;height:24px;cursor: pointer;display:inline-block;" @click="editText($event,i,index)" class="fl">
                                                <span class="testClass">{{item.val}}</span>
                                                <input id='testId' style="display:none;width: 80px;height: 100%;border: none;outline: none" v-model="item.val" type="text">
                                            </span>
                                        </template>
                                        <template v-if="item.type == 'par'">
                                            <span  class="fl" :class="{act:item.act}">
                                                <span @click="focusText(i,index)">{{item.val}}</span>
                                            </span>
                                        </template>
                                    </template>
                                </div>
                            </div>
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </div>
        <div slot="footer" class="dialog-footer">
            <div style="display: inline-block">
                <el-button type="primary" @click="addAction">保 存</el-button>
                <el-button @click="isHide">取 消</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            tabsData: {
                type: Array,
                default: function () {
                    return [
                        {
                            name: '日报',
                            tType:0,
                            resList: [
                                {name: '变压器',value:'A000001', id: 1},
                                {name: '水泵',value:'A000002', id: 2},
                                {name: '电表',value:'A000003', id: 3},
                                {name: '照明',value:'A000004', id: 4},
                                {name: '空调',value:'A000005', id: 5},
                                {name: '变压器',value:'A000006', id: 6},
                                {name: '水泵',value:'A000007', id: 7},
                                {name: '电表',value:'A000008', id: 8},
                            ]
                        },
                        {
                            name: '周报',
                            tType:1,
                            resList: [
                                {name: '周报1',value:'A01', id: 1},
                                {name: '周报2',value:'A02', id: 2},
                                {name: '周报3',value:'A03', id: 3},
                                {name: '周报4',value:'A04', id: 4},
                                {name: '周报5',value:'A05', id: 5}
                            ]
                        },
                        {
                            name: '月报',
                            tType:2,
                            resList: [
                                {name: '月报1',value:'A01', id: 1},
                                {name: '月报2',value:'A02', id: 2},
                                {name: '月报3',value:'A03', id: 3},
                                {name: '月报4',value:'A04', id: 4},
                                {name: '月报5',value:'A05', id: 5}
                            ]
                        },
                        {
                            name: '季报',
                            tType:3,
                            resList: [
                                {name: '季报1',value:'A01', id: 1},
                                {name: '季报2',value:'A02', id: 2},
                                {name: '季报3',value:'A03', id: 3},
                                {name: '季报4',value:'A04', id: 4},
                                {name: '季报5',value:'A05', id: 5}
                            ]
                        },
                        {
                            name: '年报',
                            tType:4,
                            resList: [
                                {name: '分项1',value:'A01', id: 1},
                                {name: '分项2',value:'A02', id: 2},
                                {name: '分项3',value:'A03', id: 3},
                                {name: '分项4',value:'A04', id: 4},
                                {name: '分项5',value:'A05', id: 5}
                            ]
                        }
                    ]
                }
            },
        },
        data() {
            return {
                tabsName: '',
                inTabsData: this.tabsData,
                inTabsIndex: {},
                reportData:[
                  /*  {
                        type:'text',
                        val:"我问问"
                    },
                    {
                        type:'par',
                        val:"{{001022}}"
                    }*/
                ]
            };
        },
        created(){
            for (let key in this.inTabsData) {
                if (key == 0) {
                    this.tabsName = this.inTabsData[key].name;
                }
                this.inTabsIndex[key] = "a";
                this.reportData.push({tType:this.inTabsData[key].tType,itemVal:[]});
            }
        },
        mounted() {

        },
        methods: {
            addAction() {

            },
            isHide() {
                this.$emit('isHide', false);
            },
            handleClick(v) {
                console.log(v);
            },
            addExpression(jtem,index,i,) {
                let it = this;
                it.inTabsIndex[index] = i;
                it.inTabsIndex = Object.assign({}, it.inTabsIndex);
                if(JSON.stringify(it.reportData[index]['itemVal']) !="[]"){
                    for(let k=0;k<it.reportData[index]['itemVal'].length;k++){
                        if(it.reportData[index]['itemVal'][k].type =="par"&&it.reportData[index]['itemVal'][k].act==true){
                            it.reportData[index]['itemVal'][k] = {
                                type:'par',
                                val:"{{"+ jtem.value +"}}",
                                act:false
                            }
                            return false;
                        }
                    }
                    additems();
                    return false;
                }
                additems();
                function additems() {
                    it.reportData[index]['itemVal'].push( {
                        type:'par',
                        val:"{{"+ jtem.value +"}}",
                        act:false
                    },)
                }

            },
            addText(i){
                if(this.reportData[i]['itemVal'].length!=0&&this.reportData[i]['itemVal'][[this.reportData[i]['itemVal'].length-1]].type=="text"){
                    return false;
                }
                this.reportData[i]['itemVal'].push( {
                    type:'text',
                    val:"请点击输入文字",
                },)

            },
            editText(e,parNode,index){
                let it =this;
                let input = this.lzh.children(e.currentTarget,'input');
                let span = this.lzh.children(e.currentTarget,'span');
                span[0].style.display = "none";
                input[0].style.display = "block";
                input[0].focus();
                input[0].onblur=function () {
                    this.style.display ="none"
                    span[0].style.display = "block";
                    if(!it.reportData[parNode]['itemVal'][index].val){
                        it.reportData[parNode]['itemVal'].splice(index,1);
                    }
                }
            },
            focusText(parNode,index){
                let it = this;
                it.reportData[parNode]['itemVal'][index].act = !it.reportData[parNode]['itemVal'][index].act
                for(let i=0;i<it.reportData[parNode]['itemVal'].length;i++){
                    if(it.reportData[parNode]['itemVal'][i].type=="par"&&i!=index){
                        it.reportData[parNode]['itemVal'][i].act = false
                    }
                }
                it.reportData = Object.assign({}, it.reportData);
                document.onkeyup = function(e) {
                    if(e.keyCode==8||e.keyCode==46){
                        let newData=[]
                        for(let i=0;i<it.reportData[parNode]['itemVal'].length;i++){
                            console.log(it.reportData[parNode]['itemVal'][i].act);
                            if(!it.reportData[parNode]['itemVal'][i].act){
                                newData.push(it.reportData[parNode]['itemVal'][i])
                            }
                        }
                        it.reportData[parNode]['itemVal'] = newData;
                    }
                }
            }

        }
    };
</script>
<style scoped>
    .transferUl li {
        cursor: pointer;
    }

    .act {
        background-color: #1881BF;
        color: #fff;
    }

    .operator div {
        cursor: pointer;
    }

    div, li {
        -moz-user-select: none; /*火狐*/
        -webkit-user-select: none; /*webkit浏览器*/
        -ms-user-select: none; /*IE10*/
        -khtml-user-select: none; /*早期浏览器*/
        user-select: none;
    }
</style>
<style>
    .alexpression .el-tabs__item {
        height: 36px;
        line-height: 36px;
    }

    .alexpression .el-tabs__content {
        height: 100%;
        box-sizing: border-box;
        padding-top: 15px;
        border-top: none;
        background: #fff;
    }

    .alexpression .el-tabs__content ul.transferUl li span {
        white-space: nowrap;
        padding-left: 10px;
    }

    .alexpression .el-tabs__header {
        margin: 0;
    }

    .alexpression .el-tabs__item {
        background: rgba(247, 251, 252, 1);
        color: #515151;
    }

    .alexpression .el-tabs__item.is-active {
        background: #fff;
        color: #188FBF;
        border-bottom: 0 !important;
    }

    .alexpression .el-tabs--card > .el-tabs__header .el-tabs__item {
        border-bottom: 1px #e4e7ed solid;
    }

    .alexpression .transferUl ul {
        padding: 15px 20px 20px 10px;
        margin-top: -1px;
        overflow: auto;
        border: 1px #e4e7ed solid;
        width: 200px;
        box-sizing: border-box;
        height: 300px;
        background: rgba(247, 251, 252, 1);
    }
    .alexpression .transferUl ul li{
        padding-left: 20px;
    }
    .alexpression .transferUl ul li span{
        white-space: nowrap;
    }
    .alexpression .transferUl ul li.act span {
        display: inline-block;
        background: #1881BF;
        color: #fff;
    }

    .alexpression .transferUl .transferUltit {
        position: relative;
        z-index: 2;
        width: 100px;
        height: 35px;
        line-height: 35px;
        border: 1px #e4e7ed solid;
        border-bottom: 1px transparent solid;
        text-align: center;
        font-size: 14px;
        color: #188FBF;
        font-weight: bold;
        background: rgba(247, 251, 252, 1);
        border-radius: 4px 4px 0 0;
    }

    .alexpression .transferUl .m-box {
        width: 70px;
        box-sizing: border-box;
        padding-left: 24px;
        padding-top: 173px;
        color: #C3C9D5;
        font-size: 20px;
        height: 333px;
        position: relative;
    }
    .alexpression .transferUl .m-box span{
        position: absolute;
        cursor: pointer;
        font-size: 14px;
        line-height: 15px;
        padding: 3px 10px;
        border: 1px rgba(195,201,213,1) solid ;
        border-radius: 20px;
        color: #3a3a3a;
        top:50px;
        left: 10px;
    }

    .alexpression .transferUl .r-box .r-boxtit {
        font-weight: bold;
        color: #188FBF;
        height: 35px;
        line-height: 35px;
    }

    .alexpression .transferUl .r-box .r-boxcont {
        width: 466px;
        box-sizing: border-box;
        height: 300px;
        border: 1px #e4e7ed solid;
        padding: 10px 20px;
        background: rgba(247, 251, 252, 1);
    }
</style>
