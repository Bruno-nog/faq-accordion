const registerBtns = document.querySelectorAll('.question')

registerBtns.forEach((registerBtn, index) => {
    registerBtn.addEventListener('click', () => {
        const answer = document.querySelectorAll('.answer')
        const mostrar = document.querySelector('.showed')

        if(mostrar !== answer){
            mostrar.classList.remove('showed')
        }

        answer[index].classList.toggle('showed')
        })
    })




















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