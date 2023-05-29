const imageTable = [
    'https://th.bing.com/th/id/OIP.5lzwARQ4PrquAm5ZZ-pvaAHaGm?pid=ImgDet&rs=1'

]

const imageBtn = document.getElementById("imageBtn")
const image = document.getElementById("image")
console.log(imageBtn)
console.log(image)

function randomNumber(max){
    return Math.floor(Math.random()*max)
}
console.log(randomNumber(3))

function showImage(){
    let number = randomNumber(imageTable.length)
    image.src = imageTable[number]
}

imageBtn.addEventListener("click", showImage )