<template>
    <div class="login-wrap">
        <!--title bg-->
        <div class="login-title"></div>
        
        <div class="login-main">
            <div class="login-type">
            <a class="item"
               :class="{'actived': currentLoginType === loginTypeEnum.user}"
               @click="loginTypeChange(loginTypeEnum.user)">账号登录</a>
            <a class="item"
               :class="{'actived': currentLoginType === loginTypeEnum.qrcode}"
               @click="loginTypeChange(loginTypeEnum.qrcode)">扫码登录</a>
        </div>
        
            <!--账号密码登录-->
            <div :class="{'fade-in': currentLoginType === loginTypeEnum.user}" class="user">
                <!--用户名-->
                <div class="form-input username"
                     :class="{
                         'actived': userFocus,
                         'empty' : usernameEmpty
                     }">
                    <div class="icon-box">
                        <i class="icon"></i>
                    </div>
                    <div class="ipt-box">
                        <input
                            @keyup="keyUpCheck($event)"
                            name="username"
                            ref="userInput"
                            type="text"
                            placeholder="用户名"
                            class="ipt"
                            v-model="ruleForm.username"
                            @focus="focused('user')"
                            @blur="blured('user')">
                    </div>
                    <p v-if="usernameEmpty"
                        class="empty position_a">用户名不能为空</p>
                </div>
                <!--密码-->
                <div class="form-input password"
                     :class="{
                         'actived': passwordFocus,
                         'empty' : passwordEmpty
                     }">
                    <div class="icon-box">
                        <i class="icon"></i>
                    </div>
                    <div class="ipt-box">
                        <input
                            @keyup="keyUpCheck($event)"
                            name="password"
                            type="password"
                            placeholder="密码"
                            class="ipt"
                            v-model="ruleForm.password"
                            @keydown="enterSubmit"
                            @focus="focused()"
                            @blur="blured()">
                    </div>
                    <p v-if="passwordEmpty"
                        class="empty position_a">密码不能为空</p>
                </div>
                <!--验证码-->
                <div class="form-input verification-code" v-if="showIdentifyCode">
                    <div class="icon-box">
                        <i class="icon"></i>
                    </div>
                    <input
                        class="item code-input ipt"
                        type="text"
                        :placeholder="codePlaceholder"
                        v-model="userInputCode"
                        :maxlength="identifyCodeLength"
                    />
                    <div @click="refresCode">
                        <div class="item code-area" title="点击刷新验证码">
                            <verification-code
                                :identify-code="identifyCode"
                                content-width="120"
                                content-height="42"
                            ></verification-code>
                        </div>
                        <div class="item refres-code" title="刷新">
                            <i class="el-icon-refresh"></i>
                        </div>
                    </div>
                </div>
    
                <p class="rember-pw"
                   :class="{checked: remember}"
                    @click="rememberClick">
                    <i class="check-box"></i>
                    记住密码
                </p>
                <p class="alter-pw float_r"
                   :class="{checked: remember}"
                   @click="rememberClick">
                    忘记密码
                </p>
                
                <p class="login-btn"
                   :class="{'not-allow': !isAllowSubmit}"
                   @click="submitForm">
                    <button class="btn">
                        登<i class="space"></i>录
                        <span
                            v-if="!isAllowSubmit">(
                            {{ showSeconds }}
                            )</span>
                    </button>
                </p>
            </div>

            <!--扫码登录-->
            <div :class="{'fade-in': currentLoginType === loginTypeEnum.qrcode}" class="qrcode">
                <div class="qrcode-box">
                    <i class="corner-border left-top"></i>
                    <i class="corner-border right-top"></i>
                    <i class="corner-border left-bottom"></i>
                    <i class="corner-border right-bottom"></i>
                    <div class="qrcode-area" ref="qrcodeArea">
                    </div>
                </div>
                <p class="download-app">
                    <i class="icon"></i>
                    打开
                    <a class="url">电工圈APP</a>
                    扫一扫登陆
                </p>
            </div>
        
        </div>
    
    </div>
