<template>
    <div ref="tabsBtn" class="v-tabs-btn"
         :style="containerRadius"
         :class="options.bgColor">
        
        <div class="item"
             :class="{
             'tabs-active' : item.checked,
             'no-border-bottom': activeItemHasBorderBottom}"
           :style="itemStyle"
           v-for="(item, index) of options.dataArr"
           :key="index"
           @click="tabsClick(item)"
        >
            <i class="icon"
               :class="item.icon"
               v-if="options.itemShowIcon"></i>
            <a class="itme-text">{{ item.text }}</a>
        </div>
    </div>
</template>
<script>
    /**Author  zyh
     * 使用指南：提供自定义宽高的容器，按钮为等分
        参数列表：
        options: {
            radius: string,                //按钮条两头为圆角度数
            bgColor: string                //'blue', 'white', 'gray'
            activeItemHasBorderBottom: boolean, 激活项是否显示下边框
            itemShowIcon: boolean,         是否显示图标
            styleWidth: string | number,  //monospaced:等宽， auto: 按文本自适应. 或者具体数值
            dataArr: [
                {
                    text: string,
                    key: string,
                    checked: boolean,
                    icon: ""    //每项自定义图标名称，
                }
                ...
            ]
        }
        
        回调：@checked
    */
    export default {
        name: "vTabsBtn",
        props: ["options"],
        data(){
            return{
                itemStyle: "",
                containerRadius: "border-radius:",
                activeItemHasBorderBottom: false
            }
        },
        created(){
        },
        mounted(){
            this.init();
        },
        methods: {
            init(){
                if(this.options && this.options.dataArr &&  this.options.dataArr.length){
                    
                    if(typeof this.options.startsWith === "number"){
                        //固定宽
                        this.itemStyle =
                            "width:" + this.options.startsWith + "px;"
                    }else if(this.options.styleWidth === 'monospaced'){
                        //等分
                        this.itemStyle =
                            "width:" + (this.$el.offsetWidth - 2) / this.options.dataArr.length + "px;"
                    }else{
                        //文本自适应
                        this.itemStyle = "padding:0 10px;"
                    }
                    
                    //line-height
                    this.itemStyle += "line-height:" + this.$el.offsetHeight + "px";
        
                    //radius
                    this.options.radius && (this.containerRadius += this.options.radius);
        
                    //activeItemHasBorderBottom
                    this.activeItemHasBorderBottom = this.options.activeItemHasBorderBottom;
        
                }else{
                    this.options = [];
                    //err
                    console.error("components --> vTabsBtn params type error")
                }
            },
            
            tabsClick(item){
                if(item.checked) return;
                //callback
                this.$emit('checked', item);
                
                //updateChecked
                this.updateChecked(item);
            },
            updateChecked: function(item){
                for(let i = 0, len = this.options.dataArr.length; i < len; i++){
                    this.options.dataArr[i].checked = false;
                }
               
                item.checked = true;
                
                //主动更新view
                this.$forceUpdate();
            }
        }
    }
</script>

<style scoped lang="scss">
    
    $border: 1px solid #C3C9D5;
    $borderColor: #C3C9D5;
    
    $bgBlueColor: #1881BF;
    $bgWhiteColor: #fff;
    $bgGrayColor: #F5F9F9;
    $bgGrayBorderColor: #EAEAEA;
    
    $fontC3: #333;
    
    .v-tabs-btn{
        width: 100%;
        height: 100%;
        border: $border;
        border-bottom: 0;
        overflow: hidden;
        box-sizing: border-box;
        
        .item{
            float: left;
            text-align: center;
            line-height: 2;
            color: #3A3A3A;
            cursor: pointer;
            white-space: nowrap;
            overflow: hidden;
            height: 100%;
            border-bottom: $border;
            box-sizing: border-box;
            position: relative;
    
        }.tabs-active{
             color: #fff;
         }
    }
    
    .v-tabs-btn .item:not(:last-child):after{
        content:"";
        width: 1px;
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        background: $borderColor;
    }
    
    .v-tabs-btn.blue .tabs-active{
        background: $bgBlueColor;
    }

    .v-tabs-btn.white .tabs-active{
        background: $bgWhiteColor;
        color: $fontC3
    }
    
    
    .v-tabs-btn.gray{
        background: $bgGrayColor;
        border: 1px solid $bgGrayBorderColor;
        border-bottom: 0;
    
        .item{
            border-bottom-color: $bgGrayBorderColor;
        }
        
        .tabs-active{
            color: $fontC3;
            background: #fff;
        }
    }

    .v-tabs-btn.gray .tabs-active{
        color: $fontC3
    }
    /*伪类 线条颜色*/
    .v-tabs-btn.gray .item:not(:last-child):after{
        background: $bgGrayBorderColor
    }

    .v-tabs-btn .tabs-active.no-border-bottom{
        border-bottom: 0;
    }
</style>
