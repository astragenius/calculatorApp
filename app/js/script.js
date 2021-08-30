const toggleInput = document.querySelectorAll('input[name=state]');


toggleInput.forEach(input => {

    input.addEventListener('click', switchTheme);
    
});

function switchTheme(e) {

    const html = document.querySelector('html');

   
    if(e.target.value == "theme-1") {

        html.classList.remove('theme-2');
        html.classList.remove('theme-3')
        html.classList.add('theme-1');
        return
    }
    if(e.target.value == "theme-2") {

        html.classList.remove('theme-1');
        html.classList.remove('theme-3');

        html.classList.add('theme-2');
        return
    }
    if(e.target.value == "theme-3") {

        html.classList.remove('theme-2');
        html.classList.remove('theme-1');
        html.classList.add('theme-3');
    }

    
    

}

