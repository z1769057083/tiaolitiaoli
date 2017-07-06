import wx from 'weixin-js-sdk'
global.Doctor_Name_Key = 'doctor_Name_Key'
global.Doctor_Name_index = 'doctor_Name_index'
global.All_Question_Index = 'questions_index'
global.Account_Index = 'account_index'
global.XianTianSectionType = 'xianTian'
global.HouTianSectionType = 'houTian'
global.XianTianReport_Index = 'xianTianReport'
global.HouTianReport_Index = 'houTianReport'
global.Cities_Index = 'cities_Index'

global.AllAnswer_Index = 'answer_index'
//global.AllAnswer_Index = 'allAnswer_Index'
global.WechatSignature_Index = 'wechatSignature_Index'
global.Version = '0.0.15'
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
    getUserAge: function (birthday) {
        var birthYear = new Date(birthday).getFullYear();
        var age = new Date().getFullYear() - birthYear;
        return age;
    },
    actionMapper: {
        "treat": { "type": "wood", "text": "待人和气", "section": 1, "wuXingIndex": 1 },
        "trick": { "type": "wood", "text": "谋定而动", "section": 1, "wuXingIndex": 2 },
        "help": { "type": "wood", "text": "乐于助人", "section": 1, "wuXingIndex": 3 },
        "clean": { "type": "water", "text": "洁身自好", "section": 1, "wuXingIndex": 3 },
        "liberty": { "type": "water", "text": "随遇而安", "section": 1, "wuXingIndex": 4 },
        "upright": { "type": "wood", "text": "为人耿直", "section": 2, "wuXingIndex": 4 },
        "strong": { "type": "fire", "text": "体型较壮", "section": 2, "wuXingIndex": 1 },
        "optimistic": { "type": "fire", "text": "性格开朗", "section": 2, "wuXingIndex": 2 },
        "active": { "type": "fire", "text": "好动", "section": 2, "wuXingIndex": 3 },
        "pleasure": { "type": "fire", "text": "喜形于色", "section": 2, "wuXingIndex": 4 },
        "gentle": { "type": "earth", "text": "为人和顺", "section": 3, "wuXingIndex": 1 },
        "evil": { "type": "earth", "text": "嫉恶如仇", "section": 3, "wuXingIndex": 2 },
        "flexible": { "type": "earth", "text": "处事灵活", "section": 3, "wuXingIndex": 3 },
        "burly": { "type": "earth", "text": "身材魁梧", "section": 3, "wuXingIndex": 4 },
        "principle": { "type": "gold", "text": "原则性强", "section": 3, "wuXingIndex": 1 },
        "lean": { "type": "gold", "text": "清瘦", "section": 4, "wuXingIndex": 2 },
        "observe": { "type": "gold", "text": "观察透彻", "section": 4, "wuXingIndex": 3 },
        "solemn": { "type": "gold", "text": "为人庄重", "section": 4, "wuXingIndex": 4 },
        "frank": { "type": "water", "text": "办事爽快", "section": 4, "wuXingIndex": 1 },
        "speech": { "type": "water", "text": "讲话策略多", "section": 4, "wuXingIndex": 2 }
    },
    getLocationByCity: function (province, cityName) {
        var cities = JSON.parse(localStorage.getItem(Cities_Index))
        console.log(cities);
        var location = {
            "latitude": 39.55,
            "longitude": 116.24
        };//Note:beijing Default.
        cities.forEach(function (item, index) {
            if (item.province == province && item.city == cityName) {
                location = item
            }
        });
        return location;
    },
    parseWuXingLevelToText: function (wuXingLevel) {
        var wuXingStatusText = '';
        var wuXingTextMapper = {
            'gold': '金',
            'wood': '木',
            'water': '水',
            'fire': '火',
            'earth': '土',
        }
        var isEmptyObj=true;
        for (var key in wuXingLevel) {
            isEmptyObj=false;
            wuXingStatusText += wuXingTextMapper[key];
            if (wuXingLevel[key] == 0) {
                wuXingStatusText += '弱';
            }
            else {
                wuXingStatusText += '强';
            }
            wuXingStatusText += ','
        }
        if(isEmptyObj){
            wuXingStatusText='平衡';
        }
        wuXingStatusText = wuXingStatusText.trim(',');
        return wuXingStatusText;
    },
    parseWuXingPointToText: function (wuXing) {
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
    initForWechatShare: function (title, description, href) {
        global.isWechatShareInit = true;
        global.shareTitle = title;
        global.link = href;
        global.shareDesc = description;
        var data = JSON.parse(localStorage.getItem(global.WechatSignature_Index))
        if (typeof (data) == 'undefined' || data == null) {
            return;
        }
        wx.config({
//                        debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来
            appId: data.appId, // 必填，公众号的唯一标识
            timestamp: data.timestamp, // 必填，生成签名的时间戳
            nonceStr: data.nonceStr, // 必填，生成签名的随机串
            signature: data.signature,// 必填，签名，见附录1
            jsApiList: ['chooseImage', 'previewImage',
                'uploadImage', 'onMenuShareTimeline', 'onMenuShareAppMessage',
                'downloadImage', 'chooseWXPay'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
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
                title: global.shareTitle, // 分享标题
                desc: global.shareDesc, // 分享描述
                link: global.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
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
    parseWuXingToArray: function (wuXing) {
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
    convertReportsToText: function (reports) {
        var wuXingReportContentText = '';
        if (typeof (reports) != 'undefined' && reports != '') {
            for (var index = 0; index < reports.length; index++) {
                if (reports[index].content)
                    wuXingReportContentText += reports[index].content;
                if (reports[index].illness)
                    wuXingReportContentText += reports[index].illness;
                if (global.User.gender == 'F') {
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
    convertReportsToObj: function (reports) {
        var reportObj = { content: "", attention: "", illness: "", analysis: "", other: "" };
        if (typeof (reports) != 'undefined' && reports !== '') {
            if(reports.length==0){
                reportObj.analysis='五行均强，总体五行圆运动升发和肃降有序，一生当中整体的阳气和阴精都比较充足，整体免疫力、对外邪的抵抗力都较常人为强，基本上出现非外力所造成的重大疾病的可能性比较小，即便是偶有小疾也能够快速痊愈，回复正常状态。<br>五行偏弱，五行圆运动升发、肃降有序，但一生当中整体的阳气和阴精都偏弱，精力有限。虽然不容易出现除外力造成的重大疾病，但对外界的诱因比较容易敏感，整体免疫力、抵抗力一般，容易偶有小疾，而恢复较快。';
                return reportObj;
            }
            for (var index = 0; index < reports.length; index++) {
                if (reports[index].content)
                    reportObj.content += reports[index].content;
                if (reports[index].illness)
                    reportObj.illness += reports[index].illness;
                if (reports[index].analysis)
                    reportObj.analysis += reports[index].analysis;
                if (reports[index].attention)
                    reportObj.attention += reports[index].attention;
                if (global.User.gender == 'F') {
                    if (reports[index].female)
                        reportObj.other += reports[index].female;
                }
                else {
                    if (reports[index].male)
                        reportObj.other += reports[index].male;
                }
                if (global.User.age <= 15) {
                    if (reports[index].child)
                        reportObj.other += reports[index].child;
                }
            }
        }
        return reportObj;
    },
    loadXianTianUserData: function (component, sectionType) {
        var allAnswer = JSON.parse(localStorage.getItem(AllAnswer_Index));
        if (allAnswer == null) {
            return;
        }
        var loadingData = allAnswer.houTian;
        if (sectionType && sectionType == 'xianTian') {
            loadingData = allAnswer.xianTian;
        }
        for (var key in loadingData) {
            if (typeof (component.$data[key]) != 'undefined'
                && typeof (component.$data[key]) === typeof (loadingData[key])) {
                component.$data[key] = loadingData[key];
                component.$emit('updateUserAnswer', component.answer)
            }
        }
    },
    loadExtendXianTianUserData: function (component, sectionType, field) {
        var allAnswer = JSON.parse(localStorage.getItem(AllAnswer_Index));
        if (allAnswer == null) return;
        var loadingData = allAnswer.houTian;
        if (sectionType && sectionType == 'xianTian') {
            loadingData = allAnswer.xianTian;
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
