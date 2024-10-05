let body = document.querySelector('body');
let modeBtn = document.querySelector('#mode');
let currMode = 'light';//dark

modeBtn.addEventListener('click', () => {
    if (currMode === 'light') {
        body.classList.add('dark');
        body.classList.remove('light');
        currMode = 'dark';
    }
    else {
        body.classList.add('light');
        body.classList.remove('dark');
        currMode = 'light';
    }
    console.log(currMode);
})