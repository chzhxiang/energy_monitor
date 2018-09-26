<template>
    <div class="title-input-group u-title-input-group"
         :class="{
         'disabled': disabled,
         'no-border': showBorder,
         'gray': bgColor === 'gray'
         }">

        <!--title-->
        <p class="text"
           :style="titleTextStyle">
            <span class="red-star"
                  v-if="showRedStar">*</span>
            {{ titleText }}
        </p>

        <div class="input-container"
             :style="{width: inputWidth}">
            <!--输入框-->
            <div :style="{width: inputWidth, 'border-radius': radius}"
                 class="item text-input"
                 v-if="type === inputType.text">
                <input class="item text-ipt"
                       type="text"
                       v-model="inputVal"
                       :placeholder="placeholder">
            </div>

            <!--下拉框-->
            <div :style="{width: inputWidth, 'border-radius': radius}"
                 class=" item select-input"
                 v-if="type === inputType.select">
                <!--el-ui 根据需求增加配置-->
                <el-select
                    clearable
                    v-model="selectedValue"
                    filterable
                    :placeholder="placeholder"
                    @change="selectChanged">
                    <el-option
                        v-for="(item,index) in dataArr"
                        :key="item.value"
                        :value="item.value"
                        :label="item.label">
                    </el-option>
                </el-select>
            </div>

            <!--单选-->
            <div :style="{width: inputWidth, 'border-radius': radius}"
                 class=" item radio-input"
                 v-if="type === inputType.radio">
                <el-radio v-for="(item, index) in dataArr"
                          :key="index"
                    v-model="radioChecked"
                    :label="item.value"
                    @change="radioChanged(item)">{{ item.label }}</el-radio>
            </div>

            <!--复选-->
            <div :style="{width: inputWidth, 'border-radius': radius}"
                 class=" item checkbox-input"
                 v-if="type === inputType.checkbox">
                <h3>暂未添加类型</h3>
                <!---->
                <!---->
                <!---->
            </div>

            <!--搜索框-->
            <div :style="{width: inputWidth, 'border-radius': radius}"
                 class=" item search-input"
                 v-if="type === inputType.search">
                <i class="search-icon el-icon-search"
                   @click="searchClick"></i>
                <input
                    class="search-ipt text-ipt"
                    type="text"
                    v-model="inputVal"
                    @keyup="keyUpForSearch($event)"
                    :placeholder="placeholder"
                >
                <i class="clear-icon el-icon-close"
                   @click="clearSearchWords"></i>
            </div>
        </div>


        <!--禁用遮罩层-->
        <div class="disable-mark"></div>
    </div>
</template>

