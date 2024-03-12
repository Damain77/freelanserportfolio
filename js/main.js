const btnDarkMode = document.querySelector('.dark-mode-btn')


function changeDarkMode(){
    // проверка теменой темы в LocalStorage
    const modeInLocal = localStorage.getItem('darkMode')
    if (modeInLocal){
        if(modeInLocal === 'dark'){
            darkModeHandler()
        }
    //Проверка темной темы на уровне системных нгастроек
    } else if ((window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)){
        darkModeHandler()
    }
}
changeDarkMode()

//  если меняются системные настройки меняем тему

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change',() =>{
    if (!localStorage.getItem('darkMode')){
        darkModeHandler()
    }
})

function darkModeHandler (){
    btnDarkMode.classList.toggle('dark-mode-btn--active')
    return document.body.classList.toggle('dark')
}

btnDarkMode.onclick = function(){   
    if ( darkModeHandler()){
        localStorage.setItem('darkMode', 'dark')
    } else {
        localStorage.setItem('darkMode', 'light')
    }
}
