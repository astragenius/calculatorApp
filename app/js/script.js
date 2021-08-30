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