<script>
    //todo text 类型使用双向绑定  组件标签 v-model,可以额外增加回调
    /**    Author zyh
     *     type: "text|select|radio|checkbox|search",       string  按钮类型 this.inputType ，
     *     titleText: "",  string  标题文本
     *     titleTextAlign: "",
     *     titleTextWidth: "**px"     //默认按文本内容
     *     inputWidth: "**px",        //默认150
     *     inputHeight: ""            //默认30
     *     placeholder: "",           //text,select，search 类型有效
     *     showBorder: boolean,       //是否显示边框，默认显示
     *     bgColor: "gray"\"white"    //其他主题色可以增加配置
     *     dbEdit: boolean,           //双击编辑，仅text有效，暂未启用
     *     disabled: boolean          //是否可用  默认可用，false
     *     radius: "",                //圆角  默认4px
     *     inputValue: "",            //input -- v-model
     *     required: boolean
     *     dataArr: [                 //select，radio，checkbox有效
     *         {
     *             label: "",         //text
     *             value: "",
     *             default: boolean,  //默认选中项
     *         }
     *     ],
     *
     * @search   seacrh类型有效：点击图标、回车return ""
     * @changed  下拉框、单选、复选触发,return value
     */
    export default {
        name: "vTitleInputGroup",
        props: [
            'type',
            'titleText',
            'titleTextAlign',
            'inputWidth',
            'placeholder',
            'showBorder',
            'bgColor',
            'dbEdit',
            'disabled',
            'radius',
            'inputValue',
            'dataArr',
            'required',
            'titleTextWidth'
        ],
        data(){
            return {
                inputType: {
                    text: "text",
                    select: "select",
                    radio: "radio",
                    checkbox: "checkbox",
                    search: "search"
                },
                titleTextStyle: "",
                selectedValue: "",
                inputVal: this.inputValue,
                radioChecked: "",
                showRedStar: false,
                searchWords: ""
            }
        },
        created(){
            //console.log(this.dataArr)
            this.required && (this.showRedStar = true);
            this.initDataArr();
        },
        mounted(){
            //初始化样式
           this.initStyle();
        },
        methods: {
            initStyle(){
                //title width
                this.titleTextWidth && (this.titleTextStyle += "width:" + this.titleTextWidth);
                //text-align
                this.titleTextAlign && (this.titleTextStyle += ";text-align:" + this.titleTextAlign);
                // title width
                // console.log(this.titleTextStyle)
            },

            initDataArr(){
                if(!this.dataArr || this.dataArr && !this.dataArr.length) return;
                
                for(let i = 0, len = this.dataArr.length; i < len; i++){
                    if(this.dataArr[i].default){
                        if(this.type === this.inputType.radio){
                            this.radioChecked = this.dataArr[i].value;
                        }
                        else if(this.type === this.inputType.select){
                            this.selectedValue = this.dataArr[i].label
                        }
                        return;
                    }
                }
            },
            //搜索
            searchClick(){
                this.$emit("search", this.inputVal)
            },
            //清空
            clearSearchWords(){
                this.inputVal = ""
            },
            //回车搜索
            keyUpForSearch(event){
                if(event.keyCode === 13){
                    this.searchClick()
                }
            },
            //下拉框回调
            selectChanged(selectedValue){
                this.$emit("change", selectedValue);
                this.returnValue(selectedValue)
            },
            //单选回调
            radioChanged(radioChecked){
                this.$emit("change", radioChecked);
                this.returnValue(radioChecked.value)
            },
            //复选回调
            //返回数据绑定
            returnValue(result){
                this.$emit('input', result)
            }
        },
        watch: {
            inputVal: function(newVal, oldVal){
                // console.log(newVal, oldVal);
                //用于解决父组件调用子组件设置 v-model 双向绑定问题
                this.returnValue(newVal)
            }
        },
        beforeDestroy(){

        }
    }
</script>

<style scoped lang="scss">

    $defaultFontColor: #3a3a3a;
    $defaultGrayBorder: #C3C9D5;
    $defaultGrayBg: #F7F7F7;

    .text-ipt{
        padding: 0 10px;
        border: 0;
        outline: 0;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
    }

    .title-input-group{
        position: relative; //遮罩层用
        display: inline-block;
        width: auto;
        height: 30px;
        color: $defaultFontColor;

        .text{
            display: inline-block;
            height: 30px;               //默认宽度
            line-height: 30px;

            .red-star{
                color: red;
            }
        }

        .input-container{
            width: 150px;               //默认宽度
            height: 30px;
            float: right;
            position: relative;
            z-index: 1;
            border-radius: 3px;
            overflow: hidden;
            box-sizing: border-box;

            .item{
                width: 100%;
                overflow: hidden;
                border: 1px solid $defaultGrayBorder;
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                vertical-align: middle;
                box-sizing: border-box;
            }
        }

        /*搜索*/
        .search-input{
            position: relative;
            font-size: 18px;

            .text-ipt{
                padding:0 20px 0 30px;
            }

            .clear-icon,.search-icon{
                position: absolute;
                width: 14px;
                height: 14px;
                top: 50%;
                margin-top: -8px;
                cursor: pointer;
                opacity: 0.8;
            }

            .clear-icon{
                right: 10px;
                display: none;
            }

            .search-icon{
                left: 5px;
            }

        }

        .input-container:hover .search-input .clear-icon{
            display: block;
        }

        .disable-mark{
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            z-index: 2;
            cursor: not-allowed;
            display: none;
        }
    }

    //禁用
    .title-input-group.disabled{
        opacity: 0.5;

        .disable-mark{
            display: block;
        }
    }
    //灰色主题
    .title-input-group.gray{
        .input-container{
            .item.text-input,
            .item.select-input,
            .item.search-input{
                background: $defaultGrayBg;
            }

            .text-ipt{
                background: $defaultGrayBg;
            }
        }
    }
    //无边框
    .title-input-group.no-border{
        .input-container{
            .item{
                border: 0;
            }
        }
    }

</style>
