console.log("1")
let numbers = [1, 4, 3, 7, -3, 0, 5, 9, -2, 10]
console.log(numbers[0], numbers[9])
console.log("zadanie 2")
for(let i=0; i<10; i++){
    console.log(i)
}
console.log("zadanie 4")
for(let i=0; i<10; i++){
    console.log(numbers[i])
}
console.log("zadanie 5")
for(let i=0; i<10; i++){
    if(numbers[i] > 0)
    console.log(numbers[i])
}

console.log("zadanie 6")
for(let i=0; i<10; i++){
    if(numbers[i] % 2 == 0)
    console.log(numbers[i])
}

console.log("zadanie 7")
let months =  ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień']

console.log("zadanie 8")
for(let m of months){
    console.log(m)
}