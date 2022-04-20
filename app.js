
const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sideBar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length
const container = document.querySelector('.container')

let activeSlideIndex = 0 
sideBar.style.top = `-${(slidesCount  - 1) * 100}vh`

upBtn.addEventListener('click', () =>{
    changeSlide('up')
})

downBtn.addEventListener('click', () =>{
    changeSlide('down')
})

document.addEventListener('keydown', (event) => {
    if (event.key == 'ArrowUp') {
        console.log(event)
        changeSlide('up')
    }
})

document.addEventListener('keydown', (event) => {
    if (event.key == 'ArrowDown') {
        console.log(event)
        changeSlide('down')
    }
})


function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex += 1
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0
        }
    }
    else if (direction === 'down') {
        activeSlideIndex -= 1
        if (activeSlideIndex === -1) {
            activeSlideIndex = slidesCount-1
        }
    }
    
    const height = container.clientHeight
    
    mainSlide.style.transform = `TranslateY(-${activeSlideIndex * height}px)`
    sideBar.style.transform = `TranslateY(${activeSlideIndex * height}px)`
}