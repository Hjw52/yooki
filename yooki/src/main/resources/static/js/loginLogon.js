$(function () {
    //不同时间显示不同背景
    var myDate = new Date();
    var time = myDate.getHours();
    if (time >= 6 && time <= 18) {
        document.getElementById('body').className = "bg1";
    } else {
        document.getElementById('body').className = "bg2";
    }
    //div切换
    $("#mobileLogin span").click(function () {
        $("#loginBox1").fadeOut(0);
        $("#loginHead1").fadeOut(0);
        $("#loginBox2").fadeIn(0);
        $("#loginHead2").fadeIn(0);
    });
    $("#normalLogin span").click(function () {
        $("#loginBox2").fadeOut(0);
        $("#loginHead2").fadeOut(0);
        $("#loginBox1").fadeIn(0);
        $("#loginHead1").fadeIn(0);
    });
    $("#forgetPwd span").click(function () {
        $("#loginBox1").fadeOut(0);
        $("#loginHead1").fadeOut(0);
        $("#upPwdHead").fadeIn(0);
        $("#upPwd").fadeIn(0);
    });
    $("#loginBox1 div[class='logon']").click(function () {
        $("#loginBox1").fadeOut(0);
        $("#loginHead1").fadeOut(0);
        $("#logonBox").fadeIn(0);
        $("#logonHead").fadeIn(0);
        $("#QRCode").fadeOut(0)
    });
    $("#loginBox2 div[class='logon']").click(function () {
        $("#loginBox2").fadeOut(0);
        $("#loginHead2").fadeOut(0);
        $("#logonBox").fadeIn(0);
        $("#logonHead").fadeIn(0);
        $("#QRCode").fadeOut(0)
    });
    $("#logonBox div[class='login']").click(function () {
        $("#loginBox1").fadeIn(0);
        $("#loginHead1").fadeIn(0);
        $("#logonBox").fadeOut(0);
        $("#logonHead").fadeOut(0);
        $("#QRCode").fadeIn(0)
    });
    $("#upPwd div[class='login']").click(function () {
        $("#loginBox1").fadeIn(0);
        $("#loginHead1").fadeIn(0);
        $("#upPwdHead").fadeOut(0);
        $("#upPwd").fadeOut(0);
    });
    //获取验证码按钮格式限制
    $('#phoneNum').bind('input propertychange', function () {
        var cc = $(this).val().length;
        if (cc >= 11) {
            document.getElementById('actPwd').className = "actPwdButton2";
            $('#actPwd').attr("disabled", false);
        } else {
            document.getElementById('actPwd').className = "actPwdButton1";
            $('#actPwd').attr("disabled", true);
        }
    });
    $('#phone').bind('input propertychange', function () {
        var cc = $(this).val().length;
        if (cc >= 11) {
            document.getElementById('code').className = "actPwdButton2";
            $('#code').attr("disabled", false);
        } else {
            document.getElementById('code').className = "actPwdButton1";
            $('#code').attr("disabled", true);
        }
    });
    $('#pNum').bind('input propertychange', function () {
        var cc = $(this).val().length;
        if (cc >= 11) {
            document.getElementById('pwdCode').className = "actPwdButton2";
            $('#pwdCode').attr("disabled", false);
        } else {
            document.getElementById('pwdCode').className = "actPwdButton1";
            $('#pwdCode').attr("disabled", true);
        }
    });
    //验证码发送间隔限制
    $("#actPwd").click(settime1);
    $("#code").click(settime2);
    $("#pwdCode").click(settime3);
    //normalLogin
    //cookie
    initView();
    $("#loginButton1").click(function () {
        if ($("#rememberMe").is(":checked")) {
            setCookie("cookie_account", $("#accountId1").val());
            setCookie("rememberMe", true);
        } else {
            delCookie("cookie_account");
            delCookie("rememberMe");
        }
        //整合时删除  ↓
        // window.location.reload();
        //整合时删除  ↑
        var UId = $("#accountId1").val();
        var password = $("#password").val();
        if (UId == "") {
            console.log(UId);
            $("#errorMsg1").text("请输入账号！");
        } else {
            if (password == "") {
                $("#errorMsg1").text("请输入密码！");
            } else {
                $.ajax({
                    url: "/login1",
                    type: "post",
                    data: {'telephone': $("#accountId1").val(), 'email': $("#accountId1").val()},
                    dataType: "json",
                    success: function (data) {
                        console.log(data);
                        if (data.cNum != 0) {
                            $("#errorMsg1").text("");
                            if (password == data.password) {
                                console.log("登陆成功！");
                                sessionStorage.setItem("userId", data.userId);
                                //主页名字
                                location.href = "homepage.html";
                            } else {
                                $("#errorMsg1").text("密码错误！");
                            }
                        } else {
                            $("#errorMsg1").text("账号输入错误或不存在！");

                        }
                    }
                })
            }
        }
    });
    //mobileLogin
    var a = 0;
    $("#phoneNum").mouseover(function () {
        $("#errorMsg2").text("");
    });
    $("#phoneNum").mouseleave(function () {
        var pNum = $("#phoneNum").val();
        $.ajax({
            url: "/login2",
            type: "post",
            data: {'telephone': pNum},
            dataType: "json",
            success: function (l2) {
                if (l2.cNum != 0) {
                    $('#actPwd').attr("disabled", false)
                } else {
                    $("#errorMsg2").text("账号不存在！");
                    $('#actPwd').attr("disabled", true)
                }
            }
        })
    });
    $("#actPwd").click(function () {
        var code = parseInt((Math.random() * 899999) + 100000);
        var pNum = $("#phoneNum").val();
        var smsId = "SMS_174022776";
        a = code;
        $.ajax({
            url: "/sms",
            type: "post",
            data: {'telephone': pNum, 'smsId': smsId, 'code': code},
            dataType: "json",
            success: function (data) {
                console.log(data)
            }
        })
    });
    $("#loginButton2").click(function () {
        var pNum = $("#phoneNum").val();
        var code = parseInt($("#actCode").val());
        if (code == a) {
            $.ajax({
                url: "/login2",
                type: "post",
                data: {'telephone': pNum},
                dataType: "json",
                success: function (l2) {
                    console.log("登陆成功！");
                    sessionStorage.setItem("userId", l2.userId);
                    //主页名字
                    location.href = "homepage.html";
                }
            })
        } else {
            $("#errorMsg2").text("验证码输入错误！");
        }
    });
    //Logon
    var b = 0;
    $("#code").hover(function () {
        if ($("#pwd").val() == "" && $("#repwd").val() == "") {
            $("#errorMsg3").text("请将信息填写完整！")
            $("#code").attr("disable", true)
        }
    });
    $("#code").mouseleave(function () {
        $("#code").attr("disable", false);
    });
    $("#code").click(function () {
        var pNum = $("#phone").val();
        var smsId = "SMS_174022775";
        var code = parseInt((Math.random() * 899999) + 100000);
        b = code;
        $.ajax({
            url: "/login2",
            type: "post",
            data: {'telephone': pNum},
            dataType: "json",
            success: function (data) {
                if (data.cNum == 0) {
                    $.ajax({
                        url: "/sms",
                        type: "post",
                        data: {'telephone': pNum, 'smsId': smsId, 'code': code},
                        dataType: "json",
                        success: function (data) {
                            console.log(data)
                        }
                    })
                } else {
                    $("#errorMsg3").text("手机号已注册！")
                }
            }
        })
    });
    $("#logonButton").click(function () {
        var pNum = $("#phone").val();
        var pwd = $("#pwd").val();
        var userName = "用户" + pNum;
        var code = parseInt($("#logonCode").val());
        if ($("#agree").is(":checked")) {
            if (code == b) {
                $.ajax({
                    url: "/logon",
                    type: "post",
                    data: {'telephone': pNum, 'password': pwd, 'userName': userName},
                    dataType: "json",
                    success: function (l2) {
                        console.log(l2);
                        console.log("注册成功！");
                        //主页名字
                        location.href = "login.html";
                    }
                })
            } else {
                $("#errorMsg3").text("验证码输入错误！");
            }
        } else {
            $("#errorMsg3").text("请先同意用户协议！")
        }
    });
    //忘记密码页 密码格式验证
    $("#upPassword input").blur(function () {
        var pwd=$("#upPassword input").val();
        var RegCellPhone = /^\w{6,16}$/;
        var falg = pwd.search(RegCellPhone);
        if (pwd.length != 0) {
            if (falg == -1) {
                $("#errorMsg4").text("密码格式错误！");
                this.focus();
                $('#pwdButton').attr("disabled", true);
            } else {
                $("#errorMsg4").text("");
                this.focus();
                $('#pwdButton').attr("disabled", false);
            }
        } else {
            $("#errorMsg4").text("请输入密码！");
        }
    });
    //修改密码
    var c = 0;
    $("#pwdCode").click(function () {
        var code = parseInt((Math.random() * 899999) + 100000);
        var smsId = "SMS_174277422";
        var pNum = $("#pNum").val();
        c = code;
        $.ajax({
            url: "/login2",
            type: "post",
            data: {'telephone': pNum},
            dataType: "json",
            success: function (data) {
                if (data.cNum == 0) {
                    $("#errorMsg4").text("手机号未注册！")
                } else {
                    $.ajax({
                        url: "/sms",
                        type: "post",
                        data: {'telephone': pNum, 'smsId': smsId, 'code': code},
                        dataType: "json",
                        success: function (li) {
                            console.log(li)
                        }
                    })
                }
            }
        })
    });
    $("#pwdButton").click(function () {
        var pNum = $("#pNum").val();
        var code = $("#passwordCode").val();
        var pwd = $("#upPassword input").val();
        if (code == c) {
            $.ajax({
                url: "/upPwd",
                type: "post",
                data: {'telephone': pNum, 'password': pwd},
                dataType: "json",
                success: function (data) {
                    console.log(data);
                    layer.confirm('您的密码为'+pwd+'。点击确定将前往登录页。', {
                        btn: ['确定','取消'] //按钮
                    }, function(){
                        location.reload();
                    },function(){
                        layer.msg('已取消', {icon: 1},{time:3000})
                    });
                }
            })
        }else {
            $("#errorMsg4").text("验证码输入错误！")
        }
    })
});
//验证码发送间隔限制方法
var countdown1 = 60;
var countdown = 60;
var countdown2 = 60;

