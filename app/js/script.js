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

        this.output = "";

    }

    appendNumber(number){


    }

    
    delete(){


    }

    updateScreen(){


    }

    selectOperation(operation){


    }

    compute() {


    }

    
}


const nrBtn = document.querySelectorAll('button[value]');
const delBtn = document.getElementById('button_del');
const plusBtn = document.getElementById('button_+');
const minusBtn = document.getElementById('button_-');
const pointBtn = document.getElementById('button_.');
const geteiltBtn = document.getElementById('button_/');
const malBtn = document.getElementById('button_x');
const resetBtn = document.getElementById('button_reset');
const equalBtn = document.getElementById('button_equal');
const output = document.getElementById('output');










