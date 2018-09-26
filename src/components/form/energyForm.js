import Vue from 'vue';
import YGBlank from './yGBlank.vue'
import YGInput from './yGInput.vue'
import YGSelect from './yGSelect.vue'
import YGSelectMultiple from './yGSelectMultiple.vue'
import YGUploadImg from './yGUploadImg.vue'
import YGRadioGroup from './yGRadioGroup.vue'
import YGCheckBox from './yGCheckBox.vue'
import YGUploadFile from './yGUploadFile.vue'

Vue.component('yg-blank',YGBlank);//空白间隔
Vue.component('yg-input',YGInput);//输入框
Vue.component('yg-select',YGSelect);//单选框
Vue.component('yg-select-multiple',YGSelectMultiple);//多选框
Vue.component('yg-radio-group',YGRadioGroup);//单选按钮
Vue.component('yg-check-box',YGCheckBox);//多选按钮
Vue.component('yg-upload-img',YGUploadImg);//上传图片
Vue.component('yg-upload-file',YGUploadFile);//上传文件



