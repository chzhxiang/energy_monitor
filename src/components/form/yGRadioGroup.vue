<template>
    <el-form-item class="sradiogroup" :label="label" :prop="currentProp" :label-width="formLabelWidth?formLabelWidth:'120px'">
        <el-radio-group style="min-width:50px " :disabled="currentDisabled" @change="haChange" v-model="currentValue">
            <template v-for="opt of currentOptions">
                <el-radio :label="opt.value">{{opt.label}}</el-radio>
            </template>
        </el-radio-group>
    </el-form-item>
</template>
<script>
    export default {
        data() {
            return {
                currentValue: this.value,
                currentProp: this.prop,
                currentOptions: this.options,
                currentDisabled: this.disabled || false,
                currentIndex: this.index,
                currentParent: this.parent
            }
        },
        props: ['value', 'label', 'prop', 'disabled','options', 'formLabelWidth', 'index', 'parent'],
        methods: {
            haChange(value) {
                this.currentValue = value;
                this.$emit('ygForm', {
                    prop: this.currentProp,
                    value: value,
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
            value: {
                handler(newData, oldData) {
                    this.currentValue = newData;
                },
                deep: true
            },
            disabled: {
                handler(newData, oldData) {
                    this.currentDisabled = newData;
                },
                deep: true
            }
        }
    }
</script>

<style scoped>

</style>
<style>
    .sradiogroup  .el-form-item__content{
        background: transparent !important;
    }
</style>
