<template>
    <div
        class="v-button"
        @click="click"
        :class="type"
        :style="buttonStyle">
        <slot name="icon"></slot>
        {{ text }}
    </div>
</template>

<script>
    /**Author zyh
     * text   文本内容
     * type   按钮风格类型  white  blue
     * padding: ""    //带上px
     * width: ""
     */
    export default {
        name: "vButton",
        props: ['text', "type", 'padding', 'width'],
        created(){
            this.padding && (this.buttonStyle = "padding:" + this.padding);
            this.width && (this.buttonStyle += ";width:" + this.width);
        },
        data(){
            return{
                buttonStyle: ""
            }
        },
        methods: {
            click(){
                this.$emit("click")
            }
        }
        
    }
</script>

<style scoped lang="scss">
    $defaultFontColor: #3a3a3a;
    $defaultGrayBorder: #C3C9D5;
    $defaultGrayBg: #F7F7F7;
    $bgBlueColor: #1881BF;
    
    $defaultBgColor: rgb(241, 241, 241);
    
    .v-button{
        display: inline-block;
        padding: 0 15px;
        line-height: 30px;
        height: 30px;
        border-radius: 30px;
        /*default*/
        background: $defaultBgColor;
        color: #666;
        cursor: pointer;
        box-sizing: border-box;
        text-align: center;
    }
    
    //风格类型
    .v-button.blue{
        background: $bgBlueColor;
        color: #fff;
    }

    .v-button.white{
        color: $defaultFontColor;
        background: #fff;
        border: 1px solid $defaultGrayBorder;
    }
    .v-button.white:hover{
        background: #f2f2f2;
    }
</style>
