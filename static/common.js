global.Doctor_Name_Key = 'doctor_Name_Key'
global.Doctor_Name_index = 'doctor_Name_index'
global.Answer_Index = 'answer_index'
global.Account_Index = 'account_index'
global.XianTianSectionType = 'xianTian'
global.HouTianSectionType = 'houTian'
global.XianTianReport_Index = 'xianTianReport'
global.HouTianReport_Index = 'houTianReport'
global.XianTianAnswer_Index = 'xianTianAnswer_Index'
global.HouTianAnswer_Index = 'xianTianAnswer_Index'

module.exports = {
    loadXianTianUserData (compoment){
        var xianTianAnswer = JSON.parse(localStorage.getItem(XianTianAnswer_Index));
        for (let key in xianTianAnswer) {
            if( compoment.$data[key] &&typeof (compoment.$data[key])===typeof (xianTianAnswer[key])){
                debugger;
                compoment.$data[key] = xianTianAnswer[key];
            }
        }
    }
}
