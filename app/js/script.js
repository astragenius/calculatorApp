


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

    constructor(output, prevOperant) {

        this.output = output;
        this.prevOperant = prevOperant;
        this.clear();
        
    }

    clear() {
    
       
        this.currentOperant = "";
        this.prevOperant = "";
        this.operation = undefined;
       
    }

    appendNumber(number){

       // this if statement checks the currentoperant. When he has a "." allready then the function stops. when not the point will be added.
      if(number === "." && this.currentOperant.includes(".")) {
        return
      }else {
      this.currentOperant = this.currentOperant.toString() + number.toString();

      }
      

    }

    
    delete(){
        
        
       this.currentOperant = this.currentOperant.slice(0, -1);
       
    }

    showError() {

        this.currentOperant = "ERROR";
    }

    getDisplayNumber(number) {

        const floatNumber = parseFloat(number);
        if (isNaN(floatNumber)) return "";
        return floatNumber.toLocaleString('en');

    }

    updateScreen(){

        if (this.currentOperant == "ERROR") {

            this.output.innerText = this.currentOperant;
        } else{
            this.output.innerText = this.getDisplayNumber(this.currentOperant);

        }
       
      
    }

    selectOperation(operation){

        this.operation = operation;
        this.prevOperant = this.currentOperant;
        this.currentOperant = "";

    }

    compute() {
        let result;
        const prev = parseFloat(this.prevOperant);
        const current = parseFloat(this.currentOperant);
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {

           
            case '+':
                result = prev + current;
                console.log(result);
                break;


            case '-':
                result = prev - current;
                console.log(result);
                break;
            
            case '/':
                if(current == 0) {

                   this.showError();
                    return;
                }
                result = prev / current;
                console.log(result);
                break;
            
            case 'x':
                result = prev * current;
                console.log(result);
                break;
            
            default:
                return;


        }   

        result = parseFloat(result);
        this.currentOperant = result.toFixed(2);
        this.prevOperant = "";
        this.operation = undefined;
        
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

equalBtn.addEventListener('click', () => {
    calculator.compute();
    calculator.updateScreen();
})














