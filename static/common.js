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
global.Version = '0.0.1'

module.exports = {
    loadXianTianUserData (component){
        var xianTianAnswer = JSON.parse(localStorage.getItem(XianTianAnswer_Index));
        for (let key in xianTianAnswer) {
            if( component.$data[key] &&typeof (component.$data[key])===typeof (xianTianAnswer[key])){
                component.$data[key] = xianTianAnswer[key];
                component.$emit('updateUserAnswer', component.answer)
            }
        }
    },
    loadExtendXianTianUserData (component,field){
        var xianTianAnswer = JSON.parse(localStorage.getItem(XianTianAnswer_Index));
        var extendValue=xianTianAnswer[field];
        for (let key in extendValue) {
            if( component.$data[key] &&typeof (component.$data[key])===typeof (extendValue[key])){
                component.$data[key] = extendValue[key];
                component.$emit('updateUserAnswer', component.answer)
            }
        }
    },
}
