<template>
    <div class="tabs-list">
        <div class="item"
             :style="itemStyle"
             v-for="(item, index) of options.dataArr"
             :key="index"
             :class="{'item-active': item.checked}"
             @click="tabsClick(item)">
            <i class="icon" :class="item.icon"
               v-if="options.itemShowIcon"></i>
            <a class="item-text">
                {{ item.text}}
            </a>
        </div>
    </div>
</template>

<script>
    /** Author  zyh
     *  分离按钮组
     *  使用指南：提供自定义宽高的容器，按钮为分离，宽度等分
     *  options: {
     *      radius: number,
     *      bgColor: string             //blue, white, gray
     *      itemShowIcon: boolean,
     *      margin: nubmer , //按钮间距
     *      styleWidth: string | number,  //monospaced:等宽， auto: 按文本自适应. 或者具体数值
     *      dataArr: [
     *          {
     *              text: string,
     *              key: string,
     *              checked: boolean,
     *              icon: ""
     *          }
     *      ]
     *  }
     */
    
    export default {
        name: "vTabsList",
        props: ['options'],
        data(){
            return {
                itemStyle: "",
            }
        },
        created(){
        },
        mounted(){
            this.init()
        },
        methods: {
            init(){
                if(this.options && this.options.dataArr &&  this.options.dataArr.length){
                    
                    if(typeof this.options.styleWidth === "number"){
                        //固定宽度值
                        this.itemStyle = "width:" + this.options.styleWidth + "px;";
                    }else if(this.options.styleWidth === 'monospaced'){
                        //等宽
                        let len = this.options.dataArr.length;
                        this.itemStyle =
                            "width:" + (this.$el.offsetWidth - 2 * len) / len + "px;"
                    }else{
                        //文本自适应宽度
                        this.itemStyle = "padding:0 10px;"
                    }
                    //margin
                    this.options.margin && (this.itemStyle += "margin:0 " + this.options.margin/2  +"px;");
                    
                    
                    //radius
                    this.options.radius && (this.itemStyle += "border-radius:" + this.options.radius + "px;");
                    
                    //line-height
                    this.itemStyle += "line-height:" + this.$el.offsetHeight + "px";
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
    $bgBlueColor: #1881BF;
    $border: 1px solid #D2D2D2;
    $borderColor: #D2D2D2;
    
    .tabs-list{
        width: 100%;
        height: 100%;
        
        .item{
            height: 100%;
            box-sizing: border-box;
            border: $border;
            float: left;
            text-align: center;
            cursor: pointer;
        }
        .item-active{
            background: $bgBlueColor;
            color: #fff;
        }
    }

    .tabs-list:after{
        content: "1";
        width: 100%;
        height: 0;
        clear: both;
        display: none;
     }
</style>
