
import wx from 'weixin-js-sdk'
global.Doctor_Name_Key = 'doctor_Name_Key'
global.Doctor_Name_index = 'doctor_Name_index'
global.All_Question_Index = 'questions_index'
global.Account_Index = 'account_index'
global.XianTianSectionType = 'xianTian'
global.HouTianSectionType = 'houTian'
global.XianTianReport_Index = 'xianTianReport'
global.HouTianReport_Index = 'houTianReport'

global.AllAnswer_Index = 'answer_index'
//global.AllAnswer_Index = 'allAnswer_Index'
global.WechatSignature_Index = 'wechatSignature_Index'
global.Version = '0.0.7'
global.IsDebug = true

global.User = {}

String.prototype.trim = function (char, type) {
    if (char) {
        if (type == 'left') {
            return this.replace(new RegExp('^\\' + char + '+', 'g'), '');
        } else if (type == 'right') {
            return this.replace(new RegExp('\\' + char + '+$', 'g'), '');
        }
        return this.replace(new RegExp('^\\' + char + '+|\\' + char + '+$', 'g'), '');
    }
    return this.replace(/^\s+|\s+$/g, '');
};

export default {
    getUserAge:function (birthday){
        var birthYear= new Date(birthday).getFullYear();
        var age =new Date().getFullYear()-birthYear;
        return age;
    },
    parseWuXingLevelToText:function(wuXingLevel){
        var wuXingStatusText = '';
        var wuXingTextMapper = {
            'gold': '金',
            'wood': '木',
            'water': '水',
            'fire': '火',
            'earth': '土',
        }
        for (var key in wuXingLevel) {
            wuXingStatusText += wuXingTextMapper[key];
            if (wuXingLevel[key] == 0) {
                wuXingStatusText += '弱';
            }
            else {
                wuXingStatusText += '强';
            }
            wuXingStatusText += ','
        }
        wuXingStatusText = wuXingStatusText.trim(',');
        return wuXingStatusText;
    },
    parseWuXingPointToText:function(wuXing){
        var wuXingStatusArray = [];
        var wuXingTextMapper = {
            'gold': '金',
            'wood': '木',
            'water': '水',
            'fire': '火',
            'earth': '土',
        }
        for (var key in wuXing) {
            var wuXingStatusText = wuXingTextMapper[key];
            if (wuXing[key] <= 0) {
                wuXingStatusText += '0.1';
            }
            else {
                wuXingStatusText += wuXing[key];
            }
            wuXingStatusArray.push(wuXingStatusText);
        }
        return wuXingStatusArray.toString();
    },
    initForWechatShare:function(title,description){
        global.shareTitle=title;
        global.link=window.location.href;
        global.shareDesc=description;
        var data=JSON.parse(localStorage.getItem(global.WechatSignature_Index))
        wx.config({
//                        debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: data.appId, // 必填，公众号的唯一标识
            timestamp: data.timestamp, // 必填，生成签名的时间戳
            nonceStr: data.nonceStr, // 必填，生成签名的随机串
            signature: data.signature,// 必填，签名，见附录1
            jsApiList: ['chooseImage', 'previewImage',
                'uploadImage','onMenuShareTimeline','onMenuShareAppMessage',
                'downloadImage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        });
        wx.ready(function () {
            wx.onMenuShareTimeline({
                title: global.shareTitle, // 分享标题
                link: global.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: 'http://ikehealth.cn/image/logo.png', // 分享图标
                success: function () {
                    // 用户确认分享后执行的回调函数
                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                }
            });
            wx.onMenuShareAppMessage({
                title:  global.shareTitle, // 分享标题
                desc: global.shareDesc, // 分享描述
                link:  global.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: 'http://ikehealth.cn/image/logo.png', // 分享图标
                type: '', // 分享类型,music、video或link，不填默认为link
                dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                success: function () {
                    // 用户确认分享后执行的回调函数
                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                }
            });
        })
    },
    parseWuXingToArray:function(wuXing){
        var wuXingArray = [];
        for (var key in wuXing) {
            if (wuXing[key] <= 0) {
                wuXingArray.push(0.1);
            } else {
                wuXingArray.push(wuXing[key]);
            }
        }
        return wuXingArray;
    },

    convertReportsToText:function(reports){
        var wuXingReportContentText = '';
        if (typeof (reports) != 'undefined' && reports != '') {
            for (var index = 0; index < reports.length; index++) {
                if (reports[index].content)
                    wuXingReportContentText += reports[index].content;
                if (reports[index].illness)
                    wuXingReportContentText += reports[index].illness;
                if (global.User.gender = 'F') {
                    if (reports[index].female)
                        wuXingReportContentText += reports[index].female;
                }
                else {
                    if (reports[index].male)
                        wuXingReportContentText += reports[index].male;
                }
                if (global.User.age <= 15) {
                    if (reports[index].child)
                        wuXingReportContentText += reports[index].child;
                }
            }
        }
        return wuXingReportContentText;
    },
    loadXianTianUserData:function (component,sectionType){
        debugger;
        var allAnswer = JSON.parse(localStorage.getItem(AllAnswer_Index));
        var loadingData=allAnswer.houTian;
        if(sectionType&&sectionType=='xianTian'){
            loadingData=allAnswer.xianTian;
        }
        for (var key in loadingData) {
            if (typeof (component.$data[key])!='undefined'
                && typeof (component.$data[key]) === typeof (loadingData[key])) {
                component.$data[key] = loadingData[key];
                component.$emit('updateUserAnswer', component.answer)
            }
        }
    },
    loadExtendXianTianUserData:function (component,sectionType, field){
        var allAnswer = JSON.parse(localStorage.getItem(AllAnswer_Index));
        if (allAnswer == null) return;
        var loadingData=allAnswer.houTian;
        if(sectionType&&sectionType=='xianTian'){
            loadingData=allAnswer.xianTian;
        }
        var extendValue = loadingData[field];
        for (var key in extendValue) {
            if (component.$data[key] && typeof (component.$data[key]) === typeof (extendValue[key])) {
                component.$data[key] = extendValue[key];
                component.$emit('updateUserAnswer', component.answer)
            }
        }
    },
}
