<template>
    <el-form-item :label="label" :prop="prop" :label-width="formLabelWidth?formLabelWidth:'120px'">
        <el-input :value="currentValue" :disabled="currentDisabled" :type="currentType"
                  @change="haChange"></el-input>
    </el-form-item>
</template>

<script>
    export default {
        data() {
            return {
                currentValue: this.value,
                currentProp: this.prop,
                currentDisabled: this.disabled || false,
                currentType: this.type || 'text',
                currentIndex: this.index,
                currentParent: this.parent
            }
        },
        props: ['value', 'label', 'prop', 'disabled', 'type', 'formLabelWidth', 'index', 'parent'],
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

<style>
.popupWindow  textarea{
    resize: none;
    border-radius: 4px;
    background: rgba(247,247,247,1);
    border-color: rgba(247,247,247,1);
}
</style>
