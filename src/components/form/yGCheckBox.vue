<template>
    <el-form-item :label="label" :prop="currentProp" :label-width="formLabelWidth?formLabelWidth:'120px'">
         <el-checkbox-group style="min-width:50px " v-model="currentValue" @change="haChange">
            <template v-for="opt of currentOptions">
              <!--  <el-radio :label="opt.value">{{opt.label}}</el-radio>-->
                <el-checkbox :label="opt.value">{{opt.label}}</el-checkbox>
            </template>
         </el-checkbox-group>
    </el-form-item>
</template>
<script>
    export default {
        data() {
            return {
                currentValue: this.value,
                currentProp: this.prop,
                currentOptions: this.options,
                currentIndex: this.index,
                currentParent: this.parent
            }
        },
        props: ['value', 'label', 'prop', 'options', 'formLabelWidth', 'index', 'parent'],
        methods: {
            haChange(value) {
                this.currentValue = value;
                let data =[]
                for(let ite in value){
                     data.push(value[ite])
                }
                this.$emit('ygForm', {
                    prop: this.currentProp,
                    value: data,
                    index: this.currentIndex,
                    parent: this.currentParent
                });
            },
        },
        watch: {
            options: {
                handler(newData, oldData) {
                    this.currentOptions = newData;
                },
                deep: true
            },
          /*  value: {
                handler(newData, oldData) {
                    this.currentValue = newData;
                },
                deep: true
            },*/
        }
    }
</script>

<style scoped>

</style>