function settime1() {
    if (countdown1 == 0) {
        document.getElementById('actPwd').className = "actPwdButton2";
        $("#actPwd").attr("disabled", false);
        $("#actPwd").attr("value", "获取动态密码");
        countdown1 = 60;
    } else {
        document.getElementById('actPwd').className = "actPwdButton1";
        $("#actPwd").attr("disabled", true);
        $("#actPwd").attr("value", "重新发送(" + countdown1 + ")");
        countdown1--;
        setTimeout(settime1, 1000);
    }

}

function settime2() {
    if (countdown == 0) {
        document.getElementById('code').className = "actPwdButton2";
        $("#code").attr("disabled", false);
        $("#code").attr("value", "发送验证码");
        countdown = 60;
    } else {
        document.getElementById('code').className = "actPwdButton1";
        $("#code").attr("disabled", true);
        $("#code").attr("value", "重新发送(" + countdown + ")");
        countdown--;
        setTimeout(settime2, 1000)
    }

}

function settime3() {
    if (countdown2 == 0) {
        document.getElementById('pwdCode').className = "actPwdButton2";
        $("#pwdCode").attr("disabled", false);
        $("#pwdCode").attr("value", "获取动态码");
        countdown2 = 60;
    } else {
        document.getElementById('pwdCode').className = "actPwdButton1";
        $("#pwdCode").attr("disabled", true);
        $("#pwdCode").attr("value", "重新发送(" + countdown2 + ")");
        countdown2--;
        setTimeout(settime3, 1000)
    }

}

