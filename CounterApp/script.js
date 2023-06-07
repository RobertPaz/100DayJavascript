let count = document.querySelector('.count')
let buttonsContainer = document.querySelector('div.buttons')

buttonsContainer.addEventListener('click', (button) => {
    if(button.target.classList.contains("add")){
        count.innerHTML++
        setColor()
    }
    else if(button.target.classList.contains("subtract")){
        count.innerHTML--
        setColor()
    }
    else if(button.target.classList.contains("reset")){
        count.innerHTML=0
        setColor()
    }
})
setColor = () => {
    if(count.innerHTML<0){
        count.style.color = 'red'
    }
    else if(count.innerHTML>0){
        count.style.color = 'green'
    }
    else {
        count.style.color = 'white'
    }
}