/**
 *获取Url中的参数，name为参数名
 **/
function getUrlParam(name) {
    var reg = new RegExp("(^|&)"+name+"=([^&]*)(&|$)");//构造一个含有目标的
    var r = window.location.search.substr(1).match(reg);//匹配目标参数
    if (r!=null ) return unescape (r[2]);return null;//返回参数值
}

/**
 *获取格式化时间
 **/
function formatDate(date) {
    var date = new Date(date);
    var seperator1 = "-";
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var strDate = date.getDate();
    if(month >=1 && month<=9){
        month = "0" +month;
    }
    if(strDate >= 0 && strDate <=9){
        strDate = "0" +strDate;
    }
    var currentdate =year + seperator1 +month +seperator1 + strDate;
    return currentdate;

}