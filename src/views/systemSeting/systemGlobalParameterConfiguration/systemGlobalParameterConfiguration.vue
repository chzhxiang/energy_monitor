<template>
    <div class="containerBox">
        <h3 class="containertit" style="margin-bottom: 20px">系统全局参数配置</h3>
        <el-tabs v-model="activeTable" type="card" @tab-click="handleClick">
            <el-tab-pane v-for="(item,index) in parametersTypeData" :key="index" :label="item.name" :name="''+item.id">
                <div class="clear" style="padding: 20px 30px 20px 43px;position: relative;">
                    <span v-if="item.tid==0" style="font-size: 14px;color: #3A3A3A">
                        所属子类：
                        <el-select v-model="parametersList[item.id].optionValue" @change="childrenChange" placeholder="请选择">
                            <el-option
                                v-for="jtem in item.array"
                                :key="jtem.tid"
                                :label="jtem.name"
                                :value="jtem.tid">
                            </el-option>
                          </el-select>
                    </span>
                    <span class="fr addItem insertItem" @click="isShowPopup.inPuttemplate=true"><i class="el-icon-download"></i>导 入</span>
                    <span class="fr addItem" @click="isShowPopup.addConfiguration=true"><i class="el-icon-circle-plus-outline"></i>新 增</span>
                </div>
                <div style="padding: 0 30px;padding-bottom: 40px">
                    <DataTable :formatter="formatter"
                               :flush="falush"
                               :cellclassname="cellclassname"
                               :headercellclassname="headercellclassname"
                               :inTableData="parametersList[item.id].listData"
                               @rowClick="tablerowClick"
                               @cellDbClick="cellDbClick"
                               :inAjax="parametersList[item.id].listAjax"
                               @selection="selectionChange">
                    </DataTable>
                </div>
            </el-tab-pane>
        </el-tabs>
        <el-dialog class="popupWindow" @close="closeDialog"  title="新增类别" :visible.sync="isShowPopup.addConfiguration" width="741px">
            <AddConfiguration  :getactiveItem="activeItem" :showData="isShowPopup.addConfiguration" :clData="cleardata" :parametersType="parametersTypeData" @isHide="isShowPopup.addConfiguration = false" @flushList="falush=new Date()"></AddConfiguration>
       </el-dialog>
        <el-dialog class="popupWindow" title="删除类别"  :visible.sync="isShowPopup.deleteInfor" width="420px">
            <DeleteInfor :delInfo="isdelInfo" contentText="删除后将不再显示此类别，请确认此类别未被使用。<br>确认删除吗？" @isHide="isShowPopup.deleteInfor = false" @flushList="falush=new Date()"></DeleteInfor>
        </el-dialog>
        <el-dialog class="popupWindow" title="导入类别" :visible.sync="isShowPopup.inPuttemplate" width="656px">
            <InPuttemplate :getactiveItem="activeItem" :dataURL="ImportUrl" @flushList="falush=new Date()" @isHide="isShowPopup.inPuttemplate = false"></InPuttemplate>
        </el-dialog>
    </div>
