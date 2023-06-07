const randomNumber = Math.floor(Math.random()*100)
const numberText = document.querySelector(".numberText")
const randomNumberButton = document.querySelector(".generateNumber")
const generateNumber = () => {
    const randomNumber = Math.floor(Math.random()*100)
    numberText.innerHTML = randomNumber;
}

randomNumberButton.addEventListener('click',generateNumber)
