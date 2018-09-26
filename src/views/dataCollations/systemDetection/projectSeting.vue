<template>
    <div class="PopupPage">
        <el-tabs v-model="activeTableName" type="card" @tab-click="handleClick">
            <el-tab-pane label="抄表数管理" name="first">
                <div class="quotatool clear">
                    <div class="leftItemBox fl">能耗类型
                        <el-select style="width: 90px;margin-left: 10px" v-model="value" placeholder="请选择">
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>
                <div class="quotaSetList">
                    <el-table
                        :data="meterReadingTable.tBody"
                        stripe
                        :cell-class-name="fstyle"
                        @cell-dblclick="doublecl"
                        style="width: 100%">
                        <el-table-column v-for="(tit,index) in meterReadingTable.tHead" :key="index"
                                         :prop="tit.field"
                                         :label="tit.name"
                                         :width="tit.width?tit.width:''">
                        </el-table-column>
                    </el-table>
                </div>
            </el-tab-pane>
            <el-tab-pane label="基准值管理" name="second">
                <div class="quotatool clear">
                    <div class="leftItemBox fl">电耗类型
                        <el-select style="width: 90px;margin-left: 10px" v-model="value" placeholder="请选择">
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="leftItemBox fl">拟合方式
                        <el-select style="width: 90px;margin-left: 10px" v-model="value" placeholder="请选择">
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="leftItemBox fl">假日用电系数
                        <el-input style="width: 60px;margin-left: 10px" v-model="input" placeholder="输入"></el-input>
                    </div>
                </div>
                <div class="quotaSetList">
                    <el-table
                        :data="referenceValueTable.tBody"
                        stripe
                        :cell-class-name="fstyle"
                        @cell-dblclick="doublecl"
                        style="width: 100%">
                        <el-table-column v-for="(tit,index) in referenceValueTable.tHead" :key="index"
                                         :prop="tit.field"
                                         :label="tit.name"
                                         :width="tit.width?tit.width:''">
                        </el-table-column>
                    </el-table>
                </div>

            </el-tab-pane>
            <el-tab-pane label="定额数据" name="third">
                <div style="padding-top: 0" class="quotaSetList">
                    <el-table
                        :data="QuotaDataTable.tBody"
                        stripe
                        :cell-class-name="fstyle"
                        @cell-dblclick="doublecl"
                        style="width: 100%">
                        <el-table-column v-for="(tit,index) in QuotaDataTable.tHead" :key="index"
                                         :prop="tit.field"
                                         :label="tit.name"
                                         :width="tit.width?tit.width:''">
                        </el-table-column>
                    </el-table>
                </div>
            </el-tab-pane>
            <el-tab-pane label="科室定额" name="fourth">
                <div class="quotatool clear">
                    <div class="leftItemBox fl">选择科室
                        <el-select style="width:150px;margin-left: 10px" v-model="value" placeholder="请选择">
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>
                <div class="quotaSetList">
                    <el-table
                        :data="secTionOfficeTable.tBody"
                        stripe
                        :cell-class-name="fstyle"
                        @cell-dblclick="doublecl"
                        style="width: 100%">
                        <el-table-column v-for="(tit,index) in secTionOfficeTable.tHead" :key="index"
                                         :prop="tit.field"
                                         :label="tit.name"
                                         :width="tit.width?tit.width:''">
                        </el-table-column>
                    </el-table>
                </div>
            </el-tab-pane>
        </el-tabs>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="saveSet">保 存</el-button>
            </span>
    </div>
