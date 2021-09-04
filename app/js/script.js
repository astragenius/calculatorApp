const toggleInput = document.querySelectorAll('input[name=state]');


toggleInput.forEach(input => {

    input.addEventListener('click', switchTheme);
    
});

function switchTheme(e) {

    const html = document.querySelector('html');
    html.classList.remove(html.classList[0]);
   
    if(e.target.value == "theme-1") {

        html.classList.add('theme-1');
        return
    }
    if(e.target.value == "theme-2") {

        html.classList.add('theme-2');
        return
    }
    if(e.target.value == "theme-3") {
        html.classList.add('theme-3');
        return
    }

}


class Calculator {

    constructor(output) {

        this.output = output;
        this.clear();
        
    }

    clear() {
    
       
        this.currentOperant = "";
        this.prevOperant = "";
        this.operation = undefined;
       
    }

    appendNumber(number){

       
      if(number === "." && this.currentOperant.includes(".")) {
        return
      }else {
      this.currentOperant = this.currentOperant.toString() + number.toString();

      }
      

    }

    
    delete(){

       this.currentOperant = this.currentOperant.slice(0, -1);
       
    }

    updateScreen(){

        this.output.innerText = this.currentOperant;
      
    }

    selectOperation(operation){

        console.log(operation);

    }

    compute() {


    }

    
}


const nrBtn = document.querySelectorAll('button[value]');
const delBtn = document.getElementById('button_del');



const resetBtn = document.getElementById('button_reset');
const equalBtn = document.getElementById('button_equal');
const output = document.getElementById('output');
const operant = document.querySelectorAll('button[data-set]');



const calculator = new Calculator(output);

nrBtn.forEach(button => {

    button.addEventListener('click', () => {

        calculator.appendNumber(button.innerText);
        calculator.updateScreen();
       
    })
})

operant.forEach(button => {

    button.addEventListener('click', () => {

        calculator.selectOperation(button.innerText);
        calculator.updateScreen();
    })
})



delBtn.addEventListener('click', () => {

        calculator.delete();
        calculator.updateScreen();
       
})

resetBtn.addEventListener('click', () => {

    calculator.clear();
    calculator.updateScreen();
})