//手机号正则验证
function checkPhone1(phone) {
    var RegCellPhone = /^(1)([34578])([0-9]{9})$/;
    var falg = phone.search(RegCellPhone);
    if (falg == -1) {
        $("#errorMsg2").text("手机号格式错误！");
        this.focus();
        $('#loginButton2').attr("disabled", true);
    } else {
        $("#errorMsg2").text("");
        this.focus();
        $('#loginButton2').attr("disabled", false);
    }
}

function checkPhone2(phone) {
    var RegCellPhone = /^(1)([34578])([0-9]{9})$/;
    var falg = phone.search(RegCellPhone);
    if (falg == -1) {
        $("#errorMsg3").text("手机号格式错误！");
        this.focus();
        $('#logonButton').attr("disabled", true);
    } else {
        $("#errorMsg3").text("");
        this.focus();
        $('#logonButton').attr("disabled", false);
    }
}

function checkPhone3(phone) {
    var RegCellPhone = /^(1)([34578])([0-9]{9})$/;
    var falg = phone.search(RegCellPhone);
    if (falg == -1) {
        $("#errorMsg4").text("手机号格式错误！");
        this.focus();
        $('#pwdButton').attr("disabled", true);
    } else {
        $("#errorMsg4").text("");
        this.focus();
        $('#pwdButton').attr("disabled", false);
    }
}

//密码格式验证
function checkPwd(pwd) {
    var RegCellPhone = /^\w{6,16}$/;
    var falg = pwd.search(RegCellPhone);
    var pwd1 = $("#pwd").val();
    if (pwd1.length != 0) {
        if (falg == -1) {
            $("#errorMsg3").text("密码格式错误！");
            this.focus();
            $('#logonButton').attr("disabled", true);
        } else {
            $("#errorMsg3").text("");
            this.focus();
            $('#logonButton').attr("disabled", false);
        }
    } else {
        $("#errorMsg3").text("请输入密码！");
    }

}

function checkRePwd() {
    var pwd = $("#pwd").val();
    var rePwd = $("#rePwd").val();
    if (rePwd.length != 0) {
        if (pwd == rePwd) {
            $("#errorMsg3").text("");
            this.focus();
            $('#logonButton').attr("disabled", false);
        } else {
            $("#errorMsg3").text("两次输入的密码不同！");
            this.focus();
            $('#logonButton').attr("disabled", true);
        }
    } else {
        $("#errorMsg3").text("请再次输入密码！");
    }
}

//cookie
function initView() {
    if (getCookie("cookie_account")) {
        $("#accountId1").val(getCookie("cookie_account"));
    }
    if (getCookie("rememberMe")) {
        $("#rememberMe").attr("checked", getCookie("rememberMe"));
    }
}

/**
 * 写入cookie
 * @param name  cookie 名
 * @param value  cookie 值
 */
function setCookie(name, value) {
    var Days = 30; //此 cookie 将被保存 30 天
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

/**
 * 删除cookie
 * @param name
 */
function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null) document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}

/**
 * 读取cookie
 * @param name
 * @returns
 */
function getCookie(name) {
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null)
        return unescape(arr[2]);
    return null;
}
