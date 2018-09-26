<template>
    <el-form-item :label="label" :prop="prop" :label-width="formLabelWidth?formLabelWidth:'120px'" class="yigeng">
        <el-select :value="currentValue" :disabled="currentDisabled" :placeholder="currentPlaceholder" filterable multiple
                   style="width: 100%"
                   @change="haChange">
            <template v-for="opt of currentOptions">
                <el-option :label="opt.label" :value="opt.value"></el-option>
            </template>
        </el-select>
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
                currentPlaceholder: this.placeholder || '请选择',
                currentIndex: this.index,
                currentParent: this.parent
            }
        },
        props: ['value', 'label', 'prop', 'options', 'placeholder', 'formLabelWidth', 'index', 'parent','disabled'],
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
    .yigeng {
        min-height: 36px !important;
        height: 100% !important;
    }
</style>