</template>
<script>
//vue 二维码生成组件
import Storages from "../../utils/storages";
import QRCode from 'qrcodejs2'
import verificationCode from "../.././components/verificationCode.vue";
export default {
    components: {
        QRCode,
        verificationCode
    },
    data: function() {
        return {
            userFocus: false,
            usernameEmpty: false,
            passwordFocus: false,
            passwordEmpty: false,
            remember: false,
            loginInfo: '',
            ruleForm: {
                username: '',
                password: ''
            },
            loginTypeEnum: {
                user: "user",
                qrcode: "qrcode"
            },
            currentLoginType: "user",  //初始展示
            qrcodeEx: null,
            showIdentifyCode: false,   //是否显示图形验证码
            userInputCode: "",         //用户输入的验证码
            identifyCode: "",          //图形验证码
            passwordErrorCount: 3,     //密码错误次数出现图片验证码
            identifyCodeLength: 4,
            codePlaceholder: "",
            isAllowSubmit: true,
            interval: null,
            intervalCount: 3,            //限制再次提交时间 秒
            showSeconds: null,
            message: null
        }
    },
    created() {
        this.init();
        this.codePlaceholder = "请输入验证码";
    },
    mounted(){
        //this.$refs.userInput && this.$refs.userInput.focus();
    },
    methods: {
        focused(target){
            if(target === 'user'){
                this.userFocus = true;
                this.passwordFocus = false;
            }else{
                this.userFocus = false;
                this.passwordFocus = true;
            }
        },
        blured(target){
            if(target === 'user'){
                this.userFocus = false;
                this.usernameEmpty = this.ruleForm.username.length ? false : true;
            }else{
                this.passwordFocus = false;
                this.passwordEmpty = this.ruleForm.password.length ? false : true;
            }
        },
        rememberClick(){
            this.remember = !this.remember;
        },
        loginTypeChange(type){
            this.currentLoginType = type;
            
            if(type === this.loginTypeEnum.qrcode){
                this.$refs.qrcodeArea && this.qrcode(this.$refs.qrcodeArea)
            }else{
                this.clearQRCode();
            }
        },
        //生成二维码
        qrcode (qrcodeDom) {
            this.qrcodeEx = new QRCode(qrcodeDom, {
                width: 248,  // 设置宽度
                height: 248, // 设置高度
                text: 'http://energy.secom.com/api/common/getQrCode?math=radom123456test',
                colorDark : "#2d2d2d",
                colorLight : "#fefefe",
                correctLevel : QRCode.CorrectLevel.H
            });
        },
        //刷新二维码
        refreshQRCode(){
            let testUrl = ["https://baidu.com", 'https://www.qq.com/'];
            this.qrcodeEx && this.qrcodeEx.clear(); // 清除二维码
            //todo 测试代码
            let newUrl = testUrl[Math.random()*2^0];
            console.log("刷新了二维码:" , newUrl);
            //this.qrcodeEx.makeCode(newUrl)
        },
        //清除二维码
        clearQRCode(){
            this.qrcodeEx && this.qrcodeEx.clear();
            this.$refs.qrcodeArea && (this.$refs.qrcodeArea.innerHTML = '');
            this.qrcodeEx = null;
        },
        //刷新图形验证码
        refresCode(){
            if(this.showIdentifyCode){
                this.identifyCode = this.createRandomString(this.identifyCodeLength);
            }
        },
        createRandomString(len){
            let str = "";
            for(let i = 0; i < len; i++){
                //数字48-57 A 65-90  a 97-122
                let num = Math.random() * 123 ^ 0 + 48;
                if(num < 48 || num > 122 || num > 57 && num < 65 || num > 90 && num < 97){
                    i--;
                }else{
                    str += (String.fromCharCode(num))
                }
            }
            return str;
        },
        //校验验证码,去除大小写差异
        checkCode(){
            return (this.userInputCode.toLocaleLowerCase() === this.identifyCode.toLocaleLowerCase())
        },
        //是否显示图片验证码
        checkShowImgCode(isInit){
            let pwErr = Storages.getLocalStorage("pwErr");
            if(pwErr === null){
                !isInit && Storages.setLocalStorage("pwErr", 1)
                return false;
            }
            if(pwErr >= (this.passwordErrorCount - 1)){
                return true
            }else{
                !isInit && Storages.setLocalStorage("pwErr", pwErr += 1)
            }
            return false;
        },
        //
        init() {
            this.loginInfo = Storages.getLocalStorage("zy_loginInfo");
            this.remember = (this.loginInfo && this.loginInfo.loginstate);
            this.remember && (this.ruleForm = this.loginInfo.loginInfo);
            //是否显示图片验证码
            this.showIdentifyCode = this.checkShowImgCode(true);
            //生成验证码
            this.refresCode();
        },
        //回车提交
        enterSubmit(event){
            if(event.keyCode === 13){
                this.submitForm();
            }
        },
        submitForm() {
            if(!this.isAllowSubmit)return;
            
            if(!this.ruleForm.username) {
                this.errorInfo("用户名不能为空");
                this.usernameEmpty = true;
                return;
            };
            if(!this.ruleForm.password){
                this.errorInfo("密码不能为空");
                this.passwordEmpty = true;
                return;
            }
            //图片验证码校验
            if(this.showIdentifyCode && !this.checkCode()){
                // 图片验证码错误
                this.userInputCode = "";
                this.refresCode();
                this.errorInfo("图形验证码错误");
                return;
            }
    
            
            
            this.$axios.post(this.$url.login, {
                username: this.ruleForm.username,
                password: this.ruleForm.password
            }).then((res) => {
                //error
                if(res.msg){
                    this.loginError(res.msg);
                    this.errorInterval();
                }
                //success
                res.data.token && this.loginSuccess();
            }).catch((error) => {
                console.log(error);
            })
        },
        //错误倒计时
        errorInterval(){
            //限制连续提交
            this.isAllowSubmit = false;
            this.showSeconds = this.intervalCount;
            this.interval = setInterval(
                () => {
                this.showSeconds -= 1;
                if(this.showSeconds < 0){
                    this.showSeconds = this.intervalCount;
                    this.isAllowSubmit = true;
                    clearInterval(this.interval)
                }
            }, 1000)
        },
        //登录错误提示
        loginError(msg){
            this.errorInfo(msg);
            //错误次数记录
            //是否显示图片验证码
            this.showIdentifyCode = this.checkShowImgCode();
            //生成验证码
            this.refresCode();
        },
        loginSuccess(){
            this.loginInfo = {
                loginInfo: this.ruleForm,
                loginstate: this.remember
            }
            Storages.removeLocalStorage("pwErr");
            Storages.setLocalStorage("ms_username", this.ruleForm.username);
            Storages.setLocalStorage("zy_loginInfo", this.loginInfo);
            this.$store.state.userName = this.ruleForm.username;
            this.$router.push({ path: '/', name: 'index' });
        },
        //错误提示
        errorInfo(msg){
            this.message && this.message.close();
            this.message = this.$message({
                message: msg,
                type: "error",
                duration: 3000,
                center: true
            })
        },
        //输入检验
        keyUpCheck(event){
            let val = event.target.value.replace(/ /g,"");
            if(event.target.name === "username"){
                this.ruleForm.username = val;
                this.usernameEmpty = this.ruleForm.username.length ? false : true
            }else{
                this.ruleForm.password = val;
                this.passwordEmpty = this.ruleForm.username.length ? false : true
            }
        },
    },
    beforeDestroy(){
        //销毁二维码实例
        this.clearQRCode();
    }
}

