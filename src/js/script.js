const registerBtns = document.querySelectorAll('.question');

function closeAllAnswers() {
    const answers = document.querySelectorAll('.answer');
    const icons = document.querySelectorAll('.icon-plus');

    answers.forEach((answer, i) => {
        answer.classList.remove('showed');
        icons[i].setAttribute('src', './src/assets/images/icon-plus.svg');
    });
}

closeAllAnswers();

registerBtns.forEach((registerBtn, index) => {
    registerBtn.addEventListener('click', () => {
        const answers = document.querySelectorAll('.answer');
        const icons = document.querySelectorAll('.icon-plus');

        closeAllAnswers();

        answers[index].classList.toggle('showed');

        if (answers[index].classList.contains('showed')) {
            icons[index].setAttribute('src', './src/assets/images/icon-minus.svg');
        } else {
            icons[index].setAttribute('src', './src/assets/images/icon-plus.svg');
        }
    });
});



















/*
 const show = document.querySelector('.showed')
        const answers = document.querySelectorAll('.answer')

        show.classList.remove('showed')

        answers.classList.toggle('showed')

const answer = document.querySelector('.answer')
        const mostrar = document.querySelector('.showed')
        if(mostrar !== answer){
            mostrar.classList.remove('showed')
        }
        answer.classList.toggle('showed')

        */