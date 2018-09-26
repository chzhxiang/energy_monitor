//common
import Vue from "vue";

Vue.directive("form-valid", {
    bind: function () {},
    inserted: function (el, binding) {
    },
    update: function () {},
    componentUpdated: function () {},
    unbind: function () {}
})

/**
 * 表单空验证
 * binding： {
 *     emptyText:           "提示文本",    //默认为此项不能为空
 *     border: boolean      是否标记红色边框
 * }
 */
Vue.directive("form-required", {
    bind: function (el, binding, vNode) {},
    inserted: (el, binding) => {
        if(!el || el.nodeName !== "INPUT") return;

        //数据状态
        let value = null;
        let oldBorderStyle = getComputedStyle(el).border,
            elHeight = parseFloat(getComputedStyle(el).height),
            parentDom = el.offsetParent,
            parentDomPosition = parentDom && getComputedStyle(parentDom).position,
            parentDomOverflow = parentDom && getComputedStyle(parentDom).overflow;
        //插入dom
        let newDom = document.createElement("p");
        //正则校验
        let regExpResult = null;

        //失去焦点
        el.onblur = () => {
            value = el.value.replace(/ /g, "");
            //regExpResult = regExpCheck(value, binding.value.regExp);
            //为空
            if (!value) {
                warnStatus();
            }else{
                //不为空
                recover()
            }
        }

        //键盘输入
        el.onkeyup = () => {
            value = el.value.replace(/ /g, "");
            //regExpResult = regExpCheck(value, binding.value.regExp);
            if(value){
                //不为空
                recover()
            }else{
                warnStatus();
            }
        }

        //提示状态
        function warnStatus(){
            binding.value.border && (el.style.border = "1px solid red");
            newDom.innerHTML = binding.value.emptyText ? binding.value.emptyText : "此项不能为空";
            newDom.style.color = "red";
            newDom.style.position = "absolute";
            newDom.style.left = "2px";
            newDom.style.top = (elHeight + 2)+"px";
            newDom.style.fontSize = "12px";
            newDom.style.lineHeight = 1;
            parentDomPosition !== "absolute" && (parentDom.style.position = "absolute");
            parentDomOverflow !== "visible" && (parentDom.style.overflow = "visible");
            parentDom.appendChild(newDom);
        }

        //恢复原始状态
        function recover(){
            parentDom.removeChild(newDom);
            binding.value.border && (el.style.border = oldBorderStyle);
        }

        //正则验证
        function regExpCheck(valString, regExp){
            if(!valString || !regExp) return false;
            return regExp.test(valString)
        }
    }
})
