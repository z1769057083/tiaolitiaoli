global.Doctor_Name_Key = 'doctor_Name_Key'
global.Doctor_Name_index = 'doctor_Name_index'
global.All_Question_Index = 'answer_index'
global.Account_Index = 'account_index'
global.XianTianSectionType = 'xianTian'
global.HouTianSectionType = 'houTian'
global.XianTianReport_Index = 'xianTianReport'
global.HouTianReport_Index = 'houTianReport'
global.XianTianAnswer_Index = 'xianTianAnswer_Index'
global.HouTianAnswer_Index = 'houTianAnswer_Index'
global.Version = '0.0.2'
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

module.exports = {
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
    loadXianTianUserData:function (component){
        var xianTianAnswer = JSON.parse(localStorage.getItem(XianTianAnswer_Index));
        for (var key in xianTianAnswer) {
            if (component.$data[key] && typeof (component.$data[key]) === typeof (xianTianAnswer[key])) {
                component.$data[key] = xianTianAnswer[key];
                component.$emit('updateUserAnswer', component.answer)
            }
        }
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
    loadExtendXianTianUserData:function (component, field){
        var xianTianAnswer = JSON.parse(localStorage.getItem(XianTianAnswer_Index));
        if (xianTianAnswer == null) return;
        var extendValue = xianTianAnswer[field];
        for (var key in extendValue) {
            if (component.$data[key] && typeof (component.$data[key]) === typeof (extendValue[key])) {
                component.$data[key] = extendValue[key];
                component.$emit('updateUserAnswer', component.answer)
            }
        }
    },
}
