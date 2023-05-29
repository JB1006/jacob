let h1Element=document.getElementById(`h1`)
// innerHTML

function ChangeText(){
    h1Element.innerHTML=`jestem kliknięty`
}

h1Element.addEventListener(`click`, ChangeText)

const blueBtnElement=document.getElementById(`blueBtn`)
console.log(blueBtnElement)

// zad.2
function ChangeBackgroundColor(){
    
        document.body.style.backgroundColor="lightblue"
}

blueBtnElement.addEventListener(`click`, ChangeBackgroundColor)

//zad.3
const randomBtn=document.getElementById(`buttonRandom`)
const randomNumber=document.getElementById(`randomNumber`)
//Math random floor
function generateRandom(max){
    return Math.floor(Math.random()*max)
    
}
function randomNumberGenerator(){
    randomNumber.innerHTML=generateRandom(100)
}

randomBtn.addEventListener(`click`,randomNumberGenerator)

const tableImages = [

]

const h2Element = document.getElementById(`h2`)
const imgElement = document.getElementById(`imgomething`)

function changeImg(){
    imgElement.src = tableImages[2]
}