</template>
<script>
    export default {
        name: 'popupbox',
        data() {
            return {
                input:"",
                activeTableName: 'first',
                centerDialogVisible: true,
                dialogVisible: false,
                options: [{
                    value: '选项1',
                    label: '电'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                value: '选项1'
            }
        },
        props: {
            meterReadingTable : {
                type: Object,
                default: function() {
                    return {
                        tHead:[{
                                name: '年份',
                                field: "itemName",
                                width: 60,
                            }, {
                                name: '类型',
                                field: "type",
                                width: 60,
                            }, {
                                name: '一月',
                                field: "jan",
                                width: 60,
                            }, {
                                name: '二月',
                                field: "feb",
                                width: 60,
                            }, {
                                name: '三月',
                                field: "mar",
                                width: 60,
                            }, {
                                name: '四月',
                                field: "apr",
                                width: 60,
                            }, {
                                name: '五月',
                                field: "may",
                                width: 60,
                            }, {
                                name: '六月',
                                field: "jun",
                                width: 60,
                            }, {
                                name: '七月',
                                field: "jul",
                                width: 60,
                            }, {
                                name: '八月',
                                field: "aug",
                                width: 60,
                            }, {
                                name: '九月',
                                field: "sep",
                                width: 60,
                            }, {
                                name: '十月',
                                field: "oct",
                                width: 60,
                            }, {
                                name: '十一月',
                                field: "nov",
                                width: 60,
                            }, {
                                name: '十二月',
                                field: "dec",
                                width: 60,
                            }, {
                                name: '合计',
                                field: "total",
                            }],
                        tBody:[{
                            itemName: 2018,
                            type:"电(kWh)",
                            jan: 0,
                            feb: 0,
                            mar: 0,
                            apr: 0,
                            may: 0,
                            jun: 0,
                            jul: 0,
                            aug: 0,
                            sep: 0,
                            nov: 0,
                            oct: 0,
                            dec: 0,
                            total: 0

                        }, {
                            itemName: 2017,
                            type:"电(kWh)",
                            jan: 0,
                            feb: 0,
                            mar: 0,
                            apr: 0,
                            may: 0,
                            jun: 0,
                            jul: 0,
                            aug: 0,
                            sep: 0,
                            nov: 0,
                            oct: 0,
                            dec: 0,
                            total: 0
                        }, {
                            itemName: 2016,
                            type:"电(kWh)",
                            jan: 0,
                            feb: 0,
                            mar: 0,
                            apr: 0,
                            may: 0,
                            jun: 0,
                            jul: 0,
                            aug: 0,
                            sep: 0,
                            nov: 0,
                            oct: 0,
                            dec: 0,
                            total: 0
                        }]

                    }
                }
            },
            referenceValueTable : {
                type: Object,
                default: function() {
                    return {
                        tHead:[ {
                            name: '',
                            field: "kong",
                            width: 80,
                        }, {
                            name: '一月',
                            field: "jan",
                            width: 60,
                        }, {
                            name: '二月',
                            field: "feb",
                            width: 60,
                        }, {
                            name: '三月',
                            field: "mar",
                            width: 60,
                        }, {
                            name: '四月',
                            field: "apr",
                            width: 60,
                        }, {
                            name: '五月',
                            field: "may",
                            width: 60,
                        }, {
                            name: '六月',
                            field: "jun",
                            width: 60,
                        }, {
                            name: '七月',
                            field: "jul",
                            width: 60,
                        }, {
                            name: '八月',
                            field: "aug",
                            width: 60,
                        }, {
                            name: '九月',
                            field: "sep",
                            width: 60,
                        }, {
                            name: '十月',
                            field: "oct",
                            width: 60,
                        }, {
                            name: '十一月',
                            field: "nov",
                            width: 60,
                        }, {
                            name: '十二月',
                            field: "dec",
                            width: 60,
                        }, {
                            name: '合计',
                            field: "total",
                        }],
                        tBody:[{
                            kong:"基准(kWh)",
                            jan: 0,
                            feb: 0,
                            mar: 0,
                            apr: 0,
                            may: 0,
                            jun: 0,
                            jul: 0,
                            aug: 0,
                            sep: 0,
                            nov: 0,
                            oct: 0,
                            dec: 0,
                            total: 0

                        }, {
                            kong:"温度(℃)",
                            jan: 0,
                            feb: 0,
                            mar: 0,
                            apr: 0,
                            may: 0,
                            jun: 0,
                            jul: 0,
                            aug: 0,
                            sep: 0,
                            nov: 0,
                            oct: 0,
                            dec: 0,
                            total: 0
                        }, {
                            kong:"其他",
                            jan: 0,
                            feb: 0,
                            mar: 0,
                            apr: 0,
                            may: 0,
                            jun: 0,
                            jul: 0,
                            aug: 0,
                            sep: 0,
                            nov: 0,
                            oct: 0,
                            dec: 0,
                            total: 0
                        }]

                    }
                }
            },
            QuotaDataTable : {
                type: Object,
                default: function() {
                    return {
                        tHead:[{
                            name: '年份',
                            field: "itemName",
                            width: 60,
                        }, {
                            name: '类型',
                            field: "type",
                            width: 60,
                        }, {
                            name: '一月',
                            field: "jan",
                            width: 60,
                        }, {
                            name: '二月',
                            field: "feb",
                            width: 60,
                        }, {
                            name: '三月',
                            field: "mar",
                            width: 60,
                        }, {
                            name: '四月',
                            field: "apr",
                            width: 60,
                        }, {
                            name: '五月',
                            field: "may",
                            width: 60,
                        }, {
                            name: '六月',
                            field: "jun",
                            width: 60,
                        }, {
                            name: '七月',
                            field: "jul",
                            width: 60,
                        }, {
                            name: '八月',
                            field: "aug",
                            width: 60,
                        }, {
                            name: '九月',
                            field: "sep",
                            width: 60,
                        }, {
                            name: '十月',
                            field: "oct",
                            width: 60,
                        }, {
                            name: '十一月',
                            field: "nov",
                            width: 60,
                        }, {
                            name: '十二月',
                            field: "dec",
                            width: 60,
                        }, {
                            name: '合计',
                            field: "total",
                        }],
                        tBody:[{
                            itemName: 2018,
                            type:"电(kWh)",
                            jan: 0,
                            feb: 0,
                            mar: 0,
                            apr: 0,
                            may: 0,
                            jun: 0,
                            jul: 0,
                            aug: 0,
                            sep: 0,
                            nov: 0,
                            oct: 0,
                            dec: 0,
                            total: 0

                        }, {
                            itemName: 2017,
                            type:"电(kWh)",
                            jan: 0,
                            feb: 0,
                            mar: 0,
                            apr: 0,
                            may: 0,
                            jun: 0,
                            jul: 0,
                            aug: 0,
                            sep: 0,
                            nov: 0,
                            oct: 0,
                            dec: 0,
                            total: 0
                        }, {
                            itemName: 2016,
                            type:"电(kWh)",
                            jan: 0,
                            feb: 0,
                            mar: 0,
                            apr: 0,
                            may: 0,
                            jun: 0,
                            jul: 0,
                            aug: 0,
                            sep: 0,
                            nov: 0,
                            oct: 0,
                            dec: 0,
                            total: 0
                        }]

                    }
                }
            },
            secTionOfficeTable : {
                type: Object,
                default: function() {
                    return {
                        tHead:[{
                            name: '年份',
                            field: "itemName",
                            width: 60,
                        }, {
                            name: '类型',
                            field: "type",
                            width: 60,
                        }, {
                            name: '一月',
                            field: "jan",
                            width: 60,
                        }, {
                            name: '二月',
                            field: "feb",
                            width: 60,
                        }, {
                            name: '三月',
                            field: "mar",
                            width: 60,
                        }, {
                            name: '四月',
                            field: "apr",
                            width: 60,
                        }, {
                            name: '五月',
                            field: "may",
                            width: 60,
                        }, {
                            name: '六月',
                            field: "jun",
                            width: 60,
                        }, {
                            name: '七月',
                            field: "jul",
                            width: 60,
                        }, {
                            name: '八月',
                            field: "aug",
                            width: 60,
                        }, {
                            name: '九月',
                            field: "sep",
                            width: 60,
                        }, {
                            name: '十月',
                            field: "oct",
                            width: 60,
                        }, {
                            name: '十一月',
                            field: "nov",
                            width: 60,
                        }, {
                            name: '十二月',
                            field: "dec",
                            width: 60,
                        }, {
                            name: '合计',
                            field: "total",
                        }],
                        tBody:[{
                            itemName: 2018,
                            type:"电(kWh)",
                            jan: 0,
                            feb: 0,
                            mar: 0,
                            apr: 0,
                            may: 0,
                            jun: 0,
                            jul: 0,
                            aug: 0,
                            sep: 0,
                            nov: 0,
                            oct: 0,
                            dec: 0,
                            total: 0

                        }, {
                            itemName: 2017,
                            type:"电(kWh)",
                            jan: 0,
                            feb: 0,
                            mar: 0,
                            apr: 0,
                            may: 0,
                            jun: 0,
                            jul: 0,
                            aug: 0,
                            sep: 0,
                            nov: 0,
                            oct: 0,
                            dec: 0,
                            total: 0
                        }, {
                            itemName: 2016,
                            type:"电(kWh)",
                            jan: 0,
                            feb: 0,
                            mar: 0,
                            apr: 0,
                            may: 0,
                            jun: 0,
                            jul: 0,
                            aug: 0,
                            sep: 0,
                            nov: 0,
                            oct: 0,
                            dec: 0,
                            total: 0
                        }]

                    }
                }
            },
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            },
            handleClose(done) {
                this.$confirm('确认关闭吗？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {});
            },
            saveSet() {
                this.$confirm('确认保存吗？')
                    .then(_ => {
                        let data = document.querySelectorAll(".quotaSetList tbody tr");
                        let postData = {
                            electricity: [],
                            water: [],
                            air: []
                        }
                        let dateName = ["electricity", "water", "air"]
                        data.forEach(function(v, i) {
                            v.childNodes.forEach(function(val, index) {
                                if (index != 0 && index != 13) {
                                    postData[dateName[i]].push(val.firstChild.innerHTML)
                                }
                            })
                        })
                        this.$emit("posdata", postData)
                        this.centerDialogVisible = false;
                    })
                    .catch(_ => {});
            },
            doublecl(row, column, cell, event) {
                if (column.label != "月份" && column.label != "合计") {
                    let value_event = cell.firstChild.innerHTML
                    let cellInput = document.createElement("input");
                    cellInput.value = value_event;
                    cellInput.setAttribute("class", "input_sty")
                    cellInput.setAttribute("type", "text");
                    cellInput.style.border = 'none';
                    cellInput.style.outline = 'none';
                    cellInput.style.textAlign = 'center';
                    cellInput.style.textDecoration = 'underline';
                    cellInput.style.width = "100%";
                    cellInput.style.height = "100%";
                    cellInput.style.position = "absolute";
                    cellInput.style.top = "0";
                    cellInput.style.left = "0";
                    var cellabc = cell
                    console.log(cellabc);
                    cellabc.appendChild(cellInput);
                    cellInput.focus()
                    cellInput.onblur = function() {
                        cell.removeChild(cellInput);
                        cell.firstChild.innerHTML = cellInput.value;
                        let data = cell.parentNode;
                        let total = 0;

                        data.childNodes.forEach(function(val, index) {
                                  if (index != 0 && index != 13) {
                                      total += parseInt(val.firstChild.innerHTML);
                                  }
                              })


                        data.childNodes[13].firstChild.innerHTML = total;


                    };
                }
            },
            fstyle(i) {
                if (i.columnIndex == 0) {
                    return "lee";
                }

            }
        },
        components: {

        }

    }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .PopupPage {}

    .PopupPage .quotaset {
        position: relative;
        top: -2px;
        font-size: 12px;
    }

    .PopupPage .el-dialog__title {
        color: #fff;
    }

    .PopupPage .el-dialog__header {
        color: #fff;
        background: #1881BF;
        padding: 0;
        height: 36px;
        line-height: 36px;
        text-align: left;
        padding-left: 30px;
    }

    .PopupPage .el-dialog__headerbtn {
        top: 11px;
    }

    .PopupPage .el-dialog__headerbtn i {
        color: #fff;
    }

    .PopupPage .el-dialog__headerbtn:hover i {
        color: #fff;
    }

    .PopupPage .quotatool .leftItemBox {
        color: #3A3A3A;
        font-size: 14px;
    }

    .PopupPage .quotatool .leftItemBox select {
        border: 1px #1881BF solid;
        width: 80px;
        height: 24px;
        border-radius: 15px;
        padding-left: 10px;
        color: #1881BF;
        font-size: 14px;
        outline: none;
        cursor: pointer;
    }

    .PopupPage .quotatool .rightItemBox span {
        width: 49%;
        display: block;
        padding-left: 10px;
        box-sizing: border-box;
        cursor: pointer;
    }

    .el-table td,
    .el-table th.is-leaf {
        border: none;
    }

    .el-table td {
        font-size: 12px;
        color: #838383;
        position: relative;
    }

    .el-table th.is-leaf {
        background: rgba(241, 241, 241, 1);
        font-size: 14px;
        font-weight: normal;
        color: #252525;
    }

    .PopupPage .quotaSetList {
        margin-bottom: 40px;
        padding-top: 23px;
    }

    .PopupPage .el-table .cell {
        padding-left: 0;
        padding-right: 0;
        text-align: center;
    }
    .PopupPage .el-button--small {
        padding: 0;
        height: 24px;
        width: 79px;
        line-height: 15px;
        border-radius: 15px;
        font-size: 14px;
    }

    .PopupPage .el-button+.el-button {
        margin-left: 46px;
    }
    .PopupPage .el-table td{
        color: #555555;
    }
    .PopupPage .el-table--striped .el-table__body tr.el-table__row--striped td{
        background: rgba(247,251,252,1);
    }
    .PopupPage .el-table--small td{
        padding: 8px 0;
    }
    .PopupPage .dialog-footer{
        display: block;
        text-align: center;
    }
    .PopupPage .leftItemBox{
        margin-right: 40px;
    }
    .PopupPage .leftItemBox .el-input__inner{
        height: 28px;
        line-height: 28px;
        border-radius: 15px;
        border: 1px #A1A1A1 solid;
        background: #fff;
    }

</style>
