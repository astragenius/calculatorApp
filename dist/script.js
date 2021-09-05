"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}var toggleInput=document.querySelectorAll("input[name=state]");function switchTheme(e){var t=document.querySelector("html");t.classList.remove(t.classList[0]),"theme-1"!=e.target.value?"theme-2"!=e.target.value?"theme-3"!=e.target.value||t.classList.add("theme-3"):t.classList.add("theme-2"):t.classList.add("theme-1")}toggleInput.forEach((function(e){e.addEventListener("click",switchTheme)}));var Calculator=function(){function e(t,n){_classCallCheck(this,e),this.output=t,this.prevOperant=n,this.clear()}return _createClass(e,[{key:"clear",value:function(){this.currentOperant="",this.prevOperant="",this.operation=void 0}},{key:"appendNumber",value:function(e){"."===e&&this.currentOperant.includes(".")||(this.currentOperant=this.currentOperant.toString()+e.toString())}},{key:"delete",value:function(){this.currentOperant=this.currentOperant.slice(0,-1)}},{key:"showError",value:function(){this.currentOperant="ERROR"}},{key:"getDisplayNumber",value:function(e){var t=parseFloat(e);return isNaN(t)?"":t.toLocaleString("en")}},{key:"updateScreen",value:function(){this.output.innerText=this.getDisplayNumber(this.currentOperant)}},{key:"selectOperation",value:function(e){this.operation=e,this.prevOperant=this.currentOperant,this.currentOperant=""}},{key:"compute",value:function(){var e,t=parseFloat(this.prevOperant),n=parseFloat(this.currentOperant);if(!isNaN(t)&&!isNaN(n)){switch(this.operation){case"+":e=t+n,console.log(e);break;case"-":e=t-n,console.log(e);break;case"/":if(0==n)return void this.showError();e=t/n,console.log(e);break;case"x":e=t*n,console.log(e);break;default:return}e=parseFloat(e),this.currentOperant=e.toFixed(2),this.prevOperant="",this.operation=void 0}}}]),e}(),nrBtn=document.querySelectorAll("button[value]"),delBtn=document.getElementById("button_del"),resetBtn=document.getElementById("button_reset"),equalBtn=document.getElementById("button_equal"),output=document.getElementById("output"),operant=document.querySelectorAll("button[data-set]"),calculator=new Calculator(output);nrBtn.forEach((function(e){e.addEventListener("click",(function(){calculator.appendNumber(e.innerText),calculator.updateScreen()}))})),operant.forEach((function(e){e.addEventListener("click",(function(){calculator.selectOperation(e.innerText),calculator.updateScreen()}))})),delBtn.addEventListener("click",(function(){calculator.delete(),calculator.updateScreen()})),resetBtn.addEventListener("click",(function(){calculator.clear(),calculator.updateScreen()})),equalBtn.addEventListener("click",(function(){calculator.compute(),calculator.updateScreen()}));
//# sourceMappingURL=script.js.map