</script>
<style scoped>

.login-wrap {
    position: relative;
    width: 100%;
    min-width: 1280px;
    min-height: 768px; /*768-80-40  ie空白*/
    height: 100%;
    background: url(../../../static/img/loginbg.jpg) no-repeat 0 0;
    background-size: 100% 100%;
    position: relative;
}

.login-wrap .login-type{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 50px;
    line-height: 50px;
    font-size: 18px;
}

.login-wrap .login-type .item{
    float: left;
    width: 50%;
    height: 50px;
    color: #D5E5FF;
    background: #03152A;
    opacity: 0.48;
    text-align: center;
    cursor: pointer;
}

.login-wrap .login-type .item.actived {
    background: none;
    color: #D5E5FF;
    opacity: 1
}


.login-wrap .login-title {
    width: 590px;
    height: 70px;
    position: absolute;
    top: 128px;
    right: 10%;
    text-align: center;
    font-size: 30px;
    background: url(../../../static/img/logo.png) no-repeat;
}


.login-wrap .form-input{
    width: 360px;
    height: 42px;
    line-height: 42px;
    border: 1px solid #225E8B;
    background: #052345;
    position: relative;
}
.login-wrap .form-input .empty{
    color: rgb(255, 55, 38);
    font-size: 12px;
    left: 42px;
    bottom: -16px;
    height: 12px;
    line-height: 12px;
}

.login-wrap .form-input.username{
    margin-bottom: 30px;
}

.login-wrap .form-input .icon-box{
    float: left;
    width: 40px;
    height: 42px;
    background: #0C3C6A;
    position: relative;
}

.login-wrap .icon-box .icon{
    width: 18px;
    height: 18px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
}

.login-wrap .form-input.username .icon{
    background: url("../../../src/images/login/user.png") no-repeat;
    background-size: cover;
}


.login-wrap .form-input.password .icon{
    background: url("../../../src/images/login/password.png") no-repeat;
    background-size: cover;
}

.login-wrap .form-input.verification-code .icon{
    background: url("../../../src/images/login/safe.png") no-repeat;
    background-size: cover;
}


.login-wrap .form-input .ipt-box{
    position: absolute;
    left: 40px;
    top: 0;
    bottom: 0;
    right: 0;
}
.login-wrap .form-input .ipt{
    font-family: "MicrosoftYaHei" !important;
}

.login-wrap .form-input .ipt-box .ipt{
    background: rgba(255,255,255,0);
    width: 100%;
    height: 100%;
    outline: none;
    border: 0;
    padding: 0 10px;
    color: #5E7DBA;
    font-size: 16px;
    box-sizing: border-box;
}


.login-wrap .form-input.actived{
    border-color: #3AB1D3;
}

.login-wrap .form-input.empty{
    border-color: rgba(255, 30, 30, 1);
}