</template>
<script>
    import SearchBar from "../../../components/common/searchBar.vue"
    import DataTable from "../../../components/common/dataTable.vue"
    import DeleteInfor from "../../../components/common/deleteInfor.vue"
    import InPuttemplate from "./inPuttemplate.vue"
    import AddConfiguration from "./AddConfiguration.vue"

    export default {
        name: 'table',
        components: {
            SearchBar, DataTable,DeleteInfor,AddConfiguration,InPuttemplate
        },
        data() {
            return {
                cleardata:'',
                ImportUrl:{
                        downloadURL:this.$url.excelParamsListExportTemp,
                        uploadingURL:this.$url.excelParamsListImportTemp
                },
                isdelInfo:{
                    method:"post",
                    url:this.$url.editParamsList,
                    data: {
                        id:'',
                        isdeleted:1
                    }
                },
                falush:'',
                activeTable:'',
                isShowPopup: {
                    addConfiguration: false,
                    inPuttemplate:false,
                    deleteInfor:false
                },
                parametersTypeData:[],
                parametersList:{},
                activeItem:{
                    id:0,
                    zid:0
                }
            }
        },
        created(){
            this.getTitTypeData()
        },
        mounted(){

        },
        methods: {
            closeDialog(){
                this.cleardata=new Date();
            },
            getTitTypeData(){
                this.$axios.ajax({
                    method: 'GET',
                    url:this.$url.getParamsItemsTypeList,
                    data:{}
                }).then((res) => {
                    if(res.code==200){
                        let data = res.data.array;
                        if(JSON.stringify(data) == '[]'){
                            return false
                        }
                        this.parametersTypeData = data;
                          for (let key in data) {
                            if (key == 0) {
                                this.activeTable = JSON.stringify(data[key].id);
                            }
                            this.parametersList[data[key].id] = {children:data[key].tid,listAjax:{url: '', method:"", data: {}}}
                            if(data[key].tid==0){
                                this.parametersList[data[key].id]["optionValue"] = data[key].array[0].tid;
                            }
                          }
                    }else if(res.code == 400){
                        this.$message.error(res.msg);
                    }else{
                        this.$message.error('信息获取失败，请稍后再试');
                    }
                })
            },
            getListData(optVal){

                let it = this;
                let typeId = it.activeTable;
                this.activeItem.id=it.activeTable
                this.activeItem = Object.assign({}, it.activeItem);
                if(optVal){
                    it.parametersList[typeId]["optionValue"] = optVal;
                }
                if(!typeId || typeId == "0"){
                     return false;
                }
                let isChild= it.parametersList[typeId].children == 0;

                if(isChild){
                    it.parametersList[typeId]['listData']={
                        tHead: [{
                            name: '类别名称',
                            field: "name",
                        }, {
                            name: '排序',
                            field: "rank",
                        }, {
                            name: '所属子类',
                            field: "pname",
                        },{
                            name: '创建人',
                            field: "createname",
                        }, {
                            name: '创建时间',
                            field: "createat",
                        }
                        ],
                        tData: [],
                        total: 0,
                        actionBtns: [
                            {
                                type: 'del',
                                label: "<span style='color: #1881BF;font-size: 12px;text-decoration: underline'>删除</span>"
                            },
                        ],
                        isMultiple: false,
                        isRank: true
                    }
                    it.parametersList[typeId]['listAjax']={
                        url:it.$url.getParamsList,
                        method: "post",
                        data: {
                            type: it.parametersList[typeId]["optionValue"],
                            pageNum: 1,
                            pageSize: 15
                        },
                    }
                    it.parametersList =  Object.assign({}, it.parametersList);
                    this.activeItem.zid=it.parametersList[typeId]["optionValue"]
                    this.activeItem = Object.assign({}, it.activeItem);
                }else {
                    it.parametersList[typeId]['listData']={
                        tHead: [{
                            name: '类别名称',
                            field: "name",
                        }, {
                            name: '排序',
                            field: "rank",
                        },{
                            name: '创建人',
                            field: "createname",
                        }, {
                            name: '创建时间',
                            field: "createat",
                        }],
                        tData: [],
                        total: 0,
                        actionBtns: [
                            {
                                type: 'del',
                                label: "<span style='color: #1881BF;font-size: 12px;text-decoration: underline'>删除</span>"
                            },
                        ],
                        isMultiple: false,
                        isRank: true
                    }
                    it.parametersList[typeId]['listAjax']={
                        url:it.$url.getParamsList,
                        method: "post",
                        data: {
                            type:it.parametersList[typeId].children,
                            pageNum: 1,
                            pageSize: 15
                        },
                    }

                    it.parametersList =  Object.assign({}, it.parametersList);
                    this.activeItem.zid=it.parametersList[typeId].children;
                    this.activeItem = Object.assign({}, it.activeItem);
                }
            },
            cellDbClick(obj){
                let it = this;
                if(obj.column.property=="rank"|| obj.column.property=="name"){
                    let value_event = obj.cell.firstChild.innerHTML;
                    let cellInput = document.createElement("input");
                    cellInput.value = value_event;
                    cellInput.setAttribute("class", "input_sty");
                    cellInput.setAttribute("type", "text");
                    cellInput.style.border = 'none';
                    cellInput.style.outline = 'none';
                    cellInput.style.textAlign = 'left';
                    cellInput.style.textDecoration = 'underline';
                    cellInput.style.width = "100%";
                    cellInput.style.height = "100%";
                    cellInput.style.position = "absolute";
                    cellInput.style.top = "0";
                    cellInput.style.left = "0";
                    var cellabc = obj.cell;
                    cellabc.appendChild(cellInput);
                    cellInput.focus();
                    cellInput.onblur = function() {
                        obj.cell.removeChild(cellInput);
                        if(value_event == cellInput.value.trim()){
                            return false;
                        }
                        let pData={}
                        if(obj.column.property=="rank"){
                            pData={
                                id:obj.row.id,
                                rank:cellInput.value,
                            }
                        }
                        if(obj.column.property=="name"){
                            pData={
                                id:obj.row.id,
                                name:cellInput.value,
                            }
                        }
                        it.$axios.ajax({
                            method: 'post',
                            url:it.$url.editParamsList,
                            data:pData
                        }).then((res) => {
                            if(res.code==200){
                                obj.cell.firstChild.innerHTML = cellInput.value;
                            }else if(res.code == 400){
                                this.$message.error(res.msg);
                            }else{
                                it.$message.error('编辑失败，请稍后再试');
                            }
                        })

                    };
                }
            },
            childrenChange(val){
                this.getListData(val)

            },
            handleClick(tab, event) {
                //console.log(tab, event);
            },
            searBtclick(oData) {
                if (oData.action == "add") {
                    this.isShowPopup.addCategory = true;
                }
            },
            selectionChange(selection) {
                //console.log(selection, 555);
            },
            formatter(row, column, cellValue) {
                if (column.property == 'status') {
                    let a = ["禁用", '启用']
                    return a[cellValue];
                }
                return cellValue;
            },
            cellclassname(obj) {
                if (obj.columnIndex == "0") {
                    // return "pl20";
                }
            },
            headercellclassname(obj) {
                if (obj.columnIndex == 0) {
                    // return "pl20";
                }
            },
            tablerowClick(obj) {
                if (obj.type == "edit") {
                    this.isShowPopup.addbranch = true;
                }
                if (obj.type == "del") {
                    this.isShowPopup.deleteInfor = true;
                    this.isdelInfo.data.id=obj.rowData.id
                    this.isdelInfo = Object.assign({}, this.isdelInfo);
                }

            }
        },
        watch: {
            activeTable: {
                handler(newData, oldData) {
                    this.getListData();
                },
                deep: true
            },
        }

    }
</script>
<style>
    .containerBox .addItem{
        cursor: pointer;
        display: inline-block;
        font-size: 14px;
        color: #fff;
        background:#1881BF ;
        border-radius: 20px;
        padding: 4px 18px;
    }
    .containerBox .addItem i{
        margin-right: 5px;
    }
    .containerBox .insertItem{
        margin-left: 20px;
        background: #fff;
        border: 1px #C3C9D5 solid;
        color: #3A3A3A;
    }
</style>
