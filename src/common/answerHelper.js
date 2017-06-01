/**
 * Created by xujian on 5/25/17.
 */

// var AnswerLib = require('./answerLib.json')
// var Util = require('./util.js')
String.prototype.format = function (args) {
  var result = this;
  if (arguments.length > 0) {
    if (arguments.length == 1 && typeof (args) == "object") {
      for (var key in args) {
        if (args[key] != undefined) {
          var reg = new RegExp("({" + key + "})", "g");
          result = result.replace(reg, args[key]);
        }
      }
    } else {
      for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] != undefined) {
          var reg = new RegExp("({)" + i + "(})", "g");
          result = result.replace(reg, arguments[i]);
        }
      }
    }
  }
  return result;
};




import AnswerLib from './answerLib.json'
export default {
  getAnswerText: (question, value) => {
    var answer = AnswerLib[question];
    var text = '';
    if(typeof(answer)=='undefined'){return ''}
    if (answer&&answer.isFormat) {
      text = answer.text.format(value);
    } else if(typeof(answer.isArray)!=='undefined'&&answer.isArray){
        for(let index=0;index<value.length;index++){
            text += answer[value[index]].text;
        }
    }
    else if(answer[value]){
      text = answer[value].text;
    }
    return text;
  }
}