.login-wrap .form-input.actived .ipt{
    color: #55EFFF;
    background: #022553;
}

.login-main {
    position: absolute;
    right: 15%;
    top: 238px;
    width: 424px;
    height: 400px;
    border-radius: 3px;
    background: rgba(24, 109, 157, 0.21);
}

.login-main .user,
.login-main .qrcode{
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    margin-top: 80px;
    padding: 0 32px 38px 32px;
    display: none;
}

.login-main .user.fade-in,
.login-main .qrcode.fade-in{
   /* opacity: 1;
    transition: opacity 0.2s;*/
    display: block;
}


.login-main .verification-code{
    margin-top: 30px;
    overflow: hidden;
}
.login-main .verification-code .item{
    float: left;
    height: 42px;
}
.login-main .verification-code .code-input{
    width: 160px;
    padding:0 10px;
    box-sizing: border-box;
    background: rgba(0,0,0,0);
    color: #55EFFF;
    font-size:16px;
}
.login-main .verification-code .code-area{
     width: 120px;
    box-sizing: border-box;
    cursor: pointer;
 }
.login-main .verification-code .refres-code{
    width: 40px;
    /*background: #eee;*/
    color: #aaa;
    font-size: 24px;
    text-align: center;
    cursor: pointer;
    background: rgba(16,69,119,0.88);
}
.login-main .verification-code .refres-code:hover{
    color: #ddd;
}

.login-main .qrcode .qrcode-box{
    width: 252px;
    height: 252px;
    margin: auto;
    padding: 6px;
    position: relative;
}
.login-main .qrcode-box .qrcode-area{
    width: 248px;
    height: 248px;
    border: 2px solid #96E3FF;
}

.login-main .qrcode-box .corner-border{
    position: absolute;
    width: 14px;
    height: 14px;
    border: 2px solid #96E3FF;
}
.login-main .qrcode-box .corner-border.left-top{
    border-right: 0;
    border-bottom: 0;
    left: 0;
    top: 0;
}
.login-main .qrcode-box .corner-border.left-bottom{
    border-right: 0;
    border-top: 0;
    left: 0;
    bottom: 0;
}
.login-main .qrcode-box .corner-border.right-top{
    border-left: 0;
    border-bottom: 0;
    right: 0;
    top: 0;
}
.login-main .qrcode-box .corner-border.right-bottom{
    border-left: 0;
    border-top: 0;
    right: 0;
    bottom: 0;
}

.login-main .qrcode .download-app{
    height: 22px;
    line-height: 22px;
    font-size: 16px;
    color: #D5E5FF;
    padding:18px 52px 0 52px;
    cursor: pointer;
}
.login-main .qrcode .download-app .icon{
    float: left;
    margin-right: 16px;
    width: 22px;
    height: 22px;
    background: url("../../images/login/qrcode.png") no-repeat;
    background-size: cover;
}
.login-main .qrcode .download-app .url{
    color: #32E4F7
}

.login-wrap .rember-pw,
.login-wrap .alter-pw{
    margin: 22px 0 0 42px;
    display: inline-block;
    color: #D5E5FF;
    line-height: 16px;
    font-size: 16px;
    color: #9e9e9e;
    cursor: pointer;
}
.login-wrap .alter-pw {
   color: #757575
}

.login-wrap .rember-pw .check-box{
    display: inline-block;
    width:16px;
    height:16px;
    border:1px solid rgba(150,168,198,1);
    vertical-align: sub;
    margin: 0 5px 0 0;
}

.login-wrap .rember-pw.checked .check-box{
    background: url("../../../src/images/common/check_box.jpg") no-repeat -2px -2px;
    background-size: 20px 20px;
}

.login-wrap .login-btn{
    width:360px;
    height:44px;
    position: absolute;
    background:rgba(25,166,128,1);
    border-radius:5px;
    text-align: center;
    line-height: 44px;
    bottom: 25px;
}
.login-wrap .login-btn,
.login-wrap .login-btn .btn,
.login-wrap .login-btn .space{
    cursor: pointer;
}

.login-wrap .login-btn.not-allow .btn,
.login-wrap .login-btn.not-allow .space,
.login-wrap .login-btn.not-allow{
    background: #ccc;
    cursor: not-allowed;
}

.login-wrap .login-btn .btn{
    background: none;
    border: 0;
    font-size: 18px;
    color: #fff;
    outline: none;
}
.login-wrap .login-btn .btn .space{
    padding:0 30px;
}

.login-wrap .error-tip{
    padding: 5px 20px;
    color: rgba(255, 30, 30, 1);
    text-align: center;
    position: absolute;
    top: -80px;
    background: rgba(255,255,255, 0.6);
    border-radius: 4px;
    left: 50%;
    margin-left: -76px;
}

</style>